import { ShoppingBag, Code, GraduationCap, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'ecommerce',
    title: 'E‑commerce',
    description: 'Vente de produits en ligne avec une expérience fluide et sécurisée.',
    icon: ShoppingBag,
    cta: 'Voir les produits',
  },
  {
    id: 'digital',
    title: 'Services Digital',
    description: 'Sites web, applications et solutions sur mesure pour votre croissance.',
    icon: Code,
    cta: 'Explorer les services',
  },
  {
    id: 'formation',
    title: 'Formation',
    description: 'Programmes d’apprentissage pratiques et certifiants.',
    icon: GraduationCap,
    cta: 'S’inscrire',
  },
  {
    id: 'wari',
    title: 'Wâri',
    description: 'Tontine pour l’acquisition de matériel — Bientôt disponible.',
    icon: Shield,
    cta: 'En savoir plus',
    badge: 'Bientôt',
  },
];

export default function Services() {
  return (
    <section className="relative py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Tout ce qu’il faut pour avancer
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Des solutions concrètes et adaptées à votre contexte : commerce, tech, compétences et solidarité.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.a
              key={s.id}
              href={`#${s.id}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-white shadow">
                  <s.icon className="h-6 w-6" />
                </div>
                {s.badge && (
                  <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-500/30 dark:text-amber-300">
                    {s.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{s.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-fuchsia-600 group-hover:gap-3 transition-[gap] dark:text-fuchsia-400">
                {s.cta} <ArrowRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
