import news from "../data/news.json";
import { NewsCard } from "./NewsCard";
import { Section } from "./Section";

export function NewsSection() {
  return (
    <Section
      title="Novedades"
      subtitle="Mantente informado sobre nuestros últimos productos y servicios"
      className="bg-ink/5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
