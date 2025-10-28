import { Section } from "../components/Section";
import { Breadcrumbs } from "../components/Breadcrumbs";

export function Novedades() {
  const novedades = [
    {
      id: 1,
      date: "Octubre 2025",
      title: "Incorporación de nuevas líneas de productos",
      image:
        "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop",
      excerpt:
        "Estamos orgullosos de anunciar la incorporación de nuevas marcas internacionales a nuestro catálogo.",
      content:
        "Hemos sumado productos de alta tecnología que complementan nuestra oferta actual, permitiéndonos brindar soluciones más completas a nuestros clientes del sector salud.",
    },
    {
      id: 2,
      date: "Septiembre 2025",
      title: "Programa de capacitación continua",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      excerpt:
        "Nuestro equipo participa en capacitaciones especializadas para mantenerse actualizado.",
      content:
        "Invertimos constantemente en la formación de nuestro personal para garantizar el mejor asesoramiento técnico y comercial a nuestros clientes.",
    },
    {
      id: 3,
      date: "Agosto 2025",
      title: "Expansión de nuestra cobertura",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop",
      excerpt:
        "Ampliamos nuestra área de distribución para llegar a más instituciones de salud.",
      content:
        "Con el objetivo de mejorar nuestro servicio, hemos extendido nuestra cobertura a nuevas zonas de la región, garantizando entregas más rápidas y eficientes.",
    },
    {
      id: 4,
      date: "Julio 2025",
      title: "Certificación de calidad renovada",
      image:
        "https://images.unsplash.com/photo-1579165466949-7904bec3a53b?w=600&h=400&fit=crop",
      excerpt:
        "Renovamos nuestras certificaciones de calidad para seguir garantizando excelencia.",
      content:
        "Cumplimos con todos los estándares internacionales de calidad, asegurando que cada producto que distribuimos cumple con las normativas más exigentes del sector.",
    },
    {
      id: 5,
      date: "Junio 2025",
      title: "Nuevos convenios institucionales",
      image:
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop",
      excerpt:
        "Firmamos acuerdos con importantes instituciones de salud del país.",
      content:
        "Estos convenios nos permiten ofrecer condiciones especiales y un servicio aún más personalizado a hospitales, clínicas y centros de salud.",
    },
    {
      id: 6,
      date: "Mayo 2025",
      title: "Lanzamiento de catálogo digital interactivo",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
      excerpt:
        "Presentamos nuestra nueva plataforma digital para facilitar la consulta de productos.",
      content:
        "El nuevo catálogo digital permite a nuestros clientes acceder rápidamente a toda la información técnica y disponibilidad de productos desde cualquier dispositivo.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ label: "Novedades" }]} />

        <Section
          title="Novedades"
          subtitle="Mantenete informado sobre las últimas noticias y actualizaciones de Dispromed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {novedades.map((novedad) => (
              <article
                key={novedad.id}
                className="bg-white border border-ink/10 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden bg-ink/5">
                  <img
                    src={novedad.image}
                    alt={novedad.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-brand-300 font-medium">
                    {novedad.date}
                  </time>
                  <h3 className="text-xl font-semibold my-3">
                    {novedad.title}
                  </h3>
                  <p className="text-ink/70 mb-4">{novedad.excerpt}</p>
                  <p className="text-sm text-ink/60">{novedad.content}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section className="bg-ink/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Querés recibir nuestras novedades?
            </h2>
            <p className="text-ink/70 mb-6">
              Suscribite a nuestro newsletter para estar al tanto de las últimas
              actualizaciones, nuevos productos y promociones especiales.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 border border-ink/10 focus:outline-none focus:ring-2 focus:ring-brand-300"
              />
              <button
                className="bg-brand-300 text-white px-6 py-3 hover:bg-brand-400 transition-colors font-medium whitespace-nowrap"
                onClick={() => alert("Suscripción próximamente disponible")}>
                Suscribirme
              </button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
