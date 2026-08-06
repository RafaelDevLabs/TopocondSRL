import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { company } from "@/data/site";

const title = "Contact — Topocond Cadastru Botoșani";
const description =
  "Contactează echipa Topocond pentru servicii de cadastru, intabulare și topografie în județul Botoșani. Telefon, email și program de lucru.";

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
  { icon: MapPin, label: "Adresă", value: company.address },
  { icon: Clock, label: "Program", value: company.schedule },
];

function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Acasă", to: "/" }, { label: "Contact" }]}
        title="Contact"
        subtitle="[subtitlu placeholder]"
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Hai să discutăm despre proiectul tău"
            subtitle="[subtitlu placeholder]"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={100} className="space-y-6">
              <ul className="rounded-xl border border-border bg-card p-6 shadow-card">
                {details.map((detail) => (
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
                          className="mt-1 block rounded text-sm font-semibold break-all text-brand-dark transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-semibold text-brand-dark">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <ImagePlaceholder
                alt="Hartă placeholder cu locația firmei"
                label="Hartă placeholder"
                className="h-64 w-full rounded-xl"
              />
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
