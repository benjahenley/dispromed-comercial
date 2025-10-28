import { Section } from "../components/Section";
import { Breadcrumbs } from "../components/Breadcrumbs";

export function Catalogos() {
  const catalogos = [
    {
      id: 1,
      title: "Catálogo General 2025",
      description:
        "Nuestro catálogo completo con todas las líneas de productos disponibles.",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
      size: "15 MB",
      pages: "120 páginas",
    },
    {
      id: 2,
      title: "Descartables y Consumibles",
      description:
        "Catálogo especializado en productos descartables para uso hospitalario.",
      image:
        "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop",
      size: "8 MB",
      pages: "45 páginas",
    },
    {
      id: 3,
      title: "Instrumental Quirúrgico",
      description:
        "Línea completa de instrumental de acero inoxidable y accesorios.",
      image:
        "https://images.unsplash.com/photo-1579165466949-7904bec3a53b?w=400&h=300&fit=crop",
      size: "12 MB",
      pages: "80 páginas",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ label: "Catálogos" }]} />

        <Section
          title="Catálogos Digitales"
          subtitle="Descargá nuestros catálogos en formato PDF para consultar offline">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogos.map((catalogo) => (
              <div
                key={catalogo.id}
                className="bg-white border border-ink/10 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden bg-ink/5">
                  <img
                    src={catalogo.image}
                    alt={catalogo.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {catalogo.title}
                  </h3>
                  <p className="text-ink/70 mb-4">{catalogo.description}</p>
                  <div className="flex items-center justify-between text-sm text-ink/60 mb-4">
                    <span>{catalogo.pages}</span>
                    <span>{catalogo.size}</span>
                  </div>
                  <button
                    className="w-full bg-brand-300 text-white px-4 py-2 hover:bg-brand-400 transition-colors font-medium"
                    onClick={() =>
                      alert(
                        "La descarga del catálogo estará disponible próximamente"
                      )
                    }>
                    Descargar PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-ink/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Necesitás un catálogo personalizado?
            </h2>
            <p className="text-ink/70 mb-6">
              Podemos preparar un catálogo específico según tus necesidades.
              Contactanos y te enviaremos la información que necesites.
            </p>
            <a
              href="mailto:ventas@dispromedcomercial.com.ar"
              className="inline-block bg-brand-300 text-white px-6 py-3 hover:bg-brand-400 transition-colors font-medium">
              Solicitar catálogo personalizado
            </a>
          </div>
        </Section>
      </div>
    </div>
  );
}
