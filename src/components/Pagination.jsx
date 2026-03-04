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
    <div className="mt-8 overflow-x-auto pb-1">
      <div className="mx-auto flex w-max min-w-full flex-wrap items-center justify-center gap-1.5 sm:gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-ink/10 px-2 text-sm hover:bg-ink/5 disabled:cursor-not-allowed disabled:opacity-50 transition-colors sm:h-10 sm:min-w-10 sm:px-3"
        aria-label="Página anterior">
        <svg
          className="h-4 w-4 sm:h-5 sm:w-5"
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
            className="inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-ink/10 px-3 text-sm hover:bg-ink/5 transition-colors sm:h-10 sm:min-w-10 sm:px-4">
            1
          </button>
          {startPage > 2 && <span className="px-1.5 text-ink/40 sm:px-2">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`inline-flex h-9 min-w-9 items-center justify-center rounded-xl border px-3 text-sm transition-colors sm:h-10 sm:min-w-10 sm:px-4 ${
            page === currentPage
              ? "bg-brand-300 text-white border-brand-300"
              : "border-ink/10 hover:bg-ink/5"
          }`}>
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-1.5 text-ink/40 sm:px-2">...</span>}
          <button
            onClick={() => handlePageChange(totalPages)}
            className="inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-ink/10 px-3 text-sm hover:bg-ink/5 transition-colors sm:h-10 sm:min-w-10 sm:px-4">
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-ink/10 px-2 text-sm hover:bg-ink/5 disabled:cursor-not-allowed disabled:opacity-50 transition-colors sm:h-10 sm:min-w-10 sm:px-3"
        aria-label="Página siguiente">
        <svg
          className="h-4 w-4 sm:h-5 sm:w-5"
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
    </div>
  );
}
