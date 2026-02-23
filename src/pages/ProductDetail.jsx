import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products/products";
import categories from "../data/categories.json";
import { CategorySidebar } from "../components/CategorySidebar";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SecondaryNavbar } from "../components/navbar/SecondaryNavbar";
import PrimaryButton from "../components/ui/PrimaryButton";
import { ProductImageCarousel } from "../components/ProductImageCarrousel";

export function ProductDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  const product = useMemo(
    () => products.find((p) => p.navProductId === slug),
    [slug]
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

  const images = product.images ?? [];
  const validImages = images.filter((img) => img?.src);
  const primaryImage = validImages[0] ?? null;
  const shouldUseCarousel =
    (product.imageCount ?? images.length) > 1 && validImages.length > 0;
  const categoryData = categories.find((c) => c.id === product.categoryId);
  const categoryLabel = categoryData?.name ?? product.categoryId;
  const subcategoryLabel =
    categoryData?.subcategories?.find((s) => s.id === product.subcategoryId)
      ?.name ?? product.subcategoryId;
  const breadcrumbs = [
    { label: "Productos", href: "/productos" },
    {
      label: categoryLabel,
      href: `/productos?category=${product.categoryId}`,
    },
  ];

  const whatsappUrl = `https://wa.me/5491135921100?text=${encodeURIComponent(
    `Hola, me interesa consultar disponibilidad del producto: ${product.title}`
  )}`;

  return (
    <div className="min-h-screen bg-white">
      <SecondaryNavbar />
      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8  max-w-xl lg:max-w-7xl">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-10">
          <main className="min-w-0 flex-1">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
              <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-10">
                {/* LEFT */}
                <div className="flex flex-col order-2 lg:order-1">
                  <div className="relative overflow-hidden rounded-3xl bg-ink/5 ">
                    {shouldUseCarousel ? (
                      <ProductImageCarousel
                        images={images}
                        title={product.title}
                      />
                    ) : primaryImage ? (
                      <div className="aspect-square">
                        <img
                          src={primaryImage.src}
                          alt={primaryImage.alt || product.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-square w-full items-center justify-center bg-ink/4 p-6 text-center">
                        <div className="max-w-xs">
                          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-ink/10 bg-white/75 text-ink/45">
                            <svg
                              className="h-7 w-7"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              aria-hidden="true">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m7.5 14 2.2-2.2a1 1 0 0 1 1.4 0L13 13.5l1.7-1.7a1 1 0 0 1 1.4 0L18 13.7"
                              />
                              <circle cx="8.5" cy="9" r="1.1" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-ink/70">
                            Imagen no disponible
                          </p>
                        </div>
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
                    <PrimaryButton
                      text={"Consultar disponibilidad"}
                      href={whatsappUrl}
                    />
                    <p className="mt-3 text-center text-xs text-ink/50">
                      Respondemos a la brevedad.
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col order-1 lg:order-2">
                  <div className="flex flex-wrap gap-2">
                    <span
                      title={categoryLabel}
                      className="inline-flex max-w-[16rem] items-center rounded-full bg-brand-100/20 px-3 py-1 text-xs font-medium text-brand-400 truncate">
                      {categoryLabel}
                    </span>
                    {subcategoryLabel && subcategoryLabel !== categoryLabel && (
                      <span
                        title={subcategoryLabel}
                        className="inline-flex max-w-[16rem] items-center rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/70 truncate">
                        {subcategoryLabel}
                      </span>
                    )}
                  </div>

                  <h1
                    title={product.title}
                    className="mt-4 truncate text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                    {product.title}
                  </h1>

                  {product.description && (
                    <p className="mt-4 text-sm leading-relaxed text-ink/70 sm:text-base">
                      {product.description}
                    </p>
                  )}

                  {/* Characteristics */}
                  {product.characteristics?.items?.length > 0 && (
                    <div className="mt-6">
                      <h2 className="text-lg font-semibold tracking-tight">
                        {product.characteristics.title || "Características"}
                      </h2>
                      <ul className="mt-3 space-y-2">
                        {product.characteristics.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm leading-relaxed text-ink/70">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Benefits */}
                  {product.benefits?.items?.length > 0 && (
                    <div className="mt-6">
                      <h2 className="text-lg font-semibold tracking-tight">
                        {product.benefits.title || "Beneficios"}
                      </h2>
                      <ul className="mt-3 space-y-2">
                        {product.benefits.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm leading-relaxed text-ink/70">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Models */}
                  {product.models?.length > 0 && (
                    <div className="mt-6">
                      <h2 className="text-lg font-semibold tracking-tight">
                        Modelos
                      </h2>
                      <div className="mt-3 flex gap-2">
                        {product.models.map((model, idx) => (
                          <div
                            key={idx}
                            className="min-w-0 flex-1 overflow-hidden rounded-xl border border-ink/10">
                            {model.src ? (
                              <img
                                src={model.src}
                                alt={model.alt || model.title}
                                loading="lazy"
                                className="aspect-square w-full object-cover bg-ink/5"
                              />
                            ) : (
                              <div className="flex aspect-square w-full items-center justify-center bg-ink/5 text-[10px] text-ink/30">
                                —
                              </div>
                            )}
                            <p className="px-1 py-1.5 text-center text-[10px] font-medium leading-tight text-ink/70 truncate">
                              {model.title}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
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
