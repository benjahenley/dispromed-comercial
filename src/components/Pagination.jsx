import { useSearchParams } from "react-router-dom";

export function Pagination({ total, limit, offset }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    const newOffset = (newPage - 1) * limit;
    newParams.set("offset", newOffset.toString());
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = [];
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 border border-ink/10 hover:bg-ink/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Página anterior">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className="px-4 py-2 border border-ink/10 hover:bg-ink/5 transition-colors">
            1
          </button>
          {startPage > 2 && <span className="px-2 text-ink/40">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 border transition-colors ${
            page === currentPage
              ? "bg-brand-300 text-white border-brand-300"
              : "border-ink/10 hover:bg-ink/5"
          }`}>
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="px-2 text-ink/40">...</span>
          )}
          <button
            onClick={() => handlePageChange(totalPages)}
            className="px-4 py-2 border border-ink/10 hover:bg-ink/5 transition-colors">
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 border border-ink/10 hover:bg-ink/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Página siguiente">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
