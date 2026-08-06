import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { IconCardGrid } from "@/components/sections/IconCardGrid";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { advantages, company } from "@/data/site";
import { getUiIcon, serviceIcons } from "@/lib/icons";

const title = "Cadastru, Intabulare și Topografie în Botoșani | Topocond";
const description =
  "Servicii de cadastru, intabulare și topografie în județul Botoșani: documentații cadastrale, ridicări topografice, dezmembrări și planuri de situație.";

const heroHighlights = [
  { icon: "award", label: "Experiență", value: "Peste 8 ani" },
  { icon: "fileCheck", label: "Lucrări finalizate", value: "Peste 1200" },
  { icon: "clock", label: "Răspuns rapid", value: "În aceeași zi" },
  { icon: "shieldCheck", label: "Autorizare ANCPI", value: "Documentații autorizate" },
] as const;

const homeServiceOrder = [
  "cadastru-si-intabulare",
  "ridicari-topografice",
  "dezmembrari-alipiri-terenuri",
  "trasari-limite-de-proprietate",
  "planuri-de-situatie",
  "consultanta-cadastrala-si-juridica",
] as const;

const homeServices = homeServiceOrder
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service) => service !== undefined);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        // PLACEHOLDER — date de firmă de confirmat înainte de publicare
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: company.name,
          description,
          telephone: company.phoneLabel,
          areaServed: company.address,
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-dark">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/Images/Herosections/HomeHero-Topocond.jpeg")' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,.58) 0%, rgba(0,0,0,.42) 35%, rgba(0,0,0,.18) 70%, rgba(0,0,0,.05) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="mx-auto grid min-h-[540px] max-w-7xl items-start gap-8 px-4 pt-6 pb-24 sm:min-h-[585px] sm:px-6 sm:pt-8 sm:pb-28 lg:h-[67vh] lg:min-h-[500px] lg:max-h-[620px] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-10 lg:px-8 lg:pt-5 lg:pb-[5.5rem]">
          <Reveal className="pt-4 sm:pt-6 lg:pt-0">
            <h1 className="text-3xl leading-[1.05] font-bold text-primary-foreground sm:text-4xl lg:text-[3.55rem]">
              <span className="lg:whitespace-nowrap">Cadastru, Intabulare</span>
              <br className="hidden lg:block" />
              <span className="lg:whitespace-nowrap">și Topografie</span>
              <br className="hidden lg:block" />
              <span className="text-brand-accent lg:whitespace-nowrap">în Botoșani</span>
            </h1>
            <p className="mt-2 max-w-[38rem] text-sm leading-relaxed text-primary-foreground/88 sm:text-base">
              Documentații cadastrale complete, realizate rapid și conform legislației în vigoare.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-xl bg-brand text-primary-foreground hover:bg-brand/90"
              >
                <Link to="/contact">
                  Solicită ofertă gratuită
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-primary-foreground/45 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Scrie pe WhatsApp
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

          <Reveal delay={120} className="lg:justify-self-end">
            <ul className="grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((item) => {
                const Icon = getUiIcon(item.icon);
                return (
                  <li
                    key={item.label}
                    className="flex min-w-0 items-start gap-4 rounded-2xl border border-white/[0.15] bg-white/[0.08] px-7 py-6 backdrop-blur-[10px]"
                  >
                    <Icon
                      className="mt-0.5 size-[2rem] shrink-0 text-white sm:size-[2.15rem]"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-[0.78rem] font-medium tracking-[0.01em] text-white/84">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Bara cu cele 6 servicii, suprapusă pe hero */}
      <div className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:-mt-20 lg:px-8">
        <Reveal className="rounded-[24px] border border-border bg-card p-6 shadow-[0_20px_60px_rgba(0,0,0,.08)] sm:p-8">
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

      <AboutSection eyebrow="Cine suntem" title="Despre Topocond Cadastru" withCta />

      <section className="bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Serviciile noastre"
            title="Soluții complete pentru proprietatea ta"
            subtitle="[subtitlu placeholder]"
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.slug} service={service} delay={index * 80} />
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-brand text-brand">
              <Link to="/servicii">
                Vezi toate serviciile
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="De ce să alegi" title="Avantajele colaborării cu noi" />
          <div className="mt-10">
            <IconCardGrid items={advantages} />
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaBanner
        title="Ai nevoie de servicii de cadastru sau topografie?"
        subtitle="Contactează-ne acum și primești ofertă personalizată gratuit."
      />
    </>
  );
}
