import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { company } from "@/data/site";

const title = "Contact - Topocond Cadastru Botoșani";
const description =
  "Contactează echipa Topocond pentru servicii de cadastru, intabulare și topografie în județul Botoșani. Telefon, email și program de lucru.";

const contactHeroSubtitle =
  "Suntem aici să te ajutăm cu servicii de cadastru, topografie și intabulare.";

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
] as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const details = [
  { icon: Phone, label: "Telefon", value: company.phoneLabel, href: company.phoneHref },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Adresă", value: company.addressLines, href: company.mapsUrl },
  { icon: Clock, label: "Program", value: company.openingHours },
] as const;

function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Acasă", to: "/" }, { label: "Contact" }]}
        title="Contact"
        subtitle={contactHeroSubtitle}
        footerContent={
          <div className="flex flex-col gap-4 sm:gap-5 lg:inline-flex lg:w-fit lg:max-w-full lg:flex-row lg:items-stretch lg:gap-0 lg:divide-x lg:divide-white/14">
            {contactHeroBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-center gap-3 lg:min-w-0 lg:pr-5 lg:pl-5 first:lg:pl-0 last:lg:pr-0"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-accent/45 bg-white/4 text-brand-accent sm:size-[2.875rem]">
                  <benefit.icon className="size-[1.05rem] sm:size-[1.1rem]" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-primary-foreground">{benefit.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-primary-foreground/72 sm:text-[0.82rem]">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        }
        backgroundImageSrc="/Images/Herosections/ContactHero-Topocond.png"
        backgroundPosition="78% center"
        backgroundClassName="bg-[position:76%_center] sm:bg-[position:80%_center] lg:bg-[position:78%_center]"
        overlayClassName="bg-[rgba(5,45,28,0.55)]"
        contentClassName="flex min-h-[34rem] flex-col justify-center py-16 sm:min-h-[36rem] sm:py-[4.5rem] lg:min-h-[33.75rem] lg:justify-end lg:py-[4.75rem] xl:min-h-[35rem] xl:py-[5rem]"
        breadcrumbClassName="text-[0.8rem] sm:text-[0.88rem]"
        titleClassName="max-w-[34rem] text-[2.7rem] leading-[1.05] sm:text-[3.2rem] lg:text-[3.95rem] xl:text-[4.1rem]"
        subtitleClassName="mt-6 max-w-[32.5rem] text-base leading-[1.8] text-primary-foreground/82 sm:text-lg lg:text-[1.18rem]"
      >
        <div className="h-1 w-[3.75rem] rounded-full bg-brand-accent" aria-hidden="true" />
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Hai să discutăm despre proiectul tău"
            subtitle="Spune-ne de ce ai nevoie, iar noi revenim cu informațiile și pașii necesari."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={100} className="space-y-6">
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
                            {Array.isArray(detail.value) ? (
                              detail.value.map((line) => (
                                <span key={line} className="block">
                                  {line}
                                </span>
                              ))
                            ) : (
                              detail.value
                            )}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-semibold text-brand-dark">
                            {Array.isArray(detail.value) ? (
                              detail.value.map((line) => (
                                <span key={line} className="block">
                                  {line}
                                </span>
                              ))
                            ) : (
                              detail.value
                            )}
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
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </Reveal>
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
