import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { Reveal } from "@/components/common/Reveal";
import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { IconCardGrid } from "@/components/sections/IconCardGrid";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { advantages, company, heroHighlights } from "@/data/site";
import { getUiIcon, serviceIcons } from "@/lib/icons";

const title = "Cadastru, Intabulare și Topografie în Botoșani | Topocond";
const description =
  "Servicii de cadastru, intabulare și topografie în județul Botoșani: documentații cadastrale, ridicări topografice, dezmembrări și planuri de situație.";

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
        <ImagePlaceholder
          alt="Imagine placeholder cu peisaj din județul Botoșani"
          label="Imagine hero placeholder"
          tone="dark"
          className="absolute inset-0 -z-10 h-full w-full border-0"
        />
        <div className="absolute inset-0 -z-10 bg-brand-dark/80" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-16 pb-24 sm:px-6 sm:pt-20 sm:pb-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-24">
          <Reveal>
            <h1 className="max-w-2xl text-3xl leading-tight font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Cadastru, Intabulare
              <br />
              și Topografie
              <br />
              <span className="text-brand-accent">în Botoșani</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
              {/* PLACEHOLDER — subtitlu de confirmat */}
              [subtitlu placeholder]
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-brand text-primary-foreground hover:bg-brand/90">
                <Link to="/contact">
                  Solicită ofertă gratuită
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Scrie pe WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={company.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  {company.phoneLabel}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((item) => {
                const Icon = getUiIcon(item.icon);
                return (
                  <li
                    key={item.label}
                    className="flex min-w-0 items-start gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4"
                  >
                    <Icon
                      className="mt-0.5 size-5 shrink-0 text-brand-accent"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-wide text-primary-foreground/70 uppercase">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-bold text-primary-foreground">{item.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Bara cu cele 6 servicii, suprapusă pe hero */}
      <div className="relative z-10 mx-auto -mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-xl border border-border bg-card p-6 shadow-float sm:p-8">
          <h2 className="text-center text-lg font-bold text-brand-dark">
            Servicii de cadastru și topografie
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {services.map((service) => {
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
