import { Link } from "react-router-dom";
import { HeroCarousel } from "../components/HeroCarousel";
import { Section } from "../components/Section";
import { values } from "../data/values.jsx";
import ValueCards from "../components/ValueCards.jsx";
import { NewsSection } from "../components/NewsSection.jsx";
import { Navbar } from "../components/navbar/Navbar.jsx";
import { StatCircle } from "../components/StatCircle.jsx";

export function Home() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <div className=" space-y-8 max-w-7xl z-50 -mt-[25vh] mx-auto grid grid-cols-1 md:grid-cols-2 w-fit gap-10 xl:grid-cols-4 flex-row items-start justify-center justify-items-center">
        {values.map((value, idx) => (
          <ValueCards key={idx} value={value} />
        ))}
      </div>

      {/* Sobre Nosotros */}
      <Section title="Sobre Nosotros" className="bg-white text-ink">
        <div className="max-w-4xl mx-auto text-center">
          <p className="leading-relaxed mb-4">
            Dispromed Comercial es una empresa líder en la distribución de
            insumos médicos y equipamiento hospitalario en Argentina. Con más de
            dos décadas de experiencia, nos especializamos en brindar soluciones
            integrales al sector salud.
          </p>

          <p className="leading-relaxed mb-12 ">
            Trabajamos con las mejores marcas nacionales e internacionales,
            garantizando productos de máxima calidad y un servicio personalizado
            que se adapta a las necesidades de cada cliente.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <StatCircle value={30} suffix="+" label="Años de experiencia" />
            <StatCircle
              value={100}
              suffix="%"
              label="Compromiso con la calidad"
            />
            <StatCircle value={500} suffix="+" label="Clientes activos" />
          </div>
        </div>
      </Section>

      {/* CTA Contacto */}
      <Section
        padding={false}
        className="relative overflow-hidden bg-linear-to-r from-brand-300 to-brand-200 py-14 md:py-20">
        {/* subtle animated pattern */}
        <div
          className="
      pointer-events-none absolute inset-0
      bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_1px)]
      bg-size-[18px_18px]
      opacity-20
      animate-[float_30s_linear_infinite]
    "
        />

        {/* soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
        <div className="relative text-center text-white max-w-3xl mx-auto px-4">
          <span className="inline-block mb-4 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold tracking-wide">
            Atención personalizada
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-wide">
            ¿Necesitás asesoramiento?
          </h2>

          <p className="text-lg text-white/90 mb-8">
            Nuestro equipo está listo para ayudarte a encontrar los productos
            que mejor se adapten a tus necesidades.
          </p>
          <div className="relative inline-block">
            {/* glow */}
            <div
              className="
          absolute inset-0 -z-10
          rounded-full
          bg-white/40 blur-xl
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
            />

            <Link
              to="/contacto"
              className="
          group inline-flex items-center justify-center gap-2
          rounded-full bg-white/95
          px-9 py-3.5
          text-sm md:text-base font-semibold text-brand-400
          shadow-[0_14px_40px_rgba(0,0,0,0.18)]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-0.5
          hover:shadow-[0_22px_60px_rgba(0,0,0,0.25)]
          focus:outline-none
          focus-visible:ring-2 focus-visible:ring-white/70
        ">
              Contactar ahora
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </Section>
      {/* Novedades Preview */}
      <NewsSection></NewsSection>
    </div>
  );
}
