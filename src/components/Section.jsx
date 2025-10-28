export function Section({
  title,
  subtitle,
  children,
  className = "",
  padding = true,
}) {
  return (
    <section className={`${padding ? "py-12 md:py-16" : ""} ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-ink/70 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
