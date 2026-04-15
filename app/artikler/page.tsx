import { getAllArticles } from '@/lib/articles';
import Link from 'next/link';

export const metadata = {
  title: 'Artikler om VVS-automatisering | NordFlow',
  description: 'Guides, case studies og praktiske råd om hvordan VVS-firmaer i Danmark bruger automatisering til at få flere kunder.'
};

export default function ArtiklerPage() {
  const articles = getAllArticles();

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-xs uppercase tracking-[0.25em] text-muted mb-4">Arkiv</div>
      <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight mb-16">
        Alt om <em className="text-accent">VVS-automatisering</em>.
      </h1>
      <div className="space-y-1 border-t border-white/5">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/artikler/${a.slug}`}
            className="block py-8 border-b border-white/5 hover:bg-white/[0.02] -mx-6 px-6 transition group"
          >
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <div className="text-xs text-muted font-mono mb-2">{a.date}</div>
                <h2 className="font-serif text-2xl mb-3 group-hover:text-accent transition">{a.title}</h2>
                <p className="text-muted text-sm leading-relaxed max-w-2xl">{a.excerpt}</p>
              </div>
              <div className="text-muted group-hover:text-accent transition">→</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
