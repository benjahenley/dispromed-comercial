import { useState } from "react";

export function ProductImageCarousel({ images = [], title = "" }) {
  const validImages = Array.isArray(images)
    ? images.filter((img) => img?.src)
    : [];
  const [index, setIndex] = useState(0);

  if (validImages.length === 0) {
    return (
      <div className="aspect-square w-full rounded-3xl bg-ink/5" aria-hidden />
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
