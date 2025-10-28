import { Link } from "react-router-dom";

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            to="/"
            className="text-ink/60 hover:text-brand-300 transition-colors">
            Inicio
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
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
            {item.href ? (
              <Link
                to={item.href}
                className="text-ink/60 hover:text-brand-300 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
