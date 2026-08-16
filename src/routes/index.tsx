import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, MapPinned, MessageCircle, Phone, ScanSearch } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { ScrollToTopLink } from "@/components/common/ScrollToTopLink";
import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import {
  absoluteUrl,
  company,
  createBreadcrumbSchema,
  createLocalBusinessSchema,
  createWebPageSchema,
  defaultOgImageUrl,
} from "@/data/site";
import { getUiIcon, serviceIcons } from "@/lib/icons";

const title = "Cadastru, Intabulare și Topografie în Botoșani | Topocond";
const description =
  "Servicii de cadastru, intabulare și topografie în județul Botoșani: documentații cadastrale, ridicări topografice, dezmembrări și planuri de situație.";
const pageUrl = absoluteUrl("/");

const heroHighlights = [
  { icon: "award", label: "Experiență", value: "Peste 8 ani" },
  { icon: "fileCheck", label: "Lucrări finalizate", value: "Peste 1200" },
  { icon: "clock", label: "Răspuns rapid", value: "În aceeași zi" },
  { icon: "shieldCheck", label: "Autorizare ANCPI", value: "Documentații autorizate" },
] as const;

const heroHighlightsContent = [
  { icon: "mapPin", label: "Acoperire locală", value: "Botoșani și împrejurimi" },
  { icon: "fileCheck", label: "Servicii complete", value: "Cadastru & Topografie" },
  { icon: "clock", label: "Răspuns rapid", value: "În aceeași zi" },
  { icon: "shieldCheck", label: "Documentații", value: "Conform cerințelor ANCPI" },
] as const;

const refinedHeroHighlights = [
  { icon: "mapPin", label: "Acoperire locală", value: "Botoșani și împrejurimi" },
  { icon: "fileCheck", label: "Servicii complete", value: "Cadastru & topografie" },
  { icon: "clock", label: "Răspuns rapid", value: "În aceeași zi" },
  { icon: "shieldCheck", label: "Documentații", value: "Conforme cerințelor ANCPI" },
] as const;

const homeServices = [
  {
    slug: "cadastru-si-intabulare",
    title: "Cadastru și Intabulare",
    shortTitle: "Cadastru și Intabulare",
    shortDescription:
      "Întocmirea documentațiilor cadastrale pentru înscrierea și actualizarea imobilelor în sistemul de cadastru și carte funciară.",
    icon: "cadastru",
    imageSrc: "/Images/Servicii/Cadastru_si_Intabulare-card-ui.jpg",
    imageAlt: "Documentație cadastrală pentru teren și construcții",
    bullets: [
      "Cadastru și intabulare pentru terenuri",
      "Case și alte construcții",
      "Apartamente și actualizări",
    ],
  },
  {
    slug: "ridicari-topografice",
    title: "Ridicări Topografice",
    shortTitle: "Ridicări Topografice",
    shortDescription:
      "Măsurători topografice pentru proiectare, autorizare și realizarea lucrărilor de construcții.",
    icon: "ridicari",
    imageSrc: "/Images/ClientsPhotos/RidicariTopo-home-card-ui.jpg",
    imageAlt: "Ridicare topografică realizată pe teren cu echipamente moderne",
    imageCardClassName: "object-[center_38%]",
    bullets: [
      "Ridicări topografice și planuri",
      "Documentații pentru proiectare",
      "Trasări și infrastructură",
    ],
  },
  {
    slug: "dezmembrari-alipiri-terenuri",
    title: "Dezmembrări / Alipiri Terenuri",
    shortTitle: "Dezmembrări / Alipiri",
    shortDescription:
      "Servicii cadastrale pentru împărțirea sau unirea imobilelor, cu documentația necesară pentru actualizarea evidențelor.",
    icon: "dezmembrari",
    imageSrc: "/Images/Servicii/Dezmembrari_alipire-home-card-ui.jpg",
    imageAlt: "Documentație pentru dezmembrare și alipire terenuri",
    bullets: [
      "Dezmembrare în loturi",
      "Alipire imobile",
      "Depunere la OCPI",
    ],
  },
  {
    slug: "trasari-limite-de-proprietate",
    title: "Trasări Limite de Proprietate",
    shortTitle: "Trasări Limite",
    shortDescription:
      "Identificarea și materializarea în teren a limitelor unui imobil, pe baza documentației cadastrale și a coordonatelor existente.",
    icon: "trasari",
    imageSrc: "/Images/Servicii/Trasari_limite-card-ui.jpg",
    imageAlt: "Trasare limite de proprietate pe teren",
    bullets: [
      "Identificarea limitelor",
      "Materializarea punctelor",
      "Măsurători precise",
    ],
  },
  {
    slug: "planuri-de-situatie",
    title: "Actualizare Informații Cadastrale",
    shortTitle: "Actualizare Informații",
    shortDescription:
      "Actualizarea datelor tehnice ale unui imobil atunci când situația existentă în teren sau informațiile cadastrale necesită modificări.",
    icon: "planuri",
    imageSrc: "/Images/Servicii/Planuri_de_Situatie.jpg",
    imageAlt: "Actualizare informații cadastrale și documentații tehnice",
    bullets: [
      "Înscriere construcții",
      "Modificare suprafață",
      "Repoziționare imobil",
    ],
  },
  {
    slug: "consultanta-cadastrala-si-juridica",
    title: "Consultanță Cadastrală și Juridică",
    shortTitle: "Consultanță Cadastrală",
    shortDescription: "Consultanță și sprijin pentru întocmirea documentațiilor cadastrale.",
    icon: "consultanta",
    imageSrc: "/Images/Servicii/Consultanta_Cadastrala_si_Juridica.jpg",
    imageAlt: "Consultanță cadastrală și juridică pentru documentații imobiliare",
    bullets: [
      "Analiză acte",
      "Clarificare pași",
      "Sprijin instituțional",
    ],
  },
] as const;

