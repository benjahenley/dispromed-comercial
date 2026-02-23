import { Link, useLocation } from "react-router-dom";

const baseLinkClass =
  "group relative inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-semibold uppercase tracking-wide transition-all duration-200";

export default function NavLink({
  item,
  handleMouseEnter,
  handleMouseLeave,
  color = "text-ink-400/80",
}) {
  const location = useLocation();
  const isActive =
    item.to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(item.to);

  const activeClass = isActive
    ? "opacity-100 after:scale-x-100"
    : "opacity-85 hover:opacity-100";

  const canOpenMegaMenu = item.hasMegaMenu && typeof handleMouseEnter === "function";

  if (item.hasMegaMenu) {
    return (
      <div
        key={item.to}
        onMouseEnter={canOpenMegaMenu ? handleMouseEnter : undefined}
        className="relative">
        <Link
          to={item.to}
          className={`${baseLinkClass} ${color} ${activeClass} hover:bg-white/10 after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200`}>
          {item.label}
          {canOpenMegaMenu && (
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
          )}
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
      className={`${baseLinkClass} ${color} ${activeClass} ${item.className ?? ""} hover:bg-white/10 after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200`}>
      {item.label}
    </Link>
  );
}
