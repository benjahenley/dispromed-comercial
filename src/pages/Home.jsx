import { Link } from "react-router-dom";
import { HeroCarousel } from "../components/HeroCarousel";
import { Section } from "../components/Section";

export function Home() {
  return (
    <div>
      <HeroCarousel />

      {/* Sobre Nosotros */}
      <Section
        title="Sobre Nosotros"
        subtitle="Compromiso con la salud y el bienestar">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-ink/80 leading-relaxed mb-4">
            Dispromed Comercial es una empresa líder en la distribución de
            insumos médicos y equipamiento hospitalario en Argentina. Con más de
            dos décadas de experiencia, nos especializamos en brindar soluciones
            integrales al sector salud.
          </p>
          <p className="text-ink/80 leading-relaxed">
            Trabajamos con las mejores marcas nacionales e internacionales,
            garantizando productos de máxima calidad y un servicio personalizado
            que se adapta a las necesidades de cada cliente.
          </p>
        </div>
      </Section>

      {/* Valores */}
      <Section
        title="Dispromed es líder en distribución de insumos médicos"
        subtitle="La mejor combinación: calidad, primeras marcas y personal calificado. Productos médicos que superan las expectativas."
        className="bg-ink/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative bg-white p-8 border-2 border-ink/10 hover:border-brand-300 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="icon-morph w-20 h-20 flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-ink group-hover:text-brand-300 transition-colors">
              Integridad
            </h3>
            <p className="text-ink/70 text-center leading-relaxed text-sm">
              Nos preocupamos constantemente por las necesidades de nuestros
              clientes y socios comerciales para dar solución a sus problemas,
              superando sus expectativas.
            </p>
          </div>

          <div className="group relative bg-white p-8 border-2 border-ink/10 hover:border-brand-300 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="icon-morph w-20 h-20 flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-ink group-hover:text-brand-300 transition-colors">
              Respeto a las Personas
            </h3>
            <p className="text-ink/70 text-center leading-relaxed text-sm">
              Reconocemos el valor de cada individuo, valorando sus intereses y
              necesidades. Respetamos y valoramos la diversidad de ideas y
              opiniones.
            </p>
          </div>

          <div className="group relative bg-white p-8 border-2 border-ink/10 hover:border-brand-300 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="icon-morph w-20 h-20 flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-ink group-hover:text-brand-300 transition-colors">
              Orientación al Cliente
            </h3>
            <p className="text-ink/70 text-center leading-relaxed text-sm">
              Escuchamos activamente a nuestros clientes y socios, buscamos
              satisfacer sus necesidades y ampliamos nuestra red comercial para
              crecer juntos.
            </p>
          </div>

          <div className="group relative bg-white p-8 border-2 border-ink/10 hover:border-brand-300 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="icon-morph w-20 h-20 flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-ink group-hover:text-brand-300 transition-colors">
              Diversidad e Inclusión
            </h3>
            <p className="text-ink/70 text-center leading-relaxed text-sm">
              Fomentamos la libertad de expresión y la diversidad. Creemos que
              con gente diversa y productos variados crecemos tanto personal
              como corporativamente.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Contacto */}
      <Section
        padding={false}
        className="bg-linear-to-r py-12 md:py-16 from-brand-300 to-brand-200 p">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4 tracking-wide">
            ¿ Necesitás asesoramiento ?
          </h2>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Nuestro equipo está listo para ayudarte a encontrar los productos
            que mejor se adapten a tus necesidades.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-brand-300 px-8 py-3 font-semibold hover:bg-white/90 transition-colors">
            Contactar ahora
          </Link>
        </div>
      </Section>

      {/* Novedades Preview */}
      <Section
        title="Novedades"
        subtitle="Mantente informado sobre nuestros últimos productos y servicios"
        className="bg-ink/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white overflow-hidden border border-ink/10 hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden bg-ink/5">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=300&fit=crop"
                alt="Nuevas líneas de productos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <time className="text-sm text-ink/60">Octubre 2025</time>
              <h3 className="text-xl font-semibold my-2">
                Nuevas líneas de productos
              </h3>
              <p className="text-ink/70 mb-4">
                Incorporamos nuevas marcas internacionales a nuestro catálogo.
              </p>
              <Link
                to="/novedades"
                className="text-brand-300 hover:text-brand-400 font-medium">
                Leer más →
              </Link>
            </div>
          </article>

          <article className="bg-white overflow-hidden border border-ink/10 hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden bg-ink/5">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=300&fit=crop"
                alt="Capacitación continua"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <time className="text-sm text-ink/60">Septiembre 2025</time>
              <h3 className="text-xl font-semibold my-2">
                Capacitación continua
              </h3>
              <p className="text-ink/70 mb-4">
                Nuestro equipo se mantiene actualizado en las últimas
                tecnologías.
              </p>
              <Link
                to="/novedades"
                className="text-brand-300 hover:text-brand-400 font-medium">
                Leer más →
              </Link>
            </div>
          </article>

          <article className="bg-white overflow-hidden border border-ink/10 hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden bg-ink/5">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=300&fit=crop"
                alt="Expansión de servicios"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <time className="text-sm text-ink/60">Agosto 2025</time>
              <h3 className="text-xl font-semibold my-2">
                Expansión de servicios
              </h3>
              <p className="text-ink/70 mb-4">
                Ampliamos nuestra cobertura para mejor atención a nuestros
                clientes.
              </p>
              <Link
                to="/novedades"
                className="text-brand-300 hover:text-brand-400 font-medium">
                Leer más →
              </Link>
            </div>
          </article>
        </div>
      </Section>
    </div>
  );
}
