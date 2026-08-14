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
  "Topocond este o firmă de cadastru din Botoșani, specializată în cadastru, intabulare și topografie. Descoperă echipa, experiența și modul nostru de lucru.";

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
        subtitle="Oferim servicii de cadastru, intabulare și topografie în Botoșani, printr-o abordare clară, bine organizată și atentă la fiecare etapă, de la măsurători până la documentația finală."
        backgroundImageSrc="/Images/Herosections/DespreNoiHero-Topocond.png"
        backgroundPosition="72% center"
        backgroundClassName="bg-[position:70%_center] sm:bg-[position:74%_center] lg:bg-[position:72%_center]"
        overlayClassName="bg-[linear-gradient(90deg,rgba(8,24,18,0.69)_0%,rgba(8,24,18,0.57)_30%,rgba(8,24,18,0.36)_62%,rgba(8,24,18,0.12)_100%)]"
        contentClassName="py-14 sm:py-16 lg:py-18 xl:py-20"
        breadcrumbClassName="text-[0.8rem] sm:text-[0.88rem]"
        titleClassName="max-w-[22rem] text-[2.2rem] leading-[1.05] sm:max-w-[30rem] sm:text-[2.55rem] sm:leading-[1.04] lg:max-w-[40rem] lg:text-[2.8rem] lg:leading-[1.02] xl:max-w-[42rem] xl:text-[3rem] xl:leading-[1.02]"
        subtitleClassName="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base"
      >
        <div className="h-1 w-16 rounded-full bg-brand-accent" aria-hidden="true" />
      </PageHero>

      <AboutSection
        eyebrow="CINE SUNTEM"
        title="Experiență și rigoare în cadastru, intabulare și topografie"
        imageSrc="/Images/ClientsPhotos/OutsideAboutUs.jpeg"
        imageAlt="Imagine din teren folosită în pagina Despre Noi Topocond"
      />

      <StatsBand />

      <section className="bg-white py-14 sm:py-[4.75rem] lg:py-[5.25rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="VALORILE NOASTRE"
            title="De ce să colaborezi cu noi?"
            subtitle="Punem accent pe seriozitate, comunicare clară și documentații cadastrale pregătite corect, astfel încât fiecare lucrare să avanseze clar și fără complicații inutile."
          />
          <div className="mt-9 sm:mt-12">
            <IconCardGrid items={values} columns={5} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ai nevoie de servicii de cadastru, intabulare sau topografie?"
        subtitle="Spune-ne ce lucrare ai în plan, iar noi îți explicăm pașii necesari și îți propunem o soluție potrivită pentru proprietatea ta."
        iconAlwaysVisible
        className="pt-10 pb-14 sm:pt-9 sm:pb-16 lg:pt-11 lg:pb-20"
      />
    </>
  );
}
