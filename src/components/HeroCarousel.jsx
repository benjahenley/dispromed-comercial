const heroSlide = {
  image: "/banner.png",
  mobile: "/banner-mobile.png",
};

export function HeroCarousel() {
  return (
    <div className="relative overflow-hidden h-[125vh] min-h-screen">
      <div className="h-full max-h-[125vh] md:max-h-[125vh] relative">
        <div className="relative h-full min-h-screen">
          <picture>
            <source media="(max-width: 768px)" srcSet={heroSlide.mobile} />
            <img
              src={heroSlide.image}
              alt="Banner principal"
              loading="lazy"
              className="w-full h-full object-cover min-h-screen"
            />
          </picture>
        </div>

        <div
          className="elementor-shape elementor-shape-bottom absolute -bottom-1 left-0 right-0 z-[2] pointer-events-none"
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
      </div>
    </div>
  );
}
