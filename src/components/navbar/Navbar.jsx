import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MegaMenu } from "../MegaMenu";
import { Drawer } from "../Drawer";
import Finder from "../Finder";
import NavLink from "./NavLink";
import { navItems } from "../../data/navitems";
import { BrandHeader } from "../BrandHeader";
import { useProductSearch } from "../../hooks/useProductSearch";

export function Navbar() {
  const location = useLocation();
  const [topMegaMenuOpen, setTopMegaMenuOpen] = useState(false);
  const [stickyMegaMenuOpen, setStickyMegaMenuOpen] = useState(false);
  const [openFinder, setOpenFinder] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyMounted, setStickyMounted] = useState(false);
  const [stickyShown, setStickyShown] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const timeoutRef = useRef(null);
  const inputRef = useRef(null);
  const navShellRef = useRef(null);

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
    setTopMegaMenuOpen(false);
    setStickyMegaMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky((prev) => {
        const stickIn = window.innerHeight * 0.34;
        const stickOut = window.innerHeight * 0.22;
        const nextSticky = prev
          ? window.scrollY > stickOut
          : window.scrollY > stickIn;

        if (prev !== nextSticky) {
          setOpenFinder(false);
          setTopMegaMenuOpen(false);
          setStickyMegaMenuOpen(false);
        }
        return nextSticky;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!openFinder) return;

    const handleClickOutside = (event) => {
      if (navShellRef.current && !navShellRef.current.contains(event.target)) {
        handleCloseFinder();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openFinder]);

  useEffect(() => {
    let rafId;
    let timeoutId;

    if (isSticky) {
      setStickyMounted(true);
      rafId = window.requestAnimationFrame(() => {
        setStickyShown(true);
      });
    } else if (stickyMounted) {
      setStickyShown(false);
      timeoutId = window.setTimeout(() => {
        setStickyMounted(false);
      }, 220);
    }

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [isSticky, stickyMounted]);

  const handleTopMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setStickyMegaMenuOpen(false);
    setTopMegaMenuOpen(true);
  };

  const handleStickyMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setTopMegaMenuOpen(false);
    setStickyMegaMenuOpen(true);
  };

  const handleTopMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setTopMegaMenuOpen(false);
    }, 100);
  };

  const handleStickyMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setStickyMegaMenuOpen(false);
    }, 100);
  };

  const handleCloseFinder = () => {
    setOpenFinder(false);
    setSearchQuery("");
  };

  const renderDesktopNav = (sticky = false) => (
    <nav
      className={`hidden lg:block overflow-visible transition-all duration-260 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        sticky
          ? `fixed top-2 left-0 right-0 z-[140] ${
              stickyShown
                ? "opacity-100 translate-y-0 scale-100 blur-0"
                : "opacity-0 -translate-y-4 scale-[0.97] blur-[1px] pointer-events-none"
            }`
          : "relative h-0 z-[120] opacity-100"
      }`}>
      <div
        className={`relative max-w-8xl mx-auto px-4 ${
          sticky ? "py-3" : "pb-9"
        }`}>
        <div
          ref={navShellRef}
          className={`mx-auto flex min-h-[64px] w-full items-center justify-between rounded-full border border-white/20 bg-white/55 shadow-xl backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            openFinder ? "max-w-7xl px-8 py-2 gap-6" : "max-w-5xl px-6 py-2 gap-3"
          } ${sticky ? "translate-y-0" : "-translate-y-[50%]"}`}>
          {/* Search Button */}
          <div
            className={`flex items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              openFinder ? "w-[26rem] gap-3" : "w-12 gap-0"
            } ${openFinder ? "overflow-visible" : "overflow-hidden"} ${
              sticky ? "z-[150]" : ""
            }`}>
            <button
              type="button"
              onClick={() => setOpenFinder((v) => !v)}
              className="shrink-0 p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group cursor-pointer"
              aria-label="Open search">
              <svg
                className="w-6 h-6 text-ink/90 transition-colors"
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
          <div
            className={`flex items-center transition-all duration-500 ${
              openFinder ? "gap-10 px-4" : "gap-6 px-2"
            }`}>
            {navItems.map((item) => (
              <NavLink
                item={item}
                handleMouseEnter={sticky ? handleStickyMouseEnter : handleTopMouseEnter}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-[120]">
        {/* Top bar with search, logo, and icons */}
        <div className="relative overflow-hidden bg-linear-to-br from-brand-400/95 via-brand-300/95 to-brand-200/95">
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
          <div className="relative mx-auto flex w-full max-w-7xl justify-center px-4 py-2.5 sm:px-6 sm:py-3 lg:mb-8 lg:px-8 lg:py-4">
            <BrandHeader onOpenMenu={() => setDrawerOpen(true)} />
          </div>
        </div>

        {!stickyMounted && renderDesktopNav(false)}

        <MegaMenu
          isOpen={topMegaMenuOpen}
          onMouseLeave={handleTopMouseLeave}
          onClose={() => setTopMegaMenuOpen(false)}
          topPaddingClass="pt-16"
        />
        <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </div>
      {stickyMounted && renderDesktopNav(true)}
      <MegaMenu
        isOpen={stickyMegaMenuOpen}
        onMouseLeave={handleStickyMouseLeave}
        onClose={() => setStickyMegaMenuOpen(false)}
        topPaddingClass="pt-5"
        positionClass="fixed top-[86px]"
        variant="floating"
        tipClass="left-[68%] -translate-x-1/2"
      />
    </>
  );
}
