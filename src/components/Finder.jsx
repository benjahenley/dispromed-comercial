import { useRef } from "react";
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
        relative min-w-0 overflow-visible
        transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${open ? "ml-1 w-full max-w-[22rem] opacity-100 translate-x-0" : "ml-0 max-w-0 opacity-0 -translate-x-1 pointer-events-none"}
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
          placeholder="Buscar"
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
