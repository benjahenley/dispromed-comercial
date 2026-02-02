import { Section } from "../components/Section";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SecondaryNavbar } from "../components/navbar/SecondaryNavbar";
import { NewsCard } from "../components/NewsCard";
import news from "../data/news.json";

export function Novedades() {
  return (
    <div className="min-h-screen bg-white">
      <SecondaryNavbar></SecondaryNavbar>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ label: "Novedades" }]} />

        <Section
          title="Novedades"
          subtitle="Mantenete informado sobre las últimas noticias y actualizaciones de Dispromed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl  sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-ink/10 bg-white/70 p-8 shadow-sm backdrop-blur sm:p-10">
              <div className="text-center">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  ¿Querés recibir nuestras novedades?
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
                  Suscribite a nuestro newsletter para estar al tanto de las
                  últimas actualizaciones, nuevos productos y promociones
                  especiales.
                </p>
              </div>

              <form
                className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:mt-8 sm:flex-row sm:items-stretch"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Suscripción próximamente disponible");
                }}>
                <label className="sr-only" htmlFor="newsletter-email">
                  Email
                </label>

                <div className="relative flex-1">
                  <input
                    id="newsletter-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    placeholder="Tu email"
                    className="h-12 w-full rounded-2xl border border-ink/10 bg-white px-4 pr-4 text-base text-ink placeholder:text-ink/40 shadow-sm outline-none transition focus:border-brand-300 focus:ring-4 focus:ring-brand-300/20"
                  />
                </div>

                <button
                  type="submit"
                  className="h-12 rounded-2xl bg-brand-300 px-6 text-base font-medium text-white shadow-sm transition hover:bg-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-300/30 active:scale-[0.99] sm:px-7">
                  Suscribirme
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-ink/50 sm:text-sm">
                Sin spam. Podés darte de baja cuando quieras.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
