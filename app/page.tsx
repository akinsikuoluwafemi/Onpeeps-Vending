"use client";

import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Coffee,
  Dumbbell,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
  X,
} from "lucide-react";

type Language = "pt" | "en";

const content = {
  pt: {
    nav: ["Por que a OnPeeps", "Como funciona", "Para o seu espaço"],
    cta: "Seja um local parceiro",
    badge: "Pausas melhores, do jeito certo",
    title: (
      <>
        Seja parceiro da
        <br />
        <span className="text-[#809b62]">OnPeeps</span>
        <br />
        Vending.
      </>
    ),
    intro:
      "Estamos procurando academias, escritórios, residências estudantis, armazéns e espaços comerciais interessados em receber uma máquina de snacks e bebidas.",
    offer: "Veja o que oferecemos",
    difference: "A diferença OnPeeps",
    diffTitle: "Uma pequena comodidade que faz uma grande diferença.",
    cards: [
      [
        "Trazemos a máquina",
        "Você disponibiliza o espaço. Nós compramos, instalamos, abastecemos, limpamos e cuidamos da máquina.",
      ],
      [
        "Sempre confiável",
        "Mantemos os produtos frescos e as máquinas funcionando, com suporte rápido quando necessário.",
      ],
      [
        "Feito para as pessoas",
        "Uma seleção cuidadosa de snacks e bebidas, adaptada às pessoas do seu espaço.",
      ],
    ],
    spaces: "Onde nos encaixamos",
    spacesTitle: (
      <>
        Coloque praticidade
        <br />
        nos lugares certos.
      </>
    ),
    spacesText:
      "Seja durante uma pausa, entre treinos ou a caminho de casa, a OnPeeps está presente.",
    placements: [
      "Academias e clubes",
      "Escritórios e empresas",
      "Armazéns e logística",
      "Residências estudantis",
    ],
    simple: "Simples desde o primeiro dia",
    howTitle: "Você oferece o espaço. Nós oferecemos tudo de bom.",
    steps: [
      [
        "01",
        "Conte-nos sobre o seu espaço",
        "Compartilhe detalhes sobre o local, o movimento e o que as pessoas precisam.",
      ],
      [
        "02",
        "Encontramos a melhor solução",
        "Indicamos a máquina, os produtos e o posicionamento ideais para o seu espaço.",
      ],
      [
        "03",
        "Instalamos e cuidamos de tudo",
        "Depois da aprovação, levamos a máquina, mantemos o estoque e cuidamos de tudo.",
      ],
    ],
    contactEyebrow: "Vamos facilitar",
    contactTitle: (
      <>
        O seu espaço pode
        <br />
        <span className="text-[#809b62]">receber a OnPeeps?</span>
      </>
    ),
    contactText:
      "Tem interesse em receber uma máquina de vending no seu local?",
    start: "Vamos conversar",
    footer: "Conveniência, pensada para você.",
  },

  en: {
    nav: ["Why OnPeeps", "How it works", "For your space"],
    cta: "Become a host location",
    badge: "Better breaks, built in",
    title: (
      <>
        Partner with
        <br />
        <span className="text-[#809b62]">OnPeeps</span>
        <br />
        Vending.
      </>
    ),
    intro:
      "We are looking for gyms, offices, student residences, warehouses, and commercial spaces interested in hosting a snack and beverage vending machine.",
    offer: "See what we offer",
    difference: "The OnPeeps difference",
    diffTitle: "A small amenity that makes a big difference.",
    cards: [
      [
        "We bring the machine",
        "You provide the right spot. We buy, install, stock, clean, and maintain the machine.",
      ],
      [
        "Always reliable",
        "We keep products fresh and machines working, with responsive support when needed.",
      ],
      [
        "Made for people",
        "A thoughtful range of snacks and drinks, tailored to the people in your space.",
      ],
    ],
    spaces: "Where we fit in",
    spacesTitle: (
      <>
        Put convenience
        <br />
        in the right places.
      </>
    ),
    spacesText:
      "Whether people are on a break, between sets, or heading home, OnPeeps is there.",
    placements: [
      "Gyms & fitness clubs",
      "Offices & workplaces",
      "Warehouses & logistics",
      "Student residences",
    ],
    simple: "Simple from day one",
    howTitle: "You provide the space. We provide the good stuff.",
    steps: [
      [
        "01",
        "Tell us about your space",
        "Share a few details about your location, footfall, and what your people need.",
      ],
      [
        "02",
        "We find the right fit",
        "We recommend the machine, product mix, and placement that works best for your space.",
      ],
      [
        "03",
        "We place and run it",
        "Once approved, we bring in our machine, keep it stocked, and take care of everything.",
      ],
    ],
    contactEyebrow: "Let's make it easy",
    contactTitle: (
      <>
        Could your space
        <br />
        <span className="text-[#809b62]">host OnPeeps?</span>
      </>
    ),
    contactText: "Interested in hosting a vending machine at your location?",
    start: "Start a conversation",
    footer: "Convenience, thoughtfully delivered.",
  },
} as const;

