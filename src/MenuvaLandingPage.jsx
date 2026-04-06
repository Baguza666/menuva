import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Coffee,
  Globe,
  MapPin,
  MenuSquare,
  MessageCircle,
  QrCode,
  Sparkles,
  Star,
  Store,
  Utensils,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/212000000000"; // TODO: Remplacez par le numéro WhatsApp Menuva

const trustItems = [
  "Menu digital sur mesure",
  "Google Business optimisé",
  "Parcours client simplifié",
  "Commande / réservation directe",
];

const problems = [
  "Menu difficile à consulter sur mobile",
  "Fiche Google peu exploitée",
  "Absence de lien clair vers la commande ou la réservation",
  "Dépendance aux plateformes tierces",
  "Image digitale qui ne reflète pas la qualité du lieu",
];

const solutions = [
  {
    icon: MenuSquare,
    title: "Menu digital premium",
    text: "Une carte lisible, élégante et optimisée mobile pour valoriser vos produits.",
  },
  {
    icon: QrCode,
    title: "QR menu",
    text: "Un accès immédiat au menu sur table, en vitrine ou en story Instagram.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp / réservation / contact",
    text: "Des actions directes visibles en un clic pour faciliter le passage à l’action.",
  },
  {
    icon: Globe,
    title: "Google Business optimisé",
    text: "Une fiche claire, complète et plus convaincante pour être mieux découvert.",
  },
  {
    icon: Coffee,
    title: "Contenu bilingue",
    text: "FR / EN selon votre clientèle, pour une expérience plus fluide et premium.",
  },
  {
    icon: Star,
    title: "Système d’avis clients",
    text: "Un parcours discret pour encourager les avis et renforcer la confiance.",
  },
];

const benefits = [
  {
    title: "Une meilleure image de marque",
    text: "Votre présence en ligne reflète enfin le niveau de votre établissement.",
  },
  {
    title: "Un menu plus simple à consulter",
    text: "Les clients trouvent rapidement ce qu’ils veulent, surtout sur mobile.",
  },
  {
    title: "Plus d’actions directes",
    text: "Plus de clics vers WhatsApp, réservation ou commande sans friction.",
  },
  {
    title: "Moins de dépendance aux plateformes tierces",
    text: "Vous reprenez une partie de la relation client en direct.",
  },
  {
    title: "Une fiche Google mieux exploitée",
    text: "Vous convertissez mieux la découverte locale en visites et contacts.",
  },
];

const packages = [
  {
    name: "Starter",
    subtitle: "Pour les besoins simples",
    price: "À partir de 3 900 MAD",
    cta: "Demander les détails",
    features: [
      "QR menu",
      "Page menu mobile",
      "Intégration WhatsApp",
      "Carte et horaires",
      "Optimisation Google de base",
    ],
  },
  {
    name: "Flagship",
    subtitle: "La formule idéale pour la majorité des restaurants et coffee shops",
    price: "À partir de 6 500 MAD",
    cta: "Demander un audit",
    featured: true,
    badge: "Recommandé",
    features: [
      "Tout Starter",
      "Design premium sur mesure",
      "Optimisation complète Google Business",
      "Parcours commande / réservation",
      "Structure bilingue",
      "Système d’avis",
      "Accompagnement au lancement",
    ],
  },
  {
    name: "Premium",
    subtitle: "Pour les établissements qui veulent aller plus loin",
    price: "À partir de 8 500 MAD",
    cta: "Me contacter",
    features: [
      "Tout Flagship",
      "Sections personnalisées supplémentaires",
      "Mises à jour prioritaires",
      "Accompagnement mensuel",
      "Optimisation continue",
    ],
  },
];

