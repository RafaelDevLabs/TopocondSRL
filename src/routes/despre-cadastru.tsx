import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/common/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";

const title = "Despre Cadastru — Informații utile | Topocond";
const description =
  "Secțiune informativă despre cadastru și intabulare. Conținutul este în pregătire și va fi completat cu informațiile validate.";

export const Route = createFileRoute("/despre-cadastru")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/despre-cadastru" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/despre-cadastru" }],
  }),
  component: DespreCadastruPage,
});

/** Structură placeholder — fără conținut juridic sau tehnic inventat. */
const placeholderSections = [
  "[titlu secțiune placeholder]",
  "[titlu secțiune placeholder]",
  "[titlu secțiune placeholder]",
  "[titlu secțiune placeholder]",
];

function DespreCadastruPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Acasă", to: "/" }, { label: "Despre Cadastru" }]}
        title="Despre Cadastru"
        subtitle="[subtitlu placeholder]"
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Informații utile"
            title="[titlu secțiune placeholder]"
            subtitle="[subtitlu placeholder]"
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {placeholderSections.map((heading, index) => (
              <Reveal as="li" key={index} delay={index * 70}>
                <article className="h-full rounded-xl border border-border bg-card p-6 shadow-card">
                  <h3 className="text-base font-semibold text-brand-dark">{heading}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    [text placeholder — conținutul va fi furnizat de client]
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Ai nevoie de servicii de cadastru sau topografie?"
        subtitle="Contactează-ne acum și primești ofertă personalizată gratuit."
      />
    </>
  );
}
