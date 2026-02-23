import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MegaMenu } from "../MegaMenu";
import { Drawer } from "../Drawer";
import Finder from "../Finder";
import NavLink from "./NavLink";
import { navItems } from "../../data/navitems";
import { BrandHeader } from "../BrandHeader";
import { useProductSearch } from "../../hooks/useProductSearch";

export function SecondaryNavbar() {
  const location = useLocation();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [openFinder, setOpenFinder] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const timeoutRef = useRef(null);
  const inputRef = useRef(null);

  const { results, isActive } = useProductSearch(searchQuery);

  useEffect(() => {
    if (openFinder) inputRef.current?.focus();
  }, [openFinder]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleDesktop = (event) => {
      if (event.matches) {
        setDrawerOpen(false);
      }
    };

    if (media.matches) {
      setDrawerOpen(false);
    }

    media.addEventListener("change", handleDesktop);
    return () => media.removeEventListener("change", handleDesktop);
  }, []);

  useEffect(() => {
    setMegaMenuOpen(false);
  }, [location.pathname, location.search]);

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

  const handleCloseFinder = () => {
    setOpenFinder(false);
    setSearchQuery("");
  };

  return (
    <>
      <div className="relative top-0 z-100 left-0 right-0">
        {/* Top bar with search, logo, and icons */}
        <div className="relative bg-linear-to-br from-brand-400/95 via-brand-300/95 to-brand-200/95">
          {/* Subtle Texture */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-size-[20px_20px] opacity-60"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
              }}></div>
          </div>
          {/* Header */}
          <div className="relative mx-auto flex w-full max-w-7xl justify-center px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
            <BrandHeader onOpenMenu={() => setDrawerOpen(true)} />
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:block relative overflow-visible z-100">
            <div className="relative max-w-8xl mx-auto">
              <div className="z-100000 mx-auto flex min-h-[64px] w-full max-w-7xl items-center justify-between gap-6 rounded-full px-8">
                {/* Search Button */}
                <div className="flex flex-row gap-5 items-center w-full">
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
                    onClose={handleCloseFinder}
                    searchResults={results}
                    isSearchActive={isActive}
                  />
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-10 px-4">
                  {navItems.map((item) => (
                    <NavLink
                      color={"text-white"}
                      item={item}
                      handleMouseEnter={handleMouseEnter}
                    />
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        <MegaMenu
          isOpen={megaMenuOpen}
          onMouseLeave={handleMouseLeave}
          onClose={() => setMegaMenuOpen(false)}
          topPaddingClass="pt-[3.25rem]"
        />
        <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </div>
    </>
  );
}