const faqs = [
  {
    q: "Est-ce que je dois remplacer mon site actuel ?",
    a: "Pas forcément. Dans certains cas, il suffit d’améliorer le menu, le parcours mobile et la fiche Google.",
  },
  {
    q: "Pouvez-vous utiliser nos photos et notre menu actuel ?",
    a: "Oui. Vous fournissez les éléments de base, et ils sont transformés en une expérience plus premium et plus cohérente.",
  },
  {
    q: "Proposez-vous les mises à jour après la mise en ligne ?",
    a: "Oui. Un accompagnement mensuel est possible pour les changements de menu, promotions, visuels ou ajustements réguliers.",
  },
  {
    q: "Est-ce que cela peut aider à réduire la dépendance à Glovo ?",
    a: "Oui. L’objectif est de rendre le parcours direct plus simple et plus accessible, afin de faciliter le contact, la réservation ou la commande sans dépendre uniquement d’intermédiaires.",
  },
  {
    q: "Travaillez-vous seulement à El Jadida ?",
    a: "Menuva commence localement, mais peut aussi accompagner d’autres établissements selon le projet.",
  },
];

const navItems = [
  { label: "Services", href: "#solution" },
  { label: "Résultats", href: "#preuve" },
  { label: "Formules", href: "#formules" },
  { label: "FAQ", href: "#faq" },
];

const sectionFade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: "easeOut" },
};

