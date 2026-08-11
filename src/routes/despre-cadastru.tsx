import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpenText,
  Clock3,
  FileText,
  Files,
  Home,
  Landmark,
  MapPinned,
  PencilRuler,
  ScanSearch,
  ShieldCheck,
  Split,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/common/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "Despre Cadastru — Ghid util pentru proprietari | Topocond";
const description =
  "Află ce este cadastrul, când ai nevoie de el, ce acte sunt necesare și cum decurge procesul de intabulare și documentație cadastrală în Botoșani.";

const introCards = [
  {
    icon: BookOpenText,
    title: "Ce este cadastrul",
    text: "Cadastrul identifică, măsoară și descrie corect imobilul, astfel încât proprietatea să fie evidențiată clar în documentația tehnică și în cartea funciară.",
  },
  {
    icon: Landmark,
    title: "Când este necesar",
    text: "Ai nevoie de cadastru la vânzare, cumpărare, intabulare, construire, dezmembrare, alipire sau când trebuie făcută o actualizare a datelor proprietății.",
  },
  {
    icon: FileText,
    title: "Ce acte sunt necesare",
    text: "De regulă sunt solicitate actul de proprietate, cartea de identitate și, după caz, documente precum extrasul de carte funciară sau schița imobilului.",
  },
  {
    icon: Clock3,
    title: "Cât poate dura",
    text: "Durata diferă în funcție de tipul lucrării, actele disponibile și timpul de soluționare, dar un proces bine pregătit reduce întârzierile inutile.",
  },
] as const;

const propertyBenefits = [
  "Protecție juridică pentru dreptul de proprietate",
  "Valoare mai mare și tranzacții mai clare",
  "Acces mai ușor la finanțare și evaluare",
  "Claritate și siguranță privind limitele imobilului",
] as const;

const cadastruScenarios = [
  {
    icon: Home,
    title: "Vânzare / Cumpărare",
    text: "Pentru tranzacții sigure, imobilul trebuie identificat corect și corelat cu actele și datele din cartea funciară.",
  },
  {
    icon: BadgeCheck,
    title: "Intabulare",
    text: "Înscrierea în cartea funciară cere o documentație cadastrală bine întocmită și adaptată situației reale a proprietății.",
  },
  {
    icon: PencilRuler,
    title: "Construire / DTAC",
    text: "Ridicările și planurile topo sunt necesare când pregătești proiectare, autorizare sau alte documentații tehnice pentru construire.",
  },
  {
    icon: Split,
    title: "Dezmembrare / Alipire",
    text: "Dacă împarți un teren sau unești mai multe imobile, este necesară actualizarea evidențelor cadastrale și a noilor limite.",
  },
  {
    icon: Files,
    title: "Actualizare date",
    text: "Modificările privind suprafața, construcțiile sau destinația proprietății pot cere actualizare cadastru și refacerea documentației.",
  },
  {
    icon: MapPinned,
    title: "Clarificare limite",
    text: "Atunci când există neclarități în teren, măsurătorile și verificările topografice ajută la stabilirea limitelor corecte.",
  },
] as const;

const requiredDocuments = [
  "Act de proprietate",
  "Carte de identitate",
  "Extras de carte funciară, dacă există",
  "Schița imobilului, dacă există",
  "Certificat fiscal, după caz",
  "Alte documente relevante pentru situația imobilului",
] as const;

const processSteps = [
  "Solicitare și discuție inițială despre lucrare",
  "Analiza actelor și a situației proprietății",
  "Măsurători în teren și verificări tehnice",
  "Întocmirea documentației cadastrale",
  "Depunerea documentației la instituțiile competente",
  "Soluționare și predarea documentelor finale",
] as const;

