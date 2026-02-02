import { Link } from "react-router-dom";

const baseLinkClass =
  "text-sm font-semibold hover:text-brand-400 transition-colors duration-200 uppercase tracking-wide relative group";

export default function NavLink({
  item,
  handleMouseEnter,
  handleMouseLeave,
  color = "text-ink-400/80",
}) {
  if (item.hasMegaMenu) {
    return (
      <div key={item.to} onMouseEnter={handleMouseEnter()} className="relative">
        <Link
          to={item.to}
          className={`${baseLinkClass} ${color} flex items-center gap-1.5`}>
          {item.label}
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
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

        {/* Si querés, acá va tu dropdown */}
        {/* {isOpen && <ProductsDropdown />} */}
      </div>
    );
  }

  return (
    <Link
      key={item.to}
      to={item.to}
      className={`${baseLinkClass} ${color} ${item.className ?? ""}`}>
      {item.label}
    </Link>
  );
}
