import { getArticleBySlug, getAllSlugs } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | NordFlow`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date
    }
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/artikler" className="text-sm text-muted hover:text-fg transition inline-block mb-12">← Alle artikler</Link>
      <div className="text-xs text-muted font-mono mb-4">{article.date}</div>
      <h1 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] tracking-tight mb-8">
        {article.title}
      </h1>
      <p className="text-xl text-muted leading-relaxed mb-12 max-w-2xl">{article.excerpt}</p>

      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-a:text-accent prose-strong:text-fg prose-table:text-sm" dangerouslySetInnerHTML={{ __html: article.html }} />

      <div className="mt-20 p-10 border border-accent/30 rounded-2xl bg-accent/5 text-center">
        <h3 className="font-serif text-2xl mb-4">Interesseret i at se systemet i aktion?</h3>
        <p className="text-muted mb-6 max-w-lg mx-auto">15 minutter på Teams. Live demo. Ingen forpligtelser.</p>
        <a
          href="https://calendly.com/vhaugaard92/vvs-automation-gratis-demo"
          className="inline-block px-8 py-4 bg-accent text-white rounded-full font-medium hover:opacity-90 transition"
        >
          Book gratis demo →
        </a>
      </div>
    </article>
  );
}
