import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { IconCardGrid } from "@/components/sections/IconCardGrid";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatsBand } from "@/components/sections/StatsBand";
import { values } from "@/data/site";

const title = "Despre Noi — Topocond Cadastru Botoșani";
const description =
  "Echipă de specialiști în cadastru, intabulare și topografie în județul Botoșani. Află cine suntem, valorile și modul nostru de lucru.";

export const Route = createFileRoute("/despre-noi")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/despre-noi" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/despre-noi" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Acasă", to: "/" }, { label: "Despre Noi" }]}
        title="Despre Topocond Cadastru"
        subtitle="[subtitlu placeholder]"
      />

      <AboutSection
        eyebrow="Cine suntem"
        title="Experiență, precizie și profesionalism în serviciile de cadastru și topografie"
      />

      <StatsBand />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Valorile noastre" title="De ce să colaborezi cu noi?" />
          <div className="mt-10">
            <IconCardGrid items={values} columns={5} />
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
