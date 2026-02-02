import { Link } from "react-router-dom";

export function NewsCard({ item }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-video w-full bg-ink/5">
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </div>

        {/* top chips */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold tracking-wide text-ink/70 shadow-sm">
            {item.dateLabel}
          </span>
          {item.tag && (
            <span className="inline-flex items-center rounded-full bg-brand-300/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-400">
              {item.tag}
            </span>
          )}
        </div>

        {/* bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/25 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="relative p-6 md:p-7">
        <h3 className="text-xl font-semibold text-ink tracking-tight">
          {item.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-ink/70">
          {item.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between">
          {/* subtle underline */}
          <div className="h-px flex-1 bg-ink/10" />

          <Link
            to={item.href}
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-brand-300/10 px-4 py-2 text-sm font-semibold text-brand-400 transition-all duration-300 hover:bg-brand-300/15">
            Leer más
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
