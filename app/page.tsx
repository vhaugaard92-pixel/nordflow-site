import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
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
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://calendly.com/vhaugaard92/vvs-automation-gratis-demo"
            className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:opacity-90 transition"
          >
            Book gratis 15-min demo
          </a>
          <a
            href="#pakker"
            className="px-8 py-4 border border-white/10 rounded-full font-medium hover:bg-white/5 transition"
          >
            Se pakker
          </a>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-y border-white/5">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-serif text-5xl font-light mb-2">370+</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted">VVS-firmaer i pipeline</div>
          </div>
          <div>
            <div className="font-serif text-5xl font-light mb-2">500K+</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Kr ekstra/år pr. kunde</div>
          </div>
          <div>
            <div className="font-serif text-5xl font-light mb-2">14 dg</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Til systemet er live</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-28">
        <div className="text-xs uppercase tracking-[0.25em] text-muted mb-3">Hvad du får</div>
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 tracking-tight">4 automationer, bygget til VVS.</h2>
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

      {/* PRICING */}
      <section id="pakker" className="max-w-5xl mx-auto px-6 py-28 border-t border-white/5">
        <div className="text-xs uppercase tracking-[0.25em] text-muted mb-3">Pakker</div>
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 tracking-tight">Vælg det der passer jer.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              subtitle: 'Test om automation virker for jer',
              setup: '12.900',
              monthly: '2.997',
              features: ['Google Review Automation', 'Missed-Call SMS', 'Live Dashboard', '30 dages garanti', 'Setup på 14 dage']
            },
            {
              name: 'Growth',
              subtitle: 'Fuld revenue-motor',
              setup: '24.900',
              monthly: '2.997',
              features: ['Alt i Starter', 'Tilbudsopfølgning (dag 1/3/7)', 'Win-Back gamle kunder', 'Månedlig rapport', 'Prioriteret support'],
              highlighted: true
            },
            {
              name: 'Enterprise',
              subtitle: 'Komplet system + chatbot',
              setup: '34.900',
              monthly: '7.997',
              features: ['Alt i Growth', 'AI-chatbot på hjemmeside', 'Booking-bekræftelser', 'Intern eskalering', 'VIP-support + strategi-calls']
            }
          ].map((p, i) => (
            <div
              key={i}
              className={`p-8 border rounded-lg transition ${
                p.highlighted
                  ? 'border-accent/50 bg-accent/5 relative'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                  Mest populær
                </div>
              )}
              <h3 className="font-serif text-2xl mb-2">{p.name}</h3>
              <p className="text-xs text-muted mb-6">{p.subtitle}</p>
              <div className="mb-6">
                <div className="text-3xl font-serif font-light">{p.setup} kr</div>
                <div className="text-xs text-muted">engangs-setup</div>
                <div className="text-lg font-serif font-light mt-2">+ {p.monthly} kr / md</div>
              </div>
              <ul className="space-y-2 text-sm text-muted">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted mt-8 font-mono">
          Alle priser eksklusiv moms · 30 dages pengene-tilbage-garanti · Ingen binding
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-muted mb-8">Næste skridt</div>
        <h2 className="font-serif text-4xl md:text-6xl font-light mb-8 tracking-tight leading-[1.05]">
          15 min demo.<br />
          <em className="text-muted">Nul forpligtelser.</em>
        </h2>
        <p className="text-lg text-muted mb-12 max-w-xl mx-auto">
          Du ser systemet live på Teams. Jeg forklarer hvad det vil koste og hvad det vil tjene dit firma.
          Beslut bagefter — i dit eget tempo.
        </p>
        <a
          href="https://calendly.com/vhaugaard92/vvs-automation-gratis-demo"
          className="inline-block px-10 py-5 bg-accent text-white rounded-full font-medium text-lg hover:opacity-90 transition"
        >
          Book demo på Calendly →
        </a>
      </section>
    </>
  );
}
