import { Link } from "react-router-dom";

const baseClass =
  "mt-4 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-brand-300 px-6 text-base font-medium text-white shadow-sm transition hover:bg-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-300/30 active:scale-[0.99]";

export default function PrimaryButton({ text, href, to = "/contacto" }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}>
        {text}
      </a>
    );
  }

  return (
    <Link to={to} className={baseClass}>
      {text}
    </Link>
  );
}
