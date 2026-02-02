import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MegaMenu } from "../MegaMenu";
import { Drawer } from "../Drawer";
import Finder from "../Finder";
import NavLink from "./NavLink";
import { navItems } from "../../data/navitems";
import { BrandHeader } from "../BrandHeader";

export function SecondaryNavbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [openFinder, setOpenFinder] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const timeoutRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (openFinder) inputRef.current?.focus();
  }, [openFinder]);

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
      <div className="relative top-0 z-100 left-0 right-0">
        {/* Top bar with search, logo, and icons */}
        <div className="bg-linear-to-br from-brand-400 via-brand-300 to-brand-200 relative overflow-hidden">
          {/* Subtle Texture */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-size-[20px_20px] opacity-60"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
            }}></div>
          {/* Header */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full flex justify-center">
            <BrandHeader onOpenMenu={() => setDrawerOpen(true)} />
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:block relative overflow-visible z-100">
            <div className="relative max-w-8xl mx-auto px-4">
              <div className="flex items-center justify-between gap-6 rounded-full w-full max-w-7xl mx-auto px-8 min-h-[72px]  z-100000">
                {/* Search Button */}
                <div className="flex flex-row gap-5 items-center">
                  <button
                    type="button"
                    onClick={() => setOpenFinder((v) => !v)}
                    className="shrink-0 p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group cursor-pointer"
                    aria-label="Open search">
                    <svg
                      className="w-6 h-6 text-white transition-colors"
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

                  <Finder
                    inverted
                    open={openFinder}
                    inputRef={inputRef}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    handleSearch={handleSearch}
                    onClose={() => setOpenFinder(false)}
                  />
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-10 px-4">
                  {navItems.map((item) => (
                    <NavLink
                      color={"text-white"}
                      item={item}
                      handleMouseEnter={() => handleMouseEnter}
                    />
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        <MegaMenu isOpen={megaMenuOpen} onMouseLeave={handleMouseLeave} />
        <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </div>
    </>
  );
}
