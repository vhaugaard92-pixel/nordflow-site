import { getAllArticles } from '@/lib/articles';
import Link from 'next/link';

export default function HomePage() {
  const articles = getAllArticles().slice(0, 6);

  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-muted mb-8">Automatisering til VVS-branchen</div>
        <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] tracking-tight font-light mb-8">
          Flere anmeldelser.<br />
          <em className="bg-gradient-to-r from-[#9d6bff] to-[#ffb347] bg-clip-text text-transparent">Færre tabte kunder.</em>
        </h1>
        <p className="text-lg text-muted max-w-xl mx-auto mb-12">
          NordFlow automatiserer det VVS-firmaer glemmer: Google-anmeldelser, missede opkald, og tilbudsopfølgning.
          500.000-1M kr ekstra om året — uden at du ansætter nogen.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://calendly.com/vhaugaard92/vvs-automation-gratis-demo"
            className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:opacity-90 transition"
          >
            Book gratis 15-min demo
          </a>
          <a
            href="/artikler"
            className="px-8 py-4 border border-white/10 rounded-full font-medium hover:bg-white/5 transition"
          >
            Læs om VVS-automatisering
          </a>
        </div>
      </section>

      <section id="features" className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-xs uppercase tracking-[0.25em] text-muted mb-3">Hvad du får</div>
        <h2 className="font-serif text-4xl font-light mb-12">4 automationer, bygget til VVS.</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Google Review Automation', desc: 'Automatisk SMS til glade kunder efter hvert job. Fra 14 til 60+ anmeldelser på 6 måneder.' },
            { title: 'Missed-Call SMS Recovery', desc: 'Når I misser et opkald, får kunden en SMS inden 60 sekunder. 0 tabte leads.' },
            { title: 'Tilbudsopfølgning', desc: 'Dag 1, 3 og 7 efter tilbud — automatisk SMS der følger op. Close rate +15%.' },
            { title: 'Win-Back gamle kunder', desc: 'SMS til kunder 90-180 dage efter sidste job. Reaktiverer 10-15% uden arbejde.' }
          ].map((f, i) => (
            <div key={i} className="p-8 border border-white/5 rounded-lg hover:border-white/15 transition">
              <div className="text-xs text-accent font-mono mb-3">0{i + 1}</div>
              <h3 className="font-serif text-xl mb-3">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted mb-3">Artikler</div>
            <h2 className="font-serif text-4xl font-light">Seneste om VVS-automatisering</h2>
          </div>
          <Link href="/artikler" className="text-sm text-muted hover:text-fg transition">Alle artikler →</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/artikler/${a.slug}`}
              className="block p-8 border border-white/5 rounded-lg hover:border-white/15 hover:bg-white/[0.02] transition group"
            >
              <div className="text-xs text-muted font-mono mb-3">{a.date}</div>
              <h3 className="font-serif text-xl mb-3 group-hover:text-accent transition">{a.title}</h3>
              <p className="text-muted text-sm leading-relaxed line-clamp-2">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
