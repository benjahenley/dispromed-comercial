import { Link } from "react-router-dom";
import { HeroCarousel } from "../components/HeroCarousel";
import { Section } from "../components/Section";
import { values } from "../data/values.jsx";
import ValueCards from "../components/ValueCards.jsx";
import { NewsSection } from "../components/NewsSection.jsx";
import { Navbar } from "../components/navbar/Navbar.jsx";
import { StatCircle } from "../components/StatCircle.jsx";
import { useInView } from "../hooks/useInView.js";

export function Home() {
  const statsAccent = "var(--color-accent-300)";
  const [cardsRef, cardsInView] = useInView({ threshold: 0.05 });
  const [sobreRef, sobreInView] = useInView();
  const [statsRef, statsInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <div>
      <Navbar />
      <HeroCarousel />

      {/* Value Cards — impressive entrance */}
      <div
        ref={cardsRef}
        style={{ perspective: "1200px" }}
        className="relative space-y-8 max-w-7xl z-[60] -mt-[25vh] mx-auto grid grid-cols-1 md:grid-cols-2 w-fit gap-10 xl:grid-cols-4 flex-row items-start justify-center justify-items-center">
        {values.map((value, idx) => (
          <div
            key={value.title}
            className={`anim-card ${cardsInView ? "in-view" : ""}`}
            style={{ animationDelay: `${idx * 90}ms` }}>
            <ValueCards value={value} />
          </div>
        ))}
      </div>

      {/* Sobre Nosotros */}
      <Section title="Sobre Nosotros" className="bg-white text-ink">
        <div ref={sobreRef} className="max-w-4xl mx-auto text-center">
          <p
            className={`leading-relaxed mb-4 reveal ${
              sobreInView ? "in-view" : ""
            }`}>
            Dispromed Comercial S.R.L. fue fundada en 1994 como una empresa
            unipersonal que, con el tiempo, creció y se consolidó como una
            empresa dedicada a la distribución de insumos médicos. En 2005
            incorporó la importación de productos descartables, como guantes de
            examen, jeringas y agujas, entre otros.
          </p>

          <p
            className={`leading-relaxed mb-12 reveal reveal-d1 ${
              sobreInView ? "in-view" : ""
            }`}>
            Actualmente distribuye productos médicos de origen nacional e
            internacional, siendo además importadora de algunos de ellos, y
            cuenta con presencia en la Provincia de Buenos Aires, en el interior
            del país y una cartera de clientes en todo el territorio nacional y
            países limítrofes.
          </p>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div className={`reveal ${statsInView ? "in-view" : ""}`}>
              <StatCircle
                value={30}
                suffix="+"
                label="Años de experiencia"
                color={statsAccent}
              />
            </div>
            <div className={`reveal reveal-d2 ${statsInView ? "in-view" : ""}`}>
              <StatCircle
                value={100}
                suffix="%"
                label="Compromiso con la calidad"
                color={statsAccent}
              />
            </div>
            <div className={`reveal reveal-d4 ${statsInView ? "in-view" : ""}`}>
              <StatCircle
                value={500}
                suffix="+"
                label="Clientes activos"
                color={statsAccent}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Contacto */}
      <Section
        padding={false}
        className="relative overflow-hidden bg-linear-to-br from-brand-400 via-[#285a13] to-brand-300 py-16 md:py-24">
        <div
          className="
      pointer-events-none absolute inset-0
      bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_1px)]
      bg-size-[20px_20px]
      opacity-25
      animate-[float_30s_linear_infinite]
    "
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-100/14 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brand-200/22 blur-3xl" />

        <div ref={ctaRef} className="relative mx-auto max-w-6xl px-4">
          <div className="relative overflow-visible rounded-[34px] border border-white/18 bg-white/7 p-8 text-white shadow-[0_26px_80px_rgba(6,19,8,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-[2px] md:p-11 lg:pr-80">
            <span
              className={`inline-block mb-4 rounded-full border border-white/20 bg-white/16 px-4 py-1 text-xs font-semibold tracking-wide reveal ${
                ctaInView ? "in-view" : ""
              }`}>
              Atención personalizada
            </span>
            <h2
              className={`max-w-2xl text-3xl md:text-4xl font-semibold mb-4 tracking-wide reveal reveal-d1 ${
                ctaInView ? "in-view" : ""
              }`}>
              ¿Necesitás asesoramiento?
            </h2>
            <p
              className={`max-w-2xl text-lg text-white/90 mb-8 reveal reveal-d2 ${
                ctaInView ? "in-view" : ""
              }`}>
              Nuestro equipo está listo para ayudarte a encontrar los productos
              que mejor se adapten a tus necesidades.
            </p>
            <div
              className={`group relative inline-block reveal reveal-d3 ${
                ctaInView ? "in-view" : ""
              }`}>
              <div className="absolute inset-0 -z-10 rounded-full bg-brand-100/40 blur-xl opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
              <Link
                to="/contacto"
                className="
          group inline-flex items-center justify-center gap-2
          rounded-full bg-white/95
          px-9 py-3.5
          text-sm md:text-base font-semibold text-brand-400
          shadow-[0_18px_52px_rgba(5,16,7,0.32)]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-0.5
          hover:shadow-[0_24px_65px_rgba(5,16,7,0.4)]
          focus:outline-none
          focus-visible:ring-2 focus-visible:ring-white/70
        ">
                Contactar ahora
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 -bottom-40 hidden overflow-hidden md:block">
              <div className="absolute bottom-0 right-4 lg:right-6">
                <div className="absolute bottom-6 right-6 h-28 w-28 rounded-full bg-white/30 blur-2xl" />
                <img
                  src="/dentista_corazon_transparente2.png"
                  alt="Profesional de la salud"
                  loading="lazy"
                  className="relative block w-[210px] lg:w-[300px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.28)]"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Novedades Preview */}
      <NewsSection />
    </div>
  );
}
