import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/sections/CtaBanner";
import { HighlightBar } from "@/components/sections/HighlightBar";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Testimonials } from "@/components/sections/Testimonials";
import { WorkflowSteps } from "@/components/sections/WorkflowSteps";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import { pageHighlights } from "@/data/site";

const title = "Servicii de Cadastru, Intabulare și Topografie | Topocond";
const description =
  "Servicii complete de cadastru, intabulare, ridicări topografice, dezmembrări, trasări limite și planuri de situație în județul Botoșani.";

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servicii" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servicii" }],
    scripts: [
      {
        type: "application/ld+json",
        // PLACEHOLDER — descrierile serviciilor se completează după validarea textelor
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((service, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: service.title,
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Acasă", to: "/" }, { label: "Servicii" }]}
        title={
          <>
            Servicii de Cadastru,
            <br />
            Intabulare și Topografie
          </>
        }
        subtitle="[subtitlu placeholder]"
      />

      <HighlightBar items={pageHighlights} />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Serviciile noastre"
            title="Soluții complete pentru orice tip de proprietate"
            subtitle="[subtitlu placeholder]"
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} delay={index * 70} />
            ))}
          </ul>
        </div>
      </section>

      <WorkflowSteps />

      <CtaBanner
        title="Ai nevoie de servicii de cadastru sau topografie?"
        subtitle="Contactează-ne acum și primești ofertă personalizată gratuit."
      />

      <Testimonials />
    </>
  );
}