const SectionHeader = ({ eyebrow, title, copy }) => (
  <div className="max-w-3xl">
    {eyebrow ? (
      <p className="mb-4 inline-flex rounded-full border border-[#d9ccb8] bg-[#faf3e8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#736858]">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#1f1b16] sm:text-4xl">{title}</h2>
    {copy ? <p className="mt-5 text-[15px] leading-relaxed text-[#5b5247] sm:text-base">{copy}</p> : null}
  </div>
);

export default function MenuvaLandingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen scroll-smooth bg-[#f7f2ea] text-[#221f1b] antialiased selection:bg-[#c6a576]/30">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-[#e5d2b2]/35 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#b9a381]/20 blur-3xl" />
        <div className="absolute bottom-16 left-1/3 h-80 w-80 rounded-full bg-[#d8c5a5]/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#d8cab6]/70 bg-[#f7f2ea]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#hero" className="group flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2f2a24] text-[#f8f4ee] transition group-hover:scale-105">
              <Utensils className="h-4 w-4" />
            </span>
            <span className="font-serif text-xl">Menuva</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#5b544a] md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[#1f1b16]">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#audit"
            className="inline-flex items-center rounded-full bg-[#2f2a24] px-4 py-2 text-sm font-medium text-[#f8f4ee] shadow-[0_10px_30px_-14px_rgba(0,0,0,0.7)] transition hover:-translate-y-0.5 hover:bg-[#1e1b17]"
          >
            Demander un audit gratuit
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d5c7b2] bg-[#f8efe2] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6e6457]">
                <MapPin className="h-3.5 w-3.5" /> Basé à El Jadida
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
                Menus digitaux premium et optimisation Google Business pour restaurants et coffee shops à El Jadida
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#50493f] sm:text-lg">
                J’aide les établissements à améliorer leur image en ligne, simplifier l’accès au menu, et faciliter les
                commandes ou réservations directes.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#audit"
                  className="inline-flex items-center justify-center rounded-full bg-[#2f2a24] px-6 py-3.5 text-sm font-semibold text-[#f8f4ee] shadow-[0_22px_40px_-22px_rgba(22,18,14,0.85)] transition hover:-translate-y-0.5 hover:bg-[#181511]"
                >
                  Demander un audit gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#preuve"
                  className="inline-flex items-center justify-center rounded-full border border-[#b8a587] bg-[#faf5ec] px-6 py-3.5 text-sm font-semibold text-[#2f2a24] transition hover:-translate-y-0.5 hover:bg-[#f2eadd]"
                >
                  Voir un exemple
                </a>
              </div>

              <p className="mt-6 text-sm text-[#665d51]">
                Pour les établissements qui veulent une présence digitale à la hauteur de leur qualité réelle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-[#d6be97]/40 via-transparent to-[#bda178]/25 blur-2xl" />

              <div className="relative mx-auto max-w-md rounded-[2.4rem] border border-[#d9c8af] bg-[#fcf7ef] p-3 shadow-[0_35px_80px_-40px_rgba(41,31,20,0.85)]">
                <div className="rounded-[2rem] border border-[#e0d2bf] bg-[#fffdfa] p-4">
                  <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-[#e6d7c3]" />
                  <div className="overflow-hidden rounded-2xl border border-[#e4d8c7] bg-[#fffaf2]">
                    <div className="h-32 bg-[radial-gradient(circle_at_20%_20%,#e4c79a_0%,#b39670_45%,#8e7252_100%)]" />
                    <div className="space-y-3 p-4">
                      <div className="h-3 w-2/3 rounded bg-[#eee5d7]" />
                      <div className="h-2.5 w-full rounded bg-[#f3ecdf]" />
                      <div className="h-2.5 w-5/6 rounded bg-[#f3ecdf]" />
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="rounded-xl border border-[#eadfcf] bg-white p-2 text-xs text-[#665d50]">Espresso Signature</div>
                        <div className="rounded-xl border border-[#eadfcf] bg-white p-2 text-xs text-[#665d50]">Brunch Maison</div>
                      </div>
                      <button className="mt-2 w-full rounded-xl bg-[#2f2a24] py-2 text-xs font-semibold text-[#f8f4ee]">
                        Réserver / Commander
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-8 hidden rounded-2xl border border-[#d8c9b4] bg-[#fff9ef]/95 p-3 shadow-xl md:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#746a5b]">QR Menu</p>
                <div className="mt-2 rounded-xl border border-dashed border-[#c9b18a] bg-[#f8efe0] p-4">
                  <QrCode className="h-12 w-12 text-[#2f2a24]" />
                </div>
              </div>

              <div className="absolute -bottom-6 right-0 max-w-[230px] rounded-2xl border border-[#d8cab6] bg-[#fff9ef]/95 p-3 shadow-xl">
                <p className="text-xs font-semibold text-[#2f2a24]">Google Business</p>
                <p className="mt-1 text-xs text-[#6a6258]">Menu, horaires, itinéraire et appel en 1 clic</p>
                <div className="mt-2 flex items-center gap-1 text-[#8a6f4d]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                  <span className="ml-1 text-[11px]">Expérience premium</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#e1d3c0] bg-[#fdf8f0] px-4 py-3 text-sm font-medium text-[#463f36] shadow-[0_8px_22px_-18px_rgba(38,30,23,0.6)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <motion.section {...sectionFade} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Constat terrain"
            title="Beaucoup d’établissements sont meilleurs en vrai qu’en ligne"
            copy="Restaurants et coffee shops investissent dans leur lieu, leur carte et leur service, mais leur présence digitale reste souvent en dessous du niveau réel de l’établissement."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {problems.map((problem) => (
              <div key={problem} className="rounded-2xl border border-[#e3d8ca] bg-[#fdf9f2] p-5">
                <p className="flex items-start gap-3 text-[#3d3731]">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#9f8460]" />
                  {problem}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <a
              href="#audit"
              className="inline-flex items-center rounded-full bg-[#2f2a24] px-5 py-2.5 text-sm font-semibold text-[#f8f4ee] shadow-[0_15px_30px_-20px_rgba(0,0,0,0.8)] transition hover:-translate-y-0.5"
            >
              Demander un audit gratuit
            </a>
          </div>
        </motion.section>

        <motion.section id="solution" {...sectionFade} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Système Menuva"
            title="Ce que je mets en place"
            copy="Je crée des menus digitaux premium et j’optimise la fiche Google Business pour offrir une expérience plus fluide, plus claire et plus directe."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#dfd2bf] bg-[#fffdfa] p-6 shadow-[0_15px_30px_-24px_rgba(47,37,24,0.85)] transition duration-300 hover:-translate-y-1 hover:border-[#c6ad86] hover:shadow-[0_25px_40px_-28px_rgba(47,37,24,0.95)]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1e7d8] text-[#5b4933] transition group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5c554a]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section {...sectionFade} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Impact" title="Ce que cela vous apporte concrètement" />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-[#e0d2bf] bg-[#fdf9f3] p-5">
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm text-[#5c554a]">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#audit"
              className="inline-flex items-center rounded-full bg-[#2f2a24] px-5 py-2.5 text-sm font-semibold text-[#f8f4ee] transition hover:-translate-y-0.5"
            >
              Demander un audit gratuit
            </a>
          </div>
        </motion.section>

        <motion.section id="preuve" {...sectionFade} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Preuve"
            title="Un exemple concret"
            copy="Un coffee shop reconnu à El Jadida a déjà fait appel à ce type d’accompagnement."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#ddcfbb] bg-[#fefaf3] p-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#7a6a56]">Avant</p>
              <div className="relative h-56 rounded-2xl border border-dashed border-[#cbb493] bg-[#f1e4cf]">
                <div className="absolute inset-0 m-auto h-8 w-40 rounded bg-[#ddcab0]" />
              </div>
            </div>
            <div className="rounded-3xl border border-[#c7a477] bg-gradient-to-br from-[#fffaf2] to-[#f1dfc4] p-5 shadow-[0_25px_45px_-30px_rgba(74,53,25,0.85)]">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#6a5840]">Après</p>
              <div className="relative h-56 rounded-2xl border border-[#ddc8a6] bg-[#fffdf9]">
                <div className="absolute left-4 right-4 top-4 h-20 rounded-xl bg-[radial-gradient(circle_at_40%_20%,#dcc29b,#ab8d67)]" />
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                  <div className="h-8 rounded-lg bg-[#f2e8d8]" />
                  <div className="h-8 rounded-lg bg-[#f2e8d8]" />
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-[#514a40]">
            Le but n’était pas simplement de créer une page, mais d’améliorer l’expérience digitale globale pour la
            rendre plus cohérente, plus premium et plus utile.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {["Meilleure expérience mobile", "Accès plus simple au menu", "Parcours client plus direct"].map((chip) => (
              <span key={chip} className="rounded-full border border-[#d8c9b3] bg-[#fdf8f1] px-4 py-2 text-[#4c4439]">
                {chip}
              </span>
            ))}
          </div>

          <a
            href="#audit"
            className="mt-8 inline-flex items-center rounded-full border border-[#b9a17d] bg-[#fef9f2] px-5 py-2.5 text-sm font-semibold text-[#2f2a24] transition hover:-translate-y-0.5"
          >
            Voir le projet
          </a>
        </motion.section>

        <motion.section id="formules" {...sectionFade} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Formules"
            title="Des formules adaptées à votre établissement"
            copy="Selon votre présence actuelle, vos besoins et votre niveau d’exigence."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {packages.map((pack) => (
              <div
                key={pack.name}
                className={`relative rounded-3xl border p-6 ${
                  pack.featured
                    ? "lg:-my-3 lg:py-9 border-[#b58f5e] bg-gradient-to-b from-[#fffaf0] to-[#f4e2c6] shadow-[0_35px_70px_-40px_rgba(60,40,18,0.9)]"
                    : "border-[#ddd0bc] bg-[#fffdf9]"
                }`}
              >
                {pack.badge ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-[#2f2a24] px-3 py-1 text-xs font-semibold text-[#f8f4ee]">
                    {pack.badge}
                  </span>
                ) : null}
                <h3 className="font-serif text-2xl font-semibold">{pack.name}</h3>
                <p className="mt-1 text-sm text-[#5e564b]">{pack.subtitle}</p>
                <p className="mt-4 text-lg font-semibold text-[#2f2a24]">{pack.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-[#4f473d]">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-[#8b6f4a]" /> {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#audit"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                    pack.featured
                      ? "bg-[#2f2a24] text-[#f8f4ee] shadow-[0_16px_30px_-20px_rgba(0,0,0,0.9)]"
                      : "border border-[#cfbea7] bg-[#fef9f2] text-[#2f2a24]"
                  }`}
                >
                  {pack.cta}
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...sectionFade} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Différence"
            title="Pourquoi travailler avec Menuva"
            copy="Menuva ne propose pas des sites génériques. L’approche est pensée pour les restaurants et coffee shops qui veulent une présence digitale plus premium, plus utile et plus orientée client."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Rendu visuel haut de gamme",
                text: "Un design soigné, sobre et premium qui valorise votre lieu dès le premier regard.",
              },
              {
                icon: Store,
                title: "Approche centrée sur le parcours client",
                text: "De Google au menu puis à la réservation : chaque étape est pensée pour convertir.",
              },
              {
                icon: MapPin,
                title: "Vision locale et personnalisée",
                text: "Une compréhension terrain d’El Jadida, des attentes clients et du marché local.",
              },
            ].map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="rounded-2xl border border-[#dfd2c1] bg-[#fdf9f3] p-6">
                  <Icon className="h-5 w-5 text-[#7a6446]" />
                  <h3 className="mt-3 font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm text-[#5b544a]">{point.text}</p>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section id="faq" {...sectionFade} className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader title="Questions fréquentes" />

          <div className="mt-8 space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.q} className="overflow-hidden rounded-2xl border border-[#ded1bf] bg-[#fdf9f3]">
                  <button
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{item.q}</span>
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-[#5a5349]">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section id="audit" {...sectionFade} className="mx-auto max-w-6xl px-4 pb-28 pt-10 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#c9ab7f] bg-gradient-to-br from-[#fbf2e5] via-[#f6e8d2] to-[#efdbc0] p-8 shadow-[0_28px_80px_-40px_rgba(88,63,26,0.8)] sm:p-12">
            <h2 className="max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Je peux vous montrer 3 améliorations concrètes pour votre établissement
            </h2>
            <p className="mt-4 max-w-2xl text-[#51493f]">
              Je regarde votre menu actuel, votre fiche Google et votre parcours client en ligne pour identifier
              rapidement ce qui peut être amélioré.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href=WHATSAPP_URL
                className="inline-flex items-center justify-center rounded-full bg-[#2f2a24] px-6 py-3 text-sm font-semibold text-[#f8f4ee] shadow-[0_15px_30px_-18px_rgba(0,0,0,0.8)] transition hover:-translate-y-0.5"
              >
                Demander mon audit gratuit
              </a>
              <a
                href=WHATSAPP_URL
                className="inline-flex items-center justify-center rounded-full border border-[#b79d77] bg-[#fdf7ee] px-6 py-3 text-sm font-semibold text-[#2f2a24] transition hover:-translate-y-0.5"
              >
                Me contacter sur WhatsApp
              </a>
            </div>

            <p className="mt-4 text-sm text-[#655b4e]">Réponse simple, rapide, et adaptée à votre établissement.</p>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-[#d8cab6] bg-[#f3eadf]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-serif text-xl font-semibold">Menuva</p>
            <p className="mt-1 text-sm text-[#5a5248]">Menus digitaux premium et optimisation Google Business</p>
            <p className="mt-1 text-sm text-[#5a5248]">Basé à El Jadida</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#4b4339]">
            <a href=WHATSAPP_URL className="hover:text-black">
              WhatsApp
            </a>
            <a href="#" className="hover:text-black">
              Instagram
            </a>
            <a href="mailto:contact@menuva.ma" className="hover:text-black">
              Email
            </a>
          </div>
        </div>
      </footer>

      <a
        href=WHATSAPP_URL
        aria-label="Contacter Menuva sur WhatsApp"
        className="fixed bottom-20 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 md:bottom-5"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>

      <div className="pointer-events-none fixed bottom-40 right-6 hidden rounded-full border border-[#dac7aa] bg-[#fffaf2] px-3 py-1 text-xs text-[#665e53] shadow-sm md:block">
        <CircleCheck className="mr-1 inline h-3 w-3" /> Audit gratuit
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d2c3ad] bg-[#f8f2e8]/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href="#audit"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-[#2f2a24] px-3 py-2.5 text-xs font-semibold text-[#f8f4ee]"
          >
            Audit gratuit
          </a>
          <a
            href=WHATSAPP_URL
            className="inline-flex flex-1 items-center justify-center rounded-full border border-[#b79d77] bg-[#fdf7ee] px-3 py-2.5 text-xs font-semibold text-[#2f2a24]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
