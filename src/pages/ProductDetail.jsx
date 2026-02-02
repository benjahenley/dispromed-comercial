import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products/products";
import { CategorySidebar } from "../components/CategorySidebar";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SecondaryNavbar } from "../components/navbar/SecondaryNavbar";
import PrimaryButton from "../components/ui/PrimaryButton";
import { ProductImageCarousel } from "../components/ProductImageCarrousel";

export function ProductDetail() {
  const { slug } = useParams();

  const product = useMemo(
    () => products.find((p) => p.navProductId === slug),
    [slug],
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl rounded-3xl border border-ink/10 bg-white p-8 text-center shadow-sm">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Producto no encontrado
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
              El producto que buscás no existe o fue removido.
            </p>
            <Link
              to="/productos"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-2xl bg-brand-300 px-6 text-base font-medium text-white shadow-sm transition hover:bg-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-300/30">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Productos", href: "/productos" },
    {
      label: product.categoryId,
      href: `/productos?category=${product.categoryId}`,
    },
  ];

  const images = product.images ?? [];
  const shouldUseCarousel = (product.imageCount ?? images.length) > 1;

  return (
    <div className="min-h-screen bg-white">
      <SecondaryNavbar />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-10">
          <main className="min-w-0 flex-1">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
              <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-10">
                {/* LEFT */}
                <div className="flex flex-col">
                  <div className="relative overflow-hidden rounded-3xl bg-ink/5 ">
                    {shouldUseCarousel ? (
                      <ProductImageCarousel
                        images={images}
                        title={product.title}
                      />
                    ) : (
                      <div className="aspect-square">
                        <img
                          src={images?.[0]?.src || ""}
                          alt={images?.[0]?.alt || product.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    {/* Badges overlay */}
                    {product.badges?.length > 0 && (
                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        {product.badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-ink/10 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-ink/80 backdrop-blur">
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="rounded-3xl sm:p-5">
                    <PrimaryButton text={"Consultar disponibilidad"} />
                    <p className="mt-3 text-center text-xs text-ink/50">
                      Respondemos a la brevedad.
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-brand-100/20 px-3 py-1 text-xs font-medium text-brand-400">
                      {product.subcategoryId}
                    </span>
                    {product.subcategoryId && (
                      <span className="inline-flex items-center rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/70">
                        {product.subcategoryId}
                      </span>
                    )}
                  </div>

                  <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                    {product.title}
                  </h1>

                  {product.description && (
                    <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:text-base">
                      {product.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Specs table remains the same */}
              {product.table && (
                <div className="border-t border-ink/10 p-5 sm:p-6 lg:p-10">
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    Especificaciones Técnicas
                  </h2>

                  <div className="mt-4 overflow-hidden rounded-3xl border border-ink/10">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-left text-sm">
                        <thead className="bg-ink/5">
                          <tr>
                            {product.table.headers.map((header, idx) => (
                              <th
                                key={idx}
                                className="whitespace-nowrap px-4 py-3 font-semibold text-ink/80">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-ink/10 bg-white">
                          {product.table.rows.map((row, rowIdx) => (
                            <tr
                              key={rowIdx}
                              className="transition hover:bg-ink/5">
                              {row.map((cell, cellIdx) => (
                                <td
                                  key={cellIdx}
                                  className="whitespace-nowrap px-4 py-3 text-ink/80">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-ink/50 sm:text-sm">
                    * Si necesitás una ficha técnica completa, escribinos desde
                    el formulario de contacto.
                  </p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