const quickAnswerItems = [
  {
    icon: ScanSearch,
    title: "Cu ce se ocupă Topocond?",
    text: "Topocond oferă servicii de cadastru, intabulare și topografie în Botoșani pentru terenuri, case, apartamente și alte proprietăți.",
  },
  {
    icon: MapPinned,
    title: "Unde oferim servicii?",
    text: "Lucrăm în Botoșani și în zonele limitrofe, pentru proprietari care au nevoie de măsurători, documentații cadastrale și sprijin în relația cu instituțiile competente.",
  },
  {
    icon: Building2,
    title: "Cum începe colaborarea?",
    text: "Ne contactezi prin telefon, WhatsApp, formularul de pe site sau direct la sediu, iar noi îți spunem ce acte sunt necesare și care sunt pașii potriviți pentru lucrarea ta.",
  },
] as const;

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: quickAnswerItems.map((item) => ({
    "@type": "Question",
    name: item.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.text,
    },
  })),
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: defaultOgImageUrl },
      { property: "og:image:alt", content: company.ogImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: defaultOgImageUrl },
      { name: "twitter:image:alt", content: company.ogImageAlt },
    ],
    links: [
      { rel: "canonical", href: pageUrl },
      {
        rel: "preload",
        as: "image",
        href: "/Images/Herosections/HomeHero-Topocond-mobile-ui.jpg",
        media: "(max-width: 640px)",
        fetchPriority: "high",
      },
      {
        rel: "preload",
        as: "image",
        href: "/Images/Herosections/HomeHero-Topocond-ui.jpg",
        media: "(min-width: 641px)",
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(createLocalBusinessSchema(description)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(createWebPageSchema("/", title, description)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbSchema([{ name: "Acasă", path: "/" }])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(homeFaqSchema),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark">
        <picture className="absolute inset-0 -z-20 block overflow-hidden" aria-hidden="true">
          <source media="(min-width: 641px)" srcSet="/Images/Herosections/HomeHero-Topocond-ui.jpg" />
          <source
            media="(max-width: 640px)"
            srcSet="/Images/Herosections/HomeHero-Topocond-mobile-ui.jpg"
          />
          <img
            src="/Images/Herosections/HomeHero-Topocond-mobile-ui.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width={560}
            height={373}
            sizes="100vw"
          />
        </picture>
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,.68) 0%, rgba(0,0,0,.5) 35%, rgba(0,0,0,.24) 70%, rgba(0,0,0,.08) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="mx-auto grid min-h-[540px] max-w-7xl items-start gap-8 px-4 pt-6 pb-24 sm:min-h-[585px] sm:px-6 sm:pt-8 sm:pb-28 lg:px-8 lg:pt-8 lg:pb-36 xl:h-[67vh] xl:min-h-[500px] xl:max-h-[620px] xl:grid-cols-[1.08fr_0.92fr] xl:items-center xl:gap-10 xl:pt-5 xl:pb-[5.5rem]">
          <Reveal className="pt-4 sm:pt-6 xl:pt-0">
            <h1 className="text-3xl leading-[1.05] font-bold text-primary-foreground sm:text-4xl lg:text-[3.55rem]">
              <span className="lg:whitespace-nowrap">Cadastru, Intabulare</span>{" "}
              <br className="hidden lg:block" />
              <span className="lg:whitespace-nowrap">și Topografie</span>{" "}
              <br className="hidden lg:block" />
              <span className="text-brand-accent lg:whitespace-nowrap">în Botoșani</span>
            </h1>
            <p className="mt-2 max-w-[38rem] text-sm leading-relaxed text-primary-foreground/88 sm:text-base">
              Oferim servicii de cadastru, intabulare și topografie în Botoșani, cu documentații
              clare, măsurători precise și suport pe tot parcursul lucrării.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-xl bg-brand text-primary-foreground hover:bg-brand/90"
              >
                <ScrollToTopLink to="/contact">
                  Solicită ofertă gratuită
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ScrollToTopLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-primary-foreground/45 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Scrie-ne pe WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-primary-foreground/45 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={company.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  {company.phoneLabel}
                </a>
              </Button>
            </div>
          </Reveal>

          <div className="xl:justify-self-end">
            <ul className="grid gap-3.5 sm:grid-cols-2 lg:max-w-[35rem] lg:gap-4 xl:max-w-none">
              {refinedHeroHighlights.map((item) => {
                const Icon = getUiIcon(item.icon);
                return (
                  <li
                    key={item.label}
                    className="flex min-w-0 items-start gap-3 rounded-2xl border border-white/[0.15] bg-white/[0.08] px-5 py-4 backdrop-blur-[10px] lg:min-h-[108px] lg:items-center lg:gap-4 lg:px-6 lg:py-5 xl:min-w-[220px]"
                  >
                    <Icon
                      className="mt-0.5 size-[1.75rem] shrink-0 text-white sm:size-[1.9rem] lg:size-[2rem]"
                      aria-hidden="true"
                    />
                    <div className="min-w-0 flex-1 lg:self-center">
                      <p className="text-[0.78rem] font-medium tracking-[0.01em] text-white/84">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white sm:text-[0.98rem] lg:text-[1rem] lg:leading-snug lg:font-bold">
                        {item.value}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Bara cu cele 6 servicii, suprapusă pe hero */}
      <div className="relative z-10 -mt-[4.5rem] sm:-mt-[4.9rem] lg:-mt-[6rem]">
        <Reveal className="mx-auto w-[calc(100%-2rem)] max-w-7xl rounded-[24px] border border-border bg-card p-6 shadow-[0_26px_70px_rgba(0,0,0,.12)] sm:w-[calc(100%-3rem)] sm:p-8 lg:w-[calc(100%-4rem)]">
          <h2 className="text-center text-lg font-bold text-brand-dark">
            Servicii de cadastru și topografie
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {homeServices.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <li key={service.slug} className="flex flex-col items-center gap-2 text-center">
                  <Icon className="size-6 text-brand" aria-hidden="true" />
                  <span className="text-xs leading-snug font-medium text-brand-dark">
                    {service.shortTitle}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>

      <AboutSection eyebrow="CINE SUNTEM" title="Despre Topocond Cadastru" withCta variant="home" />

      <section className="bg-white pt-7 pb-14 sm:pt-[2.2rem] sm:pb-[4.4rem] lg:pt-[2.6rem] lg:pb-[4.9rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Răspunsuri rapide"
            title="Ce trebuie să știi despre serviciile noastre"
            className="max-w-[42rem]"
          />

          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {quickAnswerItems.map((item, index) => (
              <Reveal key={item.title} as="li" delay={index * 70} className="h-full">
                <article className="flex h-full min-h-[15rem] flex-col rounded-[1.6rem] border border-border/75 bg-card px-6 py-6 shadow-[0_16px_38px_rgba(13,36,27,0.06)] transition-transform duration-200 lg:hover:-translate-y-0.5 lg:hover:shadow-[0_22px_48px_rgba(13,36,27,0.1)]">
                  <span className="grid size-12 place-items-center rounded-full bg-brand-soft/72 text-brand">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-[1.02rem] leading-snug font-semibold text-brand-dark sm:text-[1.08rem]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-[1.85] text-muted-foreground sm:text-[0.96rem]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-14 sm:py-[4.75rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Serviciile noastre"
            title="Soluții complete pentru proprietatea ta"
            subtitle="Fie că ai nevoie de cadastru pentru un teren, intabulare pentru casă, ridicări topografice sau consultanță pentru acte în Botoșani, suntem aici să te ajutăm."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homeServices.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                delay={index * 80}
                dialogEnabled={false}
                detailsHref={`/servicii#${service.slug}`}
              />
            ))}
          </ul>
          <div className="mt-6 text-center">
            <Button asChild variant="outline" className="border-brand text-brand">
              <ScrollToTopLink to="/servicii">
                Vezi toate serviciile
                <ArrowRight className="size-4" aria-hidden="true" />
              </ScrollToTopLink>
            </Button>
          </div>
        </div>
      </section>

      <WhyChooseSection />

      <Testimonials />

      <div className="bg-footer pb-0">
        <CtaBanner
          title="Ai nevoie de servicii de cadastru sau topografie?"
          subtitle="Contactează-ne acum și primești ofertă personalizată gratuit."
          floating
        />
      </div>
    </>
  );
}
