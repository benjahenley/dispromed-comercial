import { Link } from "react-router-dom";

export function Breadcrumbs({ items, hideSingleItemLabel = false }) {
  const numberOfItems = items.length;
  const firstItem = items[0];
  const lastItem = items[numberOfItems - 1];
  const hasMiddleItems = numberOfItems > 2;
  const shouldHideSingle = hideSingleItemLabel && numberOfItems === 1;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1 text-xs sm:hidden">
        {numberOfItems > 1 && firstItem && (
          <>
            {firstItem.href ? (
              <Link
                to={firstItem.href}
                title={firstItem.label}
                className="max-w-20 truncate text-ink/60 transition-colors hover:text-brand-300">
                {firstItem.label}
              </Link>
            ) : (
              <span
                title={firstItem.label}
                className="max-w-20 truncate text-ink/60">
                {firstItem.label}
              </span>
            )}

            <svg
              className="h-3.5 w-3.5 shrink-0 text-ink/40"
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
          </>
        )}

        {hasMiddleItems && (
          <>
            <span className="shrink-0 text-ink/40">...</span>
            <svg
              className="h-3.5 w-3.5 shrink-0 text-ink/40"
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
          </>
        )}

        {lastItem && (
          <span
            title={lastItem.label}
            className="max-w-[12rem] truncate font-medium text-ink">
            {lastItem.label}
          </span>
        )}
      </ol>

      <ol className="hidden items-center gap-2 text-sm sm:flex">
        {items.map((item, idx) => (
          <li key={idx} className="flex min-w-0 items-center gap-2">
            {idx > 0 && (
              <svg
                className="w-4 h-4 text-ink/40"
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
            )}
            {item.href ? (
              <Link
                to={item.href}
                title={item.label}
                className={`max-w-[16rem] truncate text-ink/60 hover:text-brand-300 transition-colors ${
                  shouldHideSingle ? "invisible" : ""
                }`}>
                {item.label}
              </Link>
            ) : (
              <span
                title={item.label}
                className={`${
                  shouldHideSingle ? "invisible" : ""
                } max-w-[18rem] truncate text-ink`}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
