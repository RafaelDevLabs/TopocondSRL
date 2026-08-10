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
        subtitle="Oferim servicii de cadastru, intabulare și topografie în județul Botoșani, cu accent pe precizie, claritate și o colaborare profesionistă de la primul contact până la documentația finală."
        backgroundImageSrc="/Images/Herosections/DespreNoiHero-Topocond.png"
        backgroundPosition="72% center"
        backgroundClassName="bg-[position:70%_center] sm:bg-[position:74%_center] lg:bg-[position:72%_center]"
        overlayClassName="bg-[linear-gradient(90deg,rgba(8,24,18,0.69)_0%,rgba(8,24,18,0.57)_30%,rgba(8,24,18,0.36)_62%,rgba(8,24,18,0.12)_100%)]"
        contentClassName="py-14 sm:min-h-[34rem] sm:py-[4.5rem] lg:min-h-[35.25rem] lg:justify-end lg:py-[4.1rem]"
        breadcrumbClassName="text-[0.8rem] sm:text-[0.88rem]"
        titleClassName="max-w-[22rem] text-[2.15rem] leading-[1.05] sm:max-w-[30rem] sm:text-[3rem] lg:max-w-[40rem] lg:text-[3.9rem]"
        subtitleClassName="mt-4 max-w-[22rem] text-sm leading-[1.8] text-primary-foreground/84 sm:mt-6 sm:max-w-[36rem] sm:text-lg lg:text-[1.12rem]"
      >
        <div className="h-1 w-16 rounded-full bg-brand-accent" aria-hidden="true" />
      </PageHero>

      <AboutSection
        eyebrow="CINE SUNTEM"
        title="Experiență, precizie și profesionalism în serviciile de cadastru și topografie"
      />

      <StatsBand />

      <section className="bg-white py-14 sm:py-[4.75rem] lg:py-[5.25rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="VALORILE NOASTRE"
            title="De ce să colaborezi cu noi?"
            subtitle="Punem accent pe seriozitate, comunicare deschisă și rezultate corecte, astfel încât fiecare proiect să fie gestionat eficient și cu atenție la detalii."
          />
          <div className="mt-9 sm:mt-12">
            <IconCardGrid items={values} columns={5} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ai nevoie de servicii de cadastru sau topografie?"
        subtitle="Spune-ne ce tip de lucrare ai în plan, iar noi îți oferim îndrumare, pașii necesari și o ofertă potrivită."
        iconAlwaysVisible
        className="pt-10 pb-14 sm:pt-9 sm:pb-16 lg:pt-11 lg:pb-20"
      />
    </>
  );
}
