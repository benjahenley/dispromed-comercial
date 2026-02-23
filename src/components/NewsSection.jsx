import news from "../data/news.json";
import { NewsCard } from "./NewsCard";
import { Section } from "./Section";
import { useInView } from "../hooks/useInView.js";

export function NewsSection() {
  const [ref, inView] = useInView();

  return (
    <Section
      title="Novedades"
      subtitle="Mantente informado sobre nuestros últimos productos y servicios"
      className="bg-ink/5">
      <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item, idx) => (
          <div
            key={item.id}
            className={`reveal ${inView ? "in-view" : ""}`}
            style={{ animationDelay: `${idx * 90}ms` }}>
            <NewsCard item={item} />
          </div>
        ))}
      </div>
    </Section>
  );
}
