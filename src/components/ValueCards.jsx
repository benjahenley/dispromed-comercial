export default function ValueCards({ value }) {
  return (
    <div
      key={value.title}
      className="
        group relative overflow-hidden
        flex flex-col items-center justify-center gap-6
        max-w-md rounded-xl p-6 w-70 h-80
        bg-white z-10 shadow-xl
      ">
      {/* green fill overlay (bottom -> top) */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-tr
          from-brand-400
          via-brand-300
          to-brand-100/80
          origin-bottom scale-y-0
          transition-transform duration-600 ease-out
          group-hover:scale-y-100
        "
      />

      {/* content */}
      <div
        className="
          relative z-10 text-center gap-4 grid grid-rows-2
          group-hover:grid-rows-1
          items-center
        ">
        {/* icon disappears (SMOOTHER + GRADIENT + MOVES WITH TEXT) */}
        <div
          className="
            shrink-0
            flex items-center justify-center w-full

            /* gradient color for the icon */
            bg-gradient-to-tr from-brand-400 via-brand-300 to-brand-100/80
            bg-clip-text text-transparent

            /* smoother hide: fade + slide + scale (no abrupt height snap) */
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            will-change-[transform,opacity,max-height]

            /* keeps layout stable while animating out */
            max-h-24 opacity-100 translate-y-0 scale-100

            group-hover:opacity-0
            group-hover:-translate-y-3
            group-hover:scale-95
            group-hover:max-h-0
            group-hover:pointer-events-none
          ">
          {/* ensure svg uses currentColor so gradient applies */}
          <span className="">{value.icon()}</span>
        </div>

        {/* title color changes */}
        <h3
          className="
            font-medium leading-relaxed text-xl uppercase text-ink
            transition-colors duration-300
            group-hover:text-white
          ">
          {value.title}
        </h3>

        {/* description appears */}
        <p
          className="
            text-sm leading-relaxed
            text-white/90
            opacity-0 translate-y-2 max-h-0
            transition-all duration-300 ease-out
            group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-40
          ">
          {value.description}
        </p>
      </div>
    </div>
  );
}
