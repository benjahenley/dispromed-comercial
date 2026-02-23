import { useState } from "react";

export function ProductImageCarousel({ images = [], title = "" }) {
  const validImages = Array.isArray(images)
    ? images.filter((img) => img?.src)
    : [];
  const [index, setIndex] = useState(0);

  if (validImages.length === 0) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-ink/4 p-6 text-center">
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
          <p className="text-sm font-medium text-ink/70">Imagen no disponible</p>
          <p className="mt-1 text-xs text-ink/50">
            Estamos actualizando el contenido visual.
          </p>
        </div>
      </div>
    );
  }

  const current = validImages[index];

  const prev = () =>
    setIndex((i) => (i - 1 + validImages.length) % validImages.length);
  const next = () => setIndex((i) => (i + 1) % validImages.length);

  if (validImages.length === 1) {
    return (
      <div className="aspect-square">
        <img
          src={current.src}
          alt={current.alt || title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="aspect-square">
        <img
          src={current.src}
          alt={current.alt || title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 rounded-full bg-gray-200/50 px-3 py-2 text-sm font-medium text-ink/80 backdrop-blur hover:bg-gray-100/90"
        aria-label="Imagen anterior">
        ←
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 rounded-full bg-gray-200/50 px-3 py-2 text-sm font-medium text-ink/80 backdrop-blur hover:bg-gray-100/90"
        aria-label="Imagen siguiente">
        →
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {validImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
