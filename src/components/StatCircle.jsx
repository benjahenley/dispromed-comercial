import { useEffect, useRef, useState } from "react";

export function StatCircle({
  value,
  label,
  suffix = "%",
  size = 112, // 28 * 4
  stroke = 8,
  color = "#4FA83D",
}) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect(); // one-time
        }
      },
      { threshold: 0.35 } // trigger when ~35% visible
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // If you pass values like 30+ (years), set suffix="+" and value as 30 but cap ring at 100
  const clamped = Math.max(0, Math.min(100, Number(value) || 0));

  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = c;
  const offset = active ? c * (1 - clamped / 100) : c;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div
        className="relative grid place-items-center"
        style={{ width: size, height: size }}>
        {/* subtle base ring */}
        <svg width={size} height={size} className="absolute inset-0">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth={stroke}
          />
          {/* progress ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={dash}
            strokeDashoffset={offset}
            style={{
              transition:
                "stroke-dashoffset 1900ms cubic-bezier(0.22,1,0.36,1)",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>

        {/* center */}
        <div className=" px-4 py-3">
          <span className="text-2xl font-semibold text-brand-400 tabular-nums">
            {value}
            {suffix}
          </span>
        </div>
      </div>

      <p className="text-sm font-medium text-ink/70 text-center">{label}</p>
    </div>
  );
}
