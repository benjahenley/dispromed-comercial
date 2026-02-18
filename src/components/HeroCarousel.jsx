import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    id: 1,
    image:
      "https://unsplash.com/photos/cheerful-surgeon-with-assistants-in-masks-are-crossing-arms-and-looking-at-camera-with-joy-t9KN97BinLY",
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
    <div className="relative overflow-hidden h-[125vh] min-h-screen">
      <div className="h-full max-h-[125vh] md:max-h-[125vh] relative">
        <div className="overflow-hidden relative h-full" ref={emblaRef}>
          <div className="flex relative h-full">
            {slides.map((slide) => (
              // SLIDE
              <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                <div className="relative h-full min-h-screen">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading="lazy"
                    className="w-full h-full object-cover min-h-screen"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-ink/40 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <div className="max-w-2xl text-white">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                          {slide.title}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white/90">
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

        {/* Wave Overlay */}
        <div
          className="elementor-shape elementor-shape-bottom absolute -bottom-1 left-0 right-0 z-10 pointer-events-none"
          data-negative="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-auto">
            <path
              fill="white"
              className="elementor-shape-fill"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
              c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
              c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
          </svg>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-20 sm:bottom-24 md:bottom-[30vh]  left-0 right-0 z-10">
          <div className="flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
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
    </div>
  );
}