const placementIcons = [Dumbbell, Building2, Warehouse, PackageCheck];

export default function Page() {
  const [language, setLanguage] = useState<Language>("pt");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = content[language];

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f2] text-[#17211b]">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="relative flex h-16 items-center justify-between gap-2 border-b border-[#17211b]/10 sm:h-20 md:gap-4">
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="shrink-0 text-[15px] font-bold tracking-[-0.05em] sm:text-xl"
          >
            <span className="sm:hidden">OnPeeps Vending</span>
            <span className="hidden sm:inline">OnPeeps Vending</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-9 text-sm font-medium text-[#536057] md:flex">
            <a href="#why">{t.nav[0]}</a>
            <a href="#how">{t.nav[1]}</a>
            <a href="#spaces">{t.nav[2]}</a>
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-4 sm:flex">
            <LanguageSelect language={language} setLanguage={setLanguage} />

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#17211b] px-5 py-2.5 text-sm font-semibold text-white"
            >
              {t.cta}
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex shrink-0 items-center gap-1 md:hidden">
            <LanguageSelect language={language} setLanguage={setLanguage} />

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex size-9 shrink-0 items-center justify-center text-[#17211b] transition-opacity hover:opacity-60"
            >
              {menuOpen ? (
                <X size={21} strokeWidth={1.8} />
              ) : (
                <Menu size={21} strokeWidth={1.8} />
              )}
            </button>
          </div>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+1px)] z-30 border-b border-[#17211b]/10 bg-[#f7f7f2] px-1 py-5 shadow-lg md:hidden">
              <nav className="flex flex-col">
                <a
                  href="#why"
                  onClick={closeMenu}
                  className="py-3 text-sm font-medium text-[#536057]"
                >
                  {t.nav[0]}
                </a>

                <a
                  href="#how"
                  onClick={closeMenu}
                  className="py-3 text-sm font-medium text-[#536057]"
                >
                  {t.nav[1]}
                </a>

                <a
                  href="#spaces"
                  onClick={closeMenu}
                  className="py-3 text-sm font-medium text-[#536057]"
                >
                  {t.nav[2]}
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-3 inline-flex items-center justify-center gap-2 bg-[#17211b] px-5 py-3.5 text-sm font-semibold text-white"
                >
                  {t.cta}
                  <ArrowRight size={16} />
                </a>
              </nav>
            </div>
          )}
        </header>

        {/* Hero */}
        <section
          id="top"
          className="relative grid gap-12 pb-20 pt-16 lg:grid-cols-[1.03fr_.97fr] lg:items-center lg:pb-28 lg:pt-24"
        >
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b9d986] bg-[#eff8dc] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#52702e]">
              <Sparkles size={15} />
              {t.badge}
            </div>

            <h1 className="max-w-2xl text-[clamp(2.6rem,5.2vw,5rem)] font-semibold leading-[.92] tracking-[-.075em]">
              {t.title}
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#536057]">
              {t.intro}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#17211b] px-6 py-3.5 text-sm font-semibold text-white"
              >
                {t.cta}
                <ArrowRight size={16} />
              </a>

              <a
                href="#why"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#17211b]/20 px-6 py-3.5 text-sm font-semibold"
              >
                {t.offer}
                <ChevronDown size={16} />
              </a>
            </div>
          </div>

          {/* Vending machine illustration */}
          <div className="relative mx-auto h-[430px] w-full max-w-[530px] lg:h-[560px]">
            <div className="absolute inset-x-8 bottom-0 top-8 rounded-[48%_48%_18%_18%] bg-[#dcecc4] lg:inset-x-12" />

            <div className="absolute left-1/2 top-1/2 z-10 h-[365px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-[23px] border-[9px] border-[#243128] bg-[#f0f2e9] shadow-[18px_24px_0_#aec68c] lg:h-[450px] lg:w-[270px]">
              <div className="absolute inset-x-3 top-3 h-[220px] rounded-[13px] bg-[#31443b] p-4 lg:h-[285px]">
                <div className="flex justify-between text-[9px] font-bold tracking-[.2em] text-[#c7f36b]">
                  <span>ONPEEPS</span>
                  <span>24/7</span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2 lg:mt-10">
                  <span className="h-20 rounded-md bg-[#edbb67]" />
                  <span className="h-20 rounded-md bg-[#d8896e]" />
                  <span className="h-20 rounded-md bg-[#c7f36b]" />
                  <span className="h-20 rounded-md bg-[#f4e2be]" />
                </div>
              </div>

              <div className="absolute inset-x-7 bottom-14 h-2 rounded bg-[#c5cdc1]" />

              <div className="absolute bottom-6 left-1/2 size-6 -translate-x-1/2 rounded-full bg-[#c7f36b] shadow-[0_0_0_4px_#d5ddd0]" />
            </div>

            <div className="absolute right-0 top-8 z-20 flex rotate-6 items-center gap-2 rounded-2xl bg-white px-4 py-3 text-xs font-semibold shadow-xl shadow-[#536057]/10">
              <span className="flex size-8 items-center justify-center rounded-full bg-[#c7f36b]">
                <Check size={16} />
              </span>
              {language === "pt" ? "Sempre abastecida" : "Freshly stocked"}
            </div>

            <div className="absolute bottom-14 left-0 z-20 flex -rotate-6 items-center gap-2 rounded-2xl bg-[#17211b] px-4 py-3 text-xs font-semibold text-white shadow-xl">
              <MapPin size={16} className="text-[#c7f36b]" />
              {language === "pt" ? "No seu bairro" : "In your neighbourhood"}
            </div>
          </div>
        </section>

        {/* Why OnPeeps */}
        <section
          id="why"
          className="grid gap-8 border-y border-[#17211b]/10 py-16 lg:grid-cols-[.72fr_1.28fr] lg:py-20"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#809b62]">
              {t.difference}
            </p>

            <h2 className="mt-4 max-w-sm text-4xl font-semibold leading-tight tracking-[-.055em] sm:text-5xl">
              {t.diffTitle}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {t.cards.map(([title, text], i) => {
              const Icon = [Truck, ShieldCheck, Coffee][i];

              return (
                <div key={title}>
                  <Icon className="mb-5 text-[#809b62]" />

                  <h3 className="font-semibold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#68736b]">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Locations */}
        <section id="spaces" className="py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#809b62]">
                {t.spaces}
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-.055em] sm:text-6xl">
                {t.spacesTitle}
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#68736b]">
              {t.spacesText}
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.placements.map((label, i) => {
              const Icon = placementIcons[i];

              return (
                <div
                  key={label}
                  className={`group min-h-48 rounded-3xl p-6 transition-transform hover:-translate-y-1 ${
                    i % 2 === 0 ? "bg-[#e1edcf]" : "bg-[#e9e5d8]"
                  }`}
                >
                  <Icon className="text-[#536d42]" />

                  <h3 className="mt-20 text-xl font-semibold tracking-[-.03em]">
                    {label}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="rounded-[2.5rem] bg-[#17211b] px-6 py-16 text-white sm:px-12 lg:px-20 lg:py-20"
        >
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c7f36b]">
                {t.simple}
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.055em] sm:text-5xl">
                {t.howTitle}
              </h2>
            </div>

            <div className="flex flex-col">
              {t.steps.map(([number, title, text]) => (
                <div
                  key={number}
                  className="grid grid-cols-[48px_1fr] gap-5 border-t border-white/15 py-6 first:pt-0"
                >
                  <span className="text-sm text-[#c7f36b]">{number}</span>

                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-white/60">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="flex flex-col gap-8 py-20 lg:flex-row lg:items-center lg:justify-between lg:py-28"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#809b62]">
              {t.contactEyebrow}
            </p>

            <h2 className="mt-4 max-w-xl text-5xl font-semibold leading-[.95] tracking-[-.065em] sm:text-7xl">
              {t.contactTitle}
            </h2>
          </div>

          <div className="max-w-sm rounded-3xl bg-[#e1edcf] p-7">
            <p className="text-lg font-medium leading-7">{t.contactText}</p>

            <a
              href="mailto:akinsikufemi@onpeps.com"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#17211b] px-5 py-3 text-sm font-semibold text-white"
            >
              {t.start}
              <Mail size={16} />
            </a>

            <p className="mt-4 text-xs text-[#68736b]">
              akinsikufemi@onpeps.com
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-4 border-t border-[#17211b]/10 py-7 text-xs text-[#68736b] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-bold text-[#17211b]">OnPeeps Vending.</span>

          <span>{t.footer}</span>

          <span>© {new Date().getFullYear()} Onpeeps</span>
        </footer>
      </div>
    </main>
  );
}

function LanguageSelect({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div aria-label="Language selector">
      {/* Desktop language buttons */}
      <div className="hidden items-center gap-1 rounded-full border border-[#17211b]/15 bg-white/60 p-1.5 shadow-sm sm:inline-flex">
        <button
          type="button"
          aria-label="Português"
          aria-pressed={language === "pt"}
          onClick={() => setLanguage("pt")}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-bold tracking-[0.08em] transition-colors ${
            language === "pt"
              ? "bg-[#17211b] text-white"
              : "text-[#536057] hover:bg-[#17211b]/5"
          }`}
        >
          <span aria-hidden="true">🇵🇹</span>
          PT
        </button>

        <button
          type="button"
          aria-label="English"
          aria-pressed={language === "en"}
          onClick={() => setLanguage("en")}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-bold tracking-[0.08em] transition-colors ${
            language === "en"
              ? "bg-[#17211b] text-white"
              : "text-[#536057] hover:bg-[#17211b]/5"
          }`}
        >
          <span aria-hidden="true">🇬🇧</span>
          EN
        </button>
      </div>

      {/* Mobile language dropdown */}
      <div className="relative sm:hidden">
        <select
          aria-label="Select language"
          value={language}
          onChange={(event) => setLanguage(event.target.value as Language)}
          className="h-9 w-[72px] appearance-none border-0 bg-transparent pl-0.5 pr-4 text-xs font-semibold text-[#17211b] outline-none focus:ring-0"
        >
          <option value="pt">🇵🇹 PT</option>
          <option value="en">🇬🇧 EN</option>
        </select>

        <ChevronDown
          size={13}
          strokeWidth={1.8}
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#536057]"
        />
      </div>
    </div>
  );
}
