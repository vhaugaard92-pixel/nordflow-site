import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NordFlow — Automatisering til danske VVS-firmaer',
  description: 'Flere Google-anmeldelser, færre tabte opkald, højere close rate på tilbud. Bygget specifikt til VVS-branchen i Danmark.',
  openGraph: {
    title: 'NordFlow — Automatisering til danske VVS-firmaer',
    description: 'Flere Google-anmeldelser, færre tabte opkald, højere close rate på tilbud.',
    type: 'website',
    locale: 'da_DK',
    siteName: 'NordFlow'
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#08080a]/70 border-b border-white/5">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-serif italic text-lg">Nord<span className="text-accent">Flow</span></a>
            <div className="flex gap-6 text-sm text-muted">
              <a href="/artikler" className="hover:text-fg transition">Artikler</a>
              <a href="/#features" className="hover:text-fg transition">Features</a>
              <a href="https://calendly.com/vhaugaard92/vvs-automation-gratis-demo" className="text-fg hover:text-accent transition">Book demo →</a>
            </div>
          </div>
        </nav>
        <main className="pt-20">{children}</main>
        <footer className="border-t border-white/5 mt-32 py-10 text-center text-sm text-muted font-mono">
          <span>NordFlow · Automatisering til VVS · Made in Denmark</span>
        </footer>
      </body>
    </html>
  );
}