const faqItems = [
  {
    question: "Ce este cadastrul?",
    answer:
      "Cadastrul este procesul prin care un imobil este măsurat, identificat și descris tehnic, astfel încât datele lui să poată fi înscrise corect în sistemul de cadastru și carte funciară.",
  },
  {
    question: "Care este diferența dintre cadastru și intabulare?",
    answer:
      "Cadastrul înseamnă partea tehnică: măsurători, plan și documentație cadastrală. Intabularea este înscrierea dreptului în cartea funciară, pe baza actelor și a documentației aprobate.",
  },
  {
    question: "Cât durează cadastrul în Botoșani?",
    answer:
      "Durata depinde de tipul imobilului, complexitatea lucrării, actele disponibile și termenele de soluționare. Pentru un cadastru bine pregătit, analiza inițială ajută mult la estimarea realistă a termenului.",
  },
  {
    question: "Ce acte sunt necesare pentru cadastru?",
    answer:
      "În mod obișnuit sunt necesare actul de proprietate și cartea de identitate. În unele cazuri pot fi cerute și extrasul de carte funciară, documentații mai vechi, schițe sau alte documente necesare pentru lucrare.",
  },
  {
    question: "Când trebuie actualizate informațiile cadastrale?",
    answer:
      "Actualizarea se face atunci când apar modificări privind suprafața, construcțiile, compartimentarea, destinația sau alte date care nu mai corespund cu situația reală din teren.",
  },
  {
    question: "Se poate face cadastru pentru teren și construcție în același timp?",
    answer:
      "Da, în multe situații se poate pregăti o documentație care să trateze împreună terenul și construcția, dacă actele și situația tehnică permit acest lucru.",
  },
] as const;

export const Route = createFileRoute("/despre-cadastru")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/despre-cadastru" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/despre-cadastru" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Acasă",
              item: "/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Despre Cadastru",
              item: "/despre-cadastru",
            },
          ],
        }),
      },
    ],
  }),
  component: DespreCadastruPage,
});

function DespreCadastruPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Acasă", to: "/" }, { label: "Despre Cadastru" }]}
        title="Despre Cadastru"
        subtitle="Informații esențiale, despre cadastru, intabulare și documentațiile topografice. Transparență, claritate și siguranță pentru proprietatea ta."
        backgroundImageSrc="/Images/Herosections/DespreCadastruHero-Topocond.png"
        backgroundPosition="67% center"
        backgroundClassName="bg-[position:70%_center] sm:bg-[position:74%_center] lg:bg-[position:67%_center]"
        overlayClassName="bg-[linear-gradient(90deg,rgba(8,22,18,0.78)_0%,rgba(8,22,18,0.67)_26%,rgba(8,22,18,0.47)_48%,rgba(8,22,18,0.22)_70%,rgba(8,22,18,0.06)_100%)]"
        contentClassName="py-14 sm:py-16 lg:py-18 xl:py-20"
        breadcrumbClassName="text-[0.8rem] sm:text-[0.88rem]"
        titleClassName="max-w-[22rem] text-[2.2rem] leading-[1.05] sm:max-w-[30rem] sm:text-[2.55rem] sm:leading-[1.04] lg:max-w-[40rem] lg:text-[2.8rem] lg:leading-[1.02] xl:max-w-[42rem] xl:text-[3rem] xl:leading-[1.02]"
        subtitleClassName="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base"
      >
        <div className="h-1 w-16 rounded-full bg-brand-accent" aria-hidden="true" />
      </PageHero>

      <section className="bg-white py-14 sm:py-[4.6rem] lg:py-[5.35rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="INFORMAȚII UTILE"
            title="Înțelege mai bine ce înseamnă cadastrul"
            className="max-w-[48rem]"
          />
          <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
            {introCards.map((item, index) => (
              <InfoCard key={item.title} {...item} delay={index * 70} variant="intro" />
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-15 sm:py-[4.85rem] lg:py-[5.7rem]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-[4.75rem] lg:px-8">
          <Reveal className="relative overflow-hidden rounded-[1.7rem] bg-card shadow-[0_30px_70px_rgba(11,37,28,0.14)]">
            <img
              src="/Images/About/DespreCadastru-Topocond.png"
              alt="Activitate de măsurători topografice pentru cadastru și intabulare în Botoșani"
              className="h-[27rem] w-full object-cover object-[42%_center] sm:h-[34rem] lg:h-[40rem]"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={100} className="self-center">
            <SectionHeading
              eyebrow="CE ESTE CADASTRUL"
              title="Cadastrul – baza siguranței proprietății tale"
              align="left"
              className="max-w-[34rem]"
            />
            <div className="mt-6 space-y-4 sm:space-y-5">
              <p className="max-w-[34rem] text-sm leading-[1.95] text-muted-foreground sm:text-[0.98rem]">
                Cadastrul este baza tehnică prin care un imobil este identificat, măsurat și descris
                corect, astfel încât datele sale să poată fi înscrise în cartea funciară. Pentru
                proprietari, un proces cadastral bine făcut înseamnă mai multă claritate,
                siguranță și control asupra situației reale a proprietății.
              </p>
              <p className="max-w-[34rem] text-sm leading-[1.95] text-muted-foreground sm:text-[0.98rem]">
                Fie că ai nevoie de intabulare, de actualizarea cărții funciare sau de o
                documentație cadastrală pentru teren ori construcție, rolul cadastrului este să
                coreleze actele cu măsurătorile din teren și să reducă riscurile juridice sau
                tehnice înaintea unor pași importanți.
              </p>
            </div>
            <ul className="mt-8 grid gap-3.5 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              {propertyBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex min-h-[5.8rem] items-start gap-3.5 rounded-2xl border border-border/80 bg-card px-4 py-4 shadow-card sm:px-4.5"
                >
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <ShieldCheck className="size-[1.05rem]" aria-hidden="true" />
                  </span>
                  <span className="pt-0.5 text-sm leading-relaxed text-brand-dark">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-15 sm:py-[4.85rem] lg:py-[5.55rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Când ai nevoie de cadastru"
            subtitle="Cele mai frecvente situații în care proprietarii au nevoie de măsurători, verificări și documentație cadastrală pregătită corect."
            className="max-w-[45rem]"
          />
          <ul className="mt-10 grid gap-4 sm:mt-11 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
            {cadastruScenarios.map((item, index) => (
              <InfoCard key={item.title} {...item} delay={index * 70} variant="scenario" />
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-15 sm:py-[4.85rem] lg:py-[5.7rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal className="h-full rounded-[1.95rem] border border-border/50 bg-card p-6 shadow-[0_18px_44px_rgba(13,36,27,0.07)] sm:p-7 lg:p-[2.15rem]">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <Files className="size-5" aria-hidden="true" />
                </span>
                <h2 className="text-xl font-bold text-brand-dark sm:text-2xl">
                  Documente necesare
                </h2>
              </div>
              <ul className="mt-6.5 grid gap-2.5 sm:mt-7">
                {requiredDocuments.map((document) => (
                  <li key={document} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-5.5 shrink-0 place-items-center rounded-full bg-brand-accent/12 text-brand">
                      <BadgeCheck className="size-[0.92rem]" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-[1.62] text-muted-foreground">
                      {document}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6.5 flex items-start gap-2.5 rounded-[1.15rem] border border-brand-soft/45 bg-brand-soft/28 px-4 py-3.5">
                <span className="mt-0.5 grid size-6.5 shrink-0 place-items-center rounded-full bg-white/75 text-brand">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                </span>
                <p className="text-sm leading-[1.62] text-muted-foreground">
                  Documentele pot varia în funcție de tipul lucrării, istoricul imobilului și
                  existența unor documentații anterioare.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={100}
              className="h-full rounded-[1.95rem] border border-border/50 bg-card p-6 shadow-[0_18px_44px_rgba(13,36,27,0.07)] sm:p-7 lg:p-[2.15rem]"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                  <ScanSearch className="size-5" aria-hidden="true" />
                </span>
                <h2 className="text-xl font-bold text-brand-dark sm:text-2xl">
                  Cum decurge procesul
                </h2>
              </div>
              <ol className="relative mt-6.5 grid gap-4 sm:mt-7">
                {processSteps.map((step, index) => (
                  <li key={step} className="relative flex items-start gap-3">
                    <div className="relative flex shrink-0 flex-col items-center self-stretch">
                      <span className="grid size-8.5 place-items-center rounded-full bg-brand text-[0.82rem] font-semibold text-primary-foreground shadow-[0_9px_22px_rgba(16,53,36,0.2)]">
                        {index + 1}
                      </span>
                      {index < processSteps.length - 1 ? (
                        <span
                          className="mt-2 w-px flex-1 rounded-full bg-brand/16"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                    <span className="pt-0.5 text-sm leading-[1.62] text-muted-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-15 sm:py-[4.8rem] lg:py-[5.45rem]">
        <div className="mx-auto max-w-[56rem] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Întrebări frecvente despre cadastru"
            subtitle="Răspunsuri scurte și clare pentru cele mai comune întrebări despre cadastru, intabulare și documentele necesare."
            className="max-w-[42rem]"
          />
          <Reveal className="mt-9 rounded-[1.7rem] border border-border/70 bg-card px-5 py-3 shadow-[0_24px_60px_rgba(13,36,27,0.1)] sm:mt-10 sm:px-8 sm:py-4">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="border-border/70"
                >
                  <AccordionTrigger className="gap-4 py-4 text-left text-[1rem] leading-relaxed font-semibold text-brand-dark hover:no-underline sm:py-5 sm:text-[1.02rem]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pr-8 text-sm leading-[1.88] text-muted-foreground sm:text-[0.98rem]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Ai nevoie de cadastru în Botoșani?"
        subtitle="Echipa Topocond Cadastru îți stă la dispoziție pentru consultanță, măsurători și întocmirea documentației necesare."
        iconAlwaysVisible
        className="pt-11 pb-15 sm:pt-10 sm:pb-[4.3rem] lg:pt-11 lg:pb-[5rem]"
      />
    </>
  );
}

function InfoCard({
  icon: Icon,
  title: cardTitle,
  text,
  delay = 0,
  variant = "intro",
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  delay?: number;
  variant?: "intro" | "scenario";
}) {
  const isIntro = variant === "intro";

  return (
    <Reveal as="li" delay={delay} className="h-full">
      <article
        className={
          isIntro
            ? "group flex h-full min-h-[15.7rem] flex-col items-center rounded-[1.45rem] border border-border/75 bg-card px-5 py-5.5 text-center shadow-card transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-float sm:min-h-[16.25rem] sm:px-6 sm:py-6"
            : "group flex h-full min-h-[11.1rem] flex-col justify-center rounded-[1.55rem] border border-border/70 bg-card px-4 py-4.25 shadow-[0_14px_34px_rgba(13,36,27,0.08)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(13,36,27,0.11)] sm:min-h-[11.45rem] sm:px-4.5 sm:py-4.5"
        }
      >
        {isIntro ? (
          <>
            <span className="grid size-[2.85rem] place-items-center rounded-2xl bg-brand-soft text-brand transition-transform duration-[250ms] group-hover:scale-105">
              <Icon className="size-[1.35rem]" aria-hidden="true" />
            </span>
            <h3 className="mt-5.5 text-[1.04rem] leading-snug font-semibold text-brand-dark">
              {cardTitle}
            </h3>
            <p className="mt-3 text-sm leading-[1.78] text-muted-foreground">{text}</p>
          </>
        ) : (
          <div className="flex items-center gap-3 sm:gap-3.5">
            <span className="grid size-[3.45rem] shrink-0 place-items-center rounded-full bg-brand-soft/70 text-brand transition-transform duration-[250ms] group-hover:scale-[1.03]">
              <Icon className="size-[1.48rem]" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-[1.02rem] leading-[1.24] font-semibold text-brand-dark sm:text-[1.06rem]">
                {cardTitle}
              </h3>
              <p className="mt-1.25 text-[0.94rem] leading-[1.54] text-muted-foreground">
                {text}
              </p>
            </div>
          </div>
        )}
      </article>
    </Reveal>
  );
}
