import { useState } from 'react';
import { Filter, Star, HelpCircle } from 'lucide-react';

export default function Sections() {
  return (
    <div className="space-y-24">
      <EcommerceSection />
      <DigitalSection />
      <FormationSection />
      <WariSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

function SectionShell({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-2 text-zinc-600 dark:text-zinc-300">{subtitle}</p>}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function EcommerceSection() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const products = [
    { id: 1, name: 'Casque Bluetooth', price: 39.9, category: 'tech', rating: 4.5, img: 'https://images.unsplash.com/photo-1518443872303-919d8b2888f8?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, name: 'Sac à dos Pro', price: 59.9, category: 'accessoires', rating: 4.7, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, name: 'Clavier Mécanique', price: 79.0, category: 'tech', rating: 4.8, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
    { id: 4, name: 'Gourde Inox', price: 19.5, category: 'maison', rating: 4.2, img: 'https://images.unsplash.com/photo-1516054719048-38394d911d9e?q=80&w=1200&auto=format&fit=crop' },
  ];

  const filtered = products.filter((p) =>
    (category === 'all' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SectionShell
      id="ecommerce"
      title="Boutique en ligne"
      subtitle="Parcourez une sélection de produits de qualité. Filtrez par catégorie et trouvez ce qu’il vous faut."
    >
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit..."
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-zinc-500" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          >
            <option value="all">Toutes les catégories</option>
            <option value="tech">Tech</option>
            <option value="accessoires">Accessoires</option>
            <option value="maison">Maison</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((p) => (
          <div key={p.id} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h4 className="font-medium text-zinc-900 dark:text-white">{p.name}</h4>
              <div className="mt-1 flex items-center justify-between text-sm">
                <span className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold">{p.price.toFixed(2)} €</span>
                <span className="inline-flex items-center gap-1 text-amber-500"><Star className="h-4 w-4 fill-amber-500" /> {p.rating}</span>
              </div>
              <button className="mt-3 w-full rounded-lg bg-zinc-900 px-3 py-2 text-sm text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition">
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-zinc-500">Catalogue démo — intégration panier/commande ultérieure.</p>
    </SectionShell>
  );
}

function DigitalSection() {
  const services = [
    { title: 'Sites vitrines & E‑commerce', desc: 'Conception, design, SEO et performance.' },
    { title: 'Applications web', desc: 'Tableaux de bord, CRM, solutions métier.' },
    { title: 'Branding & Contenu', desc: 'Identité visuelle, newsletters, médias.' },
  ];

  return (
    <SectionShell id="digital" title="Services Digital" subtitle="Des solutions modernes, sécurisées et évolutives.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h4 className="font-semibold text-zinc-900 dark:text-white">{s.title}</h4>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{s.desc}</p>
            <a href="#contact" className="mt-4 inline-block text-sm font-medium text-fuchsia-600 hover:underline dark:text-fuchsia-400">Demander un devis</a>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl bg-gradient-to-tr from-fuchsia-500/10 to-cyan-400/10 p-4 text-sm text-zinc-700 ring-1 ring-inset ring-fuchsia-500/20 dark:text-zinc-300">
        Conseil: Nous auditons votre présence digitale et proposons une feuille de route priorisée.
      </div>
    </SectionShell>
  );
}

function FormationSection() {
  const [email, setEmail] = useState('');
  const formations = [
    { title: 'Initiation au no-code', level: 'Débutant', seats: 'Places limitées' },
    { title: 'Création de boutique en ligne', level: 'Intermédiaire', seats: 'Ouvert' },
    { title: 'Marketing digital essentiel', level: 'Tous niveaux', seats: 'Ouvert' },
  ];

  function submit(e) {
    e.preventDefault();
    alert(`Merci ! Nous reviendrons vers vous à ${email}.`);
    setEmail('');
  }

  return (
    <SectionShell id="formation" title="Formations" subtitle="Apprendre par la pratique, avec des projets concrets.">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
          {formations.map((f, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h4 className="font-semibold text-zinc-900 dark:text-white">{f.title}</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Niveau: {f.level}</p>
              <p className="mt-1 text-xs text-zinc-500">{f.seats}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-fuchsia-600 hover:underline dark:text-fuchsia-400">S’inscrire</a>
            </div>
          ))}
        </div>
        <form onSubmit={submit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h4 className="font-semibold text-zinc-900 dark:text-white">Restez informé</h4>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Recevez le calendrier des sessions et les promotions.</p>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre e‑mail"
            className="mt-4 w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          />
          <button className="mt-3 w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition">
            S’abonner
          </button>
          <div className="mt-3 flex items-start gap-2 text-xs text-zinc-500">
            <HelpCircle className="mt-0.5 h-4 w-4" />
            <span>Nous respectons votre confidentialité. Désinscription en un clic.</span>
          </div>
        </form>
      </div>
    </SectionShell>
  );
}

function WariSection() {
  return (
    <SectionShell id="wari" title="Wâri (Bientôt disponible)" subtitle="Un système de tontine pour acquérir du matériel sans stress.">
      <div className="rounded-2xl border border-dashed border-fuchsia-400/40 bg-fuchsia-500/5 p-6 text-zinc-700 ring-1 ring-inset ring-fuchsia-500/20 dark:text-zinc-300">
        <p>
          Rejoignez une communauté qui cotise chaque mois. À tour de rôle, les membres reçoivent un budget pour s’équiper (ordinateur, smartphone, outils pro, etc.).
        </p>
        <ul className="mt-4 list-inside list-disc text-sm">
          <li>Engagement clair, calendrier transparent</li>
          <li>Accompagnement et conseils d’achat</li>
          <li>Gestion sécurisée et notifications</li>
        </ul>
        <a href="#contact" className="mt-4 inline-block rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-fuchsia-500">
          Être informé du lancement
        </a>
      </div>
    </SectionShell>
  );
}

function AboutSection() {
  return (
    <SectionShell id="about" title="À propos" subtitle="Notre mission: créer de la valeur durable grâce à l’innovation et la collaboration.">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h4 className="font-semibold text-zinc-900 dark:text-white">Histoire</h4>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Yawa Zone est née d’une envie simple: rendre les technologies et les opportunités accessibles à tous. Nous allions commerce, digital et pédagogie pour accompagner les projets de notre communauté.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h4 className="font-semibold text-zinc-900 dark:text-white">Valeurs</h4>
          <ul className="mt-2 list-inside list-disc text-sm text-zinc-600 dark:text-zinc-300">
            <li>Confiance et qualité</li>
            <li>Transparence et inclusion</li>
            <li>Impact et durabilité</li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

function ContactSection() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    alert(`Merci ${data.name}! Nous vous répondrons à ${data.email}.`);
    e.currentTarget.reset();
  }

  return (
    <SectionShell id="contact" title="Contact" subtitle="Une question, un projet, une idée? Parlons‑en.">
      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-zinc-700 dark:text-zinc-300">Nom</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-white" />
            </div>
            <div>
              <label className="text-sm text-zinc-700 dark:text-zinc-300">E‑mail</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-white" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-zinc-700 dark:text-zinc-300">Message</label>
              <textarea name="message" rows={4} required className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-white" />
            </div>
          </div>
          <button className="mt-4 w-full rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white hover:bg-fuchsia-500">Envoyer</button>
        </form>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h4 className="font-semibold text-zinc-900 dark:text-white">Coordonnées</h4>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Email: contact@yawazone.com</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Téléphone: +228 00 00 00 00</p>
          <div className="mt-4 text-xs text-zinc-500">Suivez‑nous sur les réseaux sociaux pour nos nouveautés et offres.</div>
        </div>
      </div>
    </SectionShell>
  );
}
