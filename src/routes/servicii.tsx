import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/sections/CtaBanner";
import { HighlightBar } from "@/components/sections/HighlightBar";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Testimonials } from "@/components/sections/Testimonials";
import { WorkflowSteps } from "@/components/sections/WorkflowSteps";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import {
  absoluteUrl,
  company,
  createBreadcrumbSchema,
  createWebPageSchema,
} from "@/data/site";

const title = "Servicii de Cadastru, Intabulare și Topografie | Topocond";
const description =
  "Servicii complete de cadastru, intabulare, ridicări topografice, dezmembrări, trasări limite și planuri de situație în județul Botoșani.";
const pageUrl = absoluteUrl("/servicii");
const servicesOgImageUrl = absoluteUrl("/og-image-servicii.svg");
const servicesOgImageAlt =
  "Servicii Topocond Cadastru pentru cadastru, intabulare și topografie în Botoșani";

const servicesHeroSubtitle =
  "Oferim servicii complete de cadastru și topografie în județul Botoșani, cu profesionalism, precizie și respect pentru timpul tău.";

const servicePageHighlights = [
  { icon: "clock", title: "Răspuns rapid", text: "În aceeași zi" },
  { icon: "shieldCheck", title: "Autorizare ANCPI", text: "Servicii autorizate" },
  { icon: "fileCheck", title: "Servicii complete", text: "Cadastru & Topografie" },
  { icon: "mapPin", title: "Acoperire locală", text: "Botoșani și împrejurimi" },
] as const;

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: servicesOgImageUrl },
      { property: "og:image:alt", content: servicesOgImageAlt },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: servicesOgImageUrl },
      { name: "twitter:image:alt", content: servicesOgImageAlt },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            url: `${pageUrl}#${service.slug}`,
            item: {
              "@type": "Service",
              name: service.title,
              description: service.shortDescription,
              areaServed: service.coverage,
              provider: {
                "@id": absoluteUrl("/#organization"),
              },
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(createWebPageSchema("/servicii", title, description)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          createBreadcrumbSchema([
            { name: "Acasă", path: "/" },
            { name: "Servicii", path: "/servicii" },
          ]),
        ),
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
        backgroundImageSrc="/Images/Herosections/ServiciiHero-Topocond.png"
        backgroundPosition="76% center"
        {...{
          subtitle: servicesHeroSubtitle,
          backgroundClassName:
            "bg-[position:74%_center] sm:bg-[position:78%_center] lg:bg-[position:76%_center]",
          overlayClassName:
            "bg-[linear-gradient(90deg,rgba(8,20,17,0.64)_0%,rgba(8,20,17,0.53)_34%,rgba(8,20,17,0.36)_62%,rgba(8,20,17,0.18)_100%)]",
          contentClassName: "py-14 sm:py-16 lg:py-18 xl:py-20",
          titleClassName:
            "max-w-[22rem] text-[2.2rem] leading-[1.05] sm:max-w-[30rem] sm:text-[2.55rem] sm:leading-[1.04] lg:max-w-[40rem] lg:text-[2.8rem] lg:leading-[1.02] xl:max-w-[42rem] xl:text-[3rem] xl:leading-[1.02]",
        }}
      >
        <div className="h-1 w-16 rounded-full bg-brand-accent" aria-hidden="true" />
      </PageHero>

      <HighlightBar items={servicePageHighlights} />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Serviciile noastre"
            title="Soluții complete pentru orice tip de proprietate"
            subtitle={
              <>
                Fie că ai nevoie de măsurători, acte cadastrale sau consultanță,
                <br className="hidden lg:block" />
                echipa noastră este alături de tine în fiecare etapă.
              </>
            }
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                anchorId={service.slug}
                delay={index * 70}
              />
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-surface">
        <WorkflowSteps className="bg-transparent pt-12 pb-4 sm:pt-14 sm:pb-6 lg:pt-[4.5rem] lg:pb-8" />

        <CtaBanner
          title="Ai nevoie de servicii de cadastru sau topografie?"
          subtitle="Contactează-ne acum și primești o ofertă personalizată gratuit."
          className="bg-transparent pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-18 lg:pb-20"
        />
      </div>

      <Testimonials />
    </>
  );
}
