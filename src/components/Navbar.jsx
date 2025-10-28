import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MegaMenu } from "./MegaMenu";
import { Drawer } from "./Drawer";

export function Navbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 100);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Top bar with search, logo, and icons */}
        <div className="bg-brand-400">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="grid grid-cols-3 items-center gap-4 w-full">
              <div>
                <img src="/logo.png" alt="Dispromed" className="w-8 h-8" />
              </div>
              {/* Search Bar - Center */}
              <div className="flex justify-start">
                <form
                  onSubmit={handleSearch}
                  className="relative w-full max-w-md">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar"
                    className="w-full px-4 py-2 pr-12 border border-white/50 bg-brand-400 backdrop-blur-sm text-white placeholder-gray-200 focus:outline-white focus:ring-white focus:bg-brand-400 transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer transition-colors"
                    aria-label="Buscar">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Brand - Right */}
              <div className="flex justify-end">
                <Link to="/" className="text-center">
                  <div className="px-4 py-2">
                    <div className="text-xl font-bold text-white tracking-widest">
                      DISPROMED
                    </div>
                    <div className="text-xs text-white uppercase tracking-wider">
                      Insumos Odontológicos
                    </div>
                  </div>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex justify-end md:hidden">
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="p-2 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-sm"
                  aria-label="Abrir menú">
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:block bg-brand-400 backdrop-blur-sm border-t border-white/50 shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-8 py-2.5">
              <Link
                to="/"
                className="text-sm font-semibold text-white hover:text-brand-200 transition-colors uppercase tracking-wide">
                Inicio
              </Link>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative">
                <Link
                  to="/productos"
                  className="text-sm font-semibold text-white hover:text-brand-200 transition-colors uppercase tracking-wide flex items-center gap-1">
                  Productos
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
              </div>
              <Link
                to="/catalogos"
                className="text-sm font-semibold text-white hover:text-brand-200 transition-colors uppercase tracking-wide">
                Catálogos
              </Link>
              <Link
                to="/novedades"
                className="text-sm font-semibold text-white hover:text-brand-200 transition-colors uppercase tracking-wide">
                Novedades
              </Link>
              <Link
                to="/contacto"
                className="text-sm font-semibold text-white hover:text-brand-200 transition-colors uppercase tracking-wide">
                Contacto
              </Link>
            </div>
          </div>
        </nav>

        <MegaMenu
          isOpen={megaMenuOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
