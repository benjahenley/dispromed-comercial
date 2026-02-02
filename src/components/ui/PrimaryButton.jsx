import { Link } from "react-router-dom";

export default function PrimaryButton({ text }) {
  return (
    <Link
      to="/contacto"
      className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-brand-300 px-6 text-base font-medium text-white shadow-sm transition hover:bg-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-300/30 active:scale-[0.99]">
      {text}
    </Link>
  );
}
