import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white dark:from-zinc-900/60 dark:via-zinc-900/40 dark:to-zinc-900" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-400 px-3 py-1 text-xs font-medium text-white shadow">Innovation communautaire</span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
            Yawa Zone — E‑commerce, Digital, Formation et Wâri
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            Une plateforme moderne qui connecte le commerce, la technologie, l’apprentissage et l’entraide pour accélérer vos projets.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#ecommerce" className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-white shadow hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition">Découvrir la boutique</a>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 dark:hover:bg-zinc-700 transition">Nous contacter</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
