import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1600&h=600&fit=crop",
    title: "Insumos Médicos de Calidad",
    subtitle: "Distribución especializada para profesionales de la salud",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=1600&h=600&fit=crop",
    title: "Equipamiento Hospitalario",
    subtitle: "Tecnología y confianza para tu institución",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&h=600&fit=crop",
    title: "Compromiso con la Excelencia",
    subtitle: "Más de 20 años acompañando al sector salud",
  },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden bg-ink/5">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-ink/40 flex items-center">
                  <div className="max-w-7xl mx-auto px-4 w-full">
                    <div className="max-w-2xl text-white">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-lg md:text-xl text-white/90">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="flex items-center justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 ${
                index === selectedIndex
                  ? "w-10 h-3 bg-brand-300"
                  : "w-3 h-3 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
