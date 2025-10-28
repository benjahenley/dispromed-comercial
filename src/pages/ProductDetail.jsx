import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";
import { CategorySidebar } from "../components/CategorySidebar";
import { Breadcrumbs } from "../components/Breadcrumbs";

export function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
          <p className="text-ink/70 mb-6">
            El producto que buscás no existe o fue removido.
          </p>
          <Link
            to="/productos"
            className="inline-block bg-brand-300 text-white px-6 py-3 hover:bg-brand-400 transition-colors">
            Ver todos los productos
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Productos", href: "/productos" },
    {
      label: product.category,
      href: `/productos?category=${product.category.toLowerCase()}`,
    },
    { label: product.title },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex gap-8">
          {/* Sidebar - Desktop Only */}
          <div className="hidden lg:block">
            <CategorySidebar />
          </div>

          {/* Product Detail */}
          <div className="flex-1">
            <div className="bg-white border border-ink/10 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-ink/5">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block text-sm px-3 py-1 bg-brand-100/20 text-brand-400">
                      {product.category}
                    </span>
                    {product.subcategory && (
                      <span className="inline-block text-sm px-3 py-1 bg-ink/5 text-ink/70 ml-2">
                        {product.subcategory}
                      </span>
                    )}
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                    {product.title}
                  </h1>

                  {product.badges && product.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-3 py-1 border border-brand-200 text-brand-400 bg-brand-100/10">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {product.description && (
                    <p className="text-sm text-ink/70 leading-relaxed mb-6 line-clamp-6">
                      {product.description}
                    </p>
                  )}

                  <div className="mt-auto">
                    <Link
                      to="/contacto"
                      className="block w-full text-center bg-brand-300 text-white px-6 py-3 hover:bg-brand-400 transition-colors font-medium">
                      Consultar disponibilidad
                    </Link>
                  </div>
                </div>
              </div>

              {/* Specifications Table */}
              {product.table && (
                <div className="border-t border-ink/10 p-6 lg:p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Especificaciones Técnicas
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-ink/5">
                          {product.table.headers.map((header, idx) => (
                            <th
                              key={idx}
                              className="text-left px-4 py-3 font-semibold border border-ink/10">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {product.table.rows.map((row, rowIdx) => (
                          <tr key={rowIdx} className="hover:bg-ink/5">
                            {row.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className="px-4 py-3 border border-ink/10 text-ink/80">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Related Products Info */}
            <div className="mt-8 bg-brand-100/10 p-6 text-center">
              <h3 className="font-semibold mb-2">¿Buscás otros productos?</h3>
              <p className="text-ink/70 mb-4">
                Explorá nuestra amplia gama de productos médicos y hospitalarios
              </p>
              <Link
                to="/productos"
                className="inline-block text-brand-300 hover:text-brand-400 font-medium">
                Ver catálogo completo →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
