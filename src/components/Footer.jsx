import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const links = [
    { href: '#ecommerce', label: 'E‑commerce' },
    { href: '#digital', label: 'Digital' },
    { href: '#formation', label: 'Formation' },
    { href: '#wari', label: 'Wâri' },
    { href: '#about', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ];

  const socials = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="mt-24 border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400" />
              <span className="font-semibold tracking-tight text-zinc-900 dark:text-white">Yawa Zone</span>
            </div>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">Commerce, technologie, apprentissage et solidarité au service de votre réussite.</p>
          </div>

          <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
            <nav className="flex flex-wrap gap-4 text-sm">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} Yawa Zone. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
