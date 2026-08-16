import { createFileRoute } from "@tanstack/react-router";
import { Clock, FileText, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import {
  absoluteUrl,
  company,
  createBreadcrumbSchema,
  createLocalBusinessSchema,
  createWebPageSchema,
  defaultOgImageUrl,
} from "@/data/site";

const title = "Contact Cadastru, Intabulare și Topografie în Botoșani | Topocond";
const description =
  "Contactează Topocond pentru cadastru, intabulare și topografie în Botoșani. Telefon, WhatsApp, email, program și informații pentru vizita la sediu.";
const pageUrl = absoluteUrl("/contact");

const contactHeroSubtitle =
  "Suntem aici să te ajutăm cu servicii de cadastru, intabulare și topografie în Botoșani, fie că ai nevoie de informații, ofertă sau programare.";

const contactHeroBenefits = [
  {
    icon: Phone,
    title: "Răspuns rapid",
    text: "În aceeași zi",
  },
  {
    icon: ShieldCheck,
    title: "Servicii autorizate",
    text: "ANCPI",
  },
  {
    icon: MapPin,
    title: "Acoperire locală",
    text: "Botoșani și împrejurimi",
  },
  {
    icon: Phone,
    title: "Telefon",
    text: company.phoneLabel,
    href: company.phoneHref,
  },
] as const;

export const Route = createFileRoute("/contact")({
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
        href: "/Images/Herosections/ContactHero-Topocond-mobile.jpg",
        media: "(max-width: 640px)",
      },
      {
        rel: "preload",
        as: "image",
        href: "/Images/Herosections/ContactHero-Topocond-ui.jpg",
        media: "(min-width: 641px)",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(createWebPageSchema("/contact", title, description)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          createBreadcrumbSchema([
            { name: "Acasă", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(createLocalBusinessSchema(description)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(contactFaqSchema),
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: Phone, label: "Telefon", value: company.phoneLabel, href: company.phoneHref },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Adresă", value: company.addressLines, href: company.mapsUrl },
  { icon: Clock, label: "Program", value: company.openingHours },
] as const;

const contactQuickHelpItems = [
  {
    icon: MessageCircle,
    title: "Cum ne trimiți detaliile lucrării?",
    text: "Ne poți scrie sau suna la telefon, pe WhatsApp, prin formularul de mai sus sau poți veni direct la sediul nostru din Botoșani.",
  },
  {
    icon: FileText,
    title: "Ce informații este util să ne spui?",
    text: "Localitatea, adresa imobilului, tipul proprietății și serviciul dorit ne ajută să îți oferim răspunsul potrivit mai rapid.",
  },
  {
    icon: Clock,
    title: "Când primești răspuns?",
    text: "Revenim rapid, de regulă în aceeași zi, cu pașii de urmat și lista actelor necesare pentru proiectul tău.",
  },
] as const;

const contactFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactQuickHelpItems.map((item) => ({
    "@type": "Question",
    name: item.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.text,
    },
  })),
} as const;

function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Acasă", to: "/" }, { label: "Contact" }]}
        title="Contact"
        subtitle={contactHeroSubtitle}
        footerContent={
          <div className="flex flex-col gap-3 sm:gap-4 lg:inline-flex lg:w-fit lg:max-w-full lg:flex-row lg:items-stretch lg:gap-0 lg:divide-x lg:divide-white/14">
            {contactHeroBenefits.map((benefit) => {
              const itemContent = (
                <>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-brand-accent/45 bg-white/4 text-brand-accent sm:size-[2.65rem]">
                    <benefit.icon className="size-[0.98rem] sm:size-[1rem]" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.92rem] font-semibold text-primary-foreground">
                      {benefit.title}
                    </p>
                    <p className="mt-0.5 text-[0.78rem] leading-relaxed text-primary-foreground/72 sm:text-[0.8rem]">
                      {benefit.text}
                    </p>
                  </div>
                </>
              );

              return benefit.href ? (
                <a
                  key={benefit.title}
                  href={benefit.href}
                  className="flex items-center gap-2.5 rounded-lg transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/70 lg:min-w-0 lg:pr-4 lg:pl-4 first:lg:pl-0 last:lg:pr-0"
                >
                  {itemContent}
                </a>
              ) : (
                <div
                  key={benefit.title}
                  className="flex items-center gap-2.5 lg:min-w-0 lg:pr-4 lg:pl-4 first:lg:pl-0 last:lg:pr-0"
                >
                  {itemContent}
                </div>
              );
            })}
          </div>
        }
        backgroundImageSrc="/Images/Herosections/ContactHero-Topocond-ui.jpg"
        backgroundImageSrcSet="/Images/Herosections/ContactHero-Topocond-ui.jpg 1400w, /Images/Herosections/ContactHero-Topocond.jpg 1720w"
        backgroundImageMobileSrc="/Images/Herosections/ContactHero-Topocond-mobile.jpg"
        backgroundImageWidth={1400}
        backgroundImageHeight={744}
        backgroundPosition="78% center"
        backgroundClassName="object-[76%_center] sm:object-[80%_center] lg:object-[78%_center]"
        overlayClassName="bg-[rgba(5,45,28,0.55)]"
        contentClassName="py-14 sm:py-16 lg:py-18 xl:py-20"
        breadcrumbClassName="text-[0.8rem] sm:text-[0.88rem]"
        titleClassName="max-w-[22rem] text-[2.2rem] leading-[1.05] sm:max-w-[30rem] sm:text-[2.55rem] sm:leading-[1.04] lg:max-w-[40rem] lg:text-[2.8rem] lg:leading-[1.02] xl:max-w-[42rem] xl:text-[3rem] xl:leading-[1.02]"
        subtitleClassName="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base"
      >
        <div className="h-1 w-[3.75rem] rounded-full bg-brand-accent" aria-hidden="true" />
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Hai să discutăm despre proiectul tău"
            subtitle="Spune-ne ce tip de lucrare ai nevoie în Botoșani sau în zonele limitrofe, iar noi revenim cu informațiile, actele necesare și pașii potriviți."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="order-1 lg:order-1">
              <ContactForm />
            </Reveal>

            <Reveal delay={140} className="order-2 space-y-6 lg:order-2 lg:self-start">
              <ul className="rounded-xl border border-border bg-card p-6 shadow-card">
                {details.map((detail) => {
                  const isAddress = detail.label === "Adresă";

                  return (
                    <li
                      key={detail.label}
                      className="flex min-w-0 items-start gap-3 border-b border-border py-4 first:pt-0 last:border-0 last:pb-0"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                        <detail.icon className="size-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target={isAddress ? "_blank" : undefined}
                            rel={isAddress ? "noopener noreferrer" : undefined}
                            className="mt-1 block rounded text-sm font-semibold break-words text-brand-dark transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                          >
                            {Array.isArray(detail.value)
                              ? detail.value.map((line) => (
                                  <span key={line} className="block">
                                    {line}
                                  </span>
                                ))
                              : detail.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-semibold text-brand-dark">
                            {Array.isArray(detail.value)
                              ? detail.value.map((line) => (
                                  <span key={line} className="block">
                                    {line}
                                  </span>
                                ))
                              : detail.value}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="relative h-[19rem] overflow-hidden rounded-xl shadow-card sm:h-[19.5rem]">
                <iframe
                  title={`${company.mapLabel} - locație Google Maps`}
                  src={company.mapsEmbedUrl}
                  loading="lazy"
                  allow="fullscreen"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white pb-14 sm:pb-[4.4rem] lg:pb-[4.9rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.9rem] border border-brand-soft/40 bg-brand-soft/18 px-5 py-8 shadow-[0_18px_44px_rgba(13,36,27,0.05)] sm:px-7 sm:py-10 lg:px-9 lg:py-11">
            <SectionHeading
              eyebrow="Răspunsuri rapide"
              title="Cum ne poți contacta mai ușor"
              className="max-w-[35rem]"
            />

            <ul className="mt-8 grid gap-5 lg:grid-cols-3">
              {contactQuickHelpItems.map((item, index) => (
                <Reveal key={item.title} as="li" delay={index * 70} className="h-full">
                  <article className="flex h-full min-h-[13rem] flex-col rounded-[1.45rem] border border-border/75 bg-card px-6 py-5.5 shadow-[0_14px_34px_rgba(13,36,27,0.05)] transition-all duration-200 lg:hover:-translate-y-0.5 lg:hover:shadow-[0_18px_40px_rgba(13,36,27,0.09)]">
                    <span className="grid size-11 place-items-center rounded-full bg-brand-soft/72 text-brand">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 text-[1rem] leading-snug font-semibold text-brand-dark sm:text-[1.05rem]">
                      {item.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-[1.8] text-muted-foreground sm:text-[0.95rem]">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pt-3 pb-14 sm:pt-5 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.95rem] border border-brand-soft/40 bg-brand-soft/22 p-5 shadow-[0_20px_48px_rgba(13,36,27,0.06)] sm:p-7 lg:p-[2.15rem]">
            <Reveal>
              <SectionHeading
                eyebrow="La birou"
                title="Vizitează-ne la birou"
                subtitle="Te așteptăm la birou pentru a discuta proiectul tău și pașii potriviți."
                align="left"
                className="max-w-[33rem] [&>p:first-child]:text-[0.68rem] [&>p:first-child]:tracking-[0.17em] [&>p:first-child]:text-brand-accent/80"
              />
            </Reveal>

            <div className="mt-9 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-5">
              <Reveal className="overflow-hidden rounded-[1.7rem] border border-white/70 bg-card shadow-[0_24px_54px_rgba(13,36,27,0.1)]">
                <img
                  src="/Images/ClientsPhotos/ContactOutside-ui.jpg"
                  alt="Exteriorul biroului Topocond din Botoșani"
                  className="h-[18.5rem] w-full object-cover object-center sm:h-[23rem] lg:h-[26.5rem]"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
              </Reveal>

              <Reveal
                delay={90}
                className="overflow-hidden rounded-[1.55rem] border border-white/70 bg-card shadow-[0_20px_46px_rgba(13,36,27,0.09)]"
              >
                <img
                  src="/Images/ClientsPhotos/ContactInside-ui.jpg"
                  alt="Interiorul biroului Topocond pregătit pentru întâlniri cu clienții"
                  className="h-[16rem] w-full object-cover object-center sm:h-[19rem] lg:h-[26.5rem]"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ai nevoie de servicii de cadastru sau topografie?"
        subtitle="Contactează-ne acum și primești ofertă personalizată gratuit."
      />
    </>
  );
}
