import { useEffect, useRef } from "react";
import SearchResults from "./SearchResults";

export default function Finder({
  open,
  inputRef,
  searchQuery,
  setSearchQuery,
  handleSearch,
  onClose,
  inverted = false,
  searchResults = [],
  isSearchActive = false,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onClose?.();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  const classes = inverted
    ? "border-white text-white placeholder-white focus:outline-none focus:none"
    : "border-brand-400 text-brand-400 placeholder-ink/50 focus:outline-none focus:brand-400";

  const handleSelect = () => {
    setSearchQuery("");
    onClose?.();
  };

  return (
    <div
      ref={containerRef}
      className={`
        overflow-visible lg:mr-20 relative
        transition-all duration-300 ease-out
        ${open ? "w-full opacity-100" : "w-full opacity-0 pointer-events-none"}
      `}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch?.();
        }}
        className="relative w-full">
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="BUSCAR"
          onKeyDown={(e) => e.key === "Escape" && onClose?.()}
          className={
            classes +
            " w-full px-4 py-2 pr-12 placeholder:tracking-wide border rounded-md backdrop-blur-sm text-sm"
          }
        />
      </form>

      {open && (
        <SearchResults
          results={searchResults}
          isActive={isSearchActive}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}
