import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import {
  absoluteUrl,
  company,
  createBreadcrumbSchema,
  createWebPageSchema,
  defaultOgImagePath,
} from "@/data/site";

const title = "Politică de cookies | Topocond Cadastru";
const description =
  "Informații despre utilizarea cookie-urilor și a tehnologiilor similare pe site-ul Topocond Cadastru.";
const pageUrl = absoluteUrl("/politica-de-cookies");

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: defaultOgImagePath },
      { property: "og:image:alt", content: company.ogImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: defaultOgImagePath },
      { name: "twitter:image:alt", content: company.ogImageAlt },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(createWebPageSchema("/politica-de-cookies", title, description)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          createBreadcrumbSchema([
            { name: "Acasă", path: "/" },
            { name: "Politică de cookies", path: "/politica-de-cookies" },
          ]),
        ),
      },
    ],
  }),
  component: CookiesPolicyPage,
});

function CookiesPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Acasă", to: "/" }, { label: "Politică de cookies" }]}
        title="Politică de cookies"
        subtitle="Informații despre fișierele cookie și tehnologiile similare utilizate pe site."
        backgroundImageSrc="/Images/Herosections/ServiciiHero-Topocond.png"
        backgroundPosition="76% center"
        backgroundClassName="bg-[position:74%_center] sm:bg-[position:78%_center] lg:bg-[position:76%_center]"
        overlayClassName="bg-[linear-gradient(90deg,rgba(8,20,17,0.76)_0%,rgba(8,20,17,0.62)_34%,rgba(8,20,17,0.45)_62%,rgba(8,20,17,0.22)_100%)]"
        contentClassName="py-14 sm:py-16 lg:py-18 xl:py-20"
      >
        <div className="h-1 w-16 rounded-full bg-brand-accent" aria-hidden="true" />
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cookies"
            title="Cum folosim cookie-urile"
            subtitle="Această pagină explică ce sunt cookie-urile și cum pot fi utilizate în funcționarea site-ului."
            align="left"
          />

          <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground sm:text-[0.98rem]">
            <section>
              <h2 className="text-lg font-semibold text-brand-dark">1. Ce sunt cookie-urile</h2>
              <p className="mt-3">
                Cookie-urile sunt fișiere de mici dimensiuni stocate pe dispozitivul utilizatorului
                pentru a permite funcționarea corectă a site-ului sau pentru a reține anumite
                preferințe și informații tehnice.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                2. Ce tipuri de cookie-uri pot apărea pe acest site
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>cookie-uri tehnice sau strict necesare pentru funcționarea site-ului;</li>
                <li>cookie-uri sau tehnologii similare ale unor servicii terțe integrate de utilizator, după caz;</li>
                <li>elemente locale de browser necesare funcționării unor componente de interfață.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                3. Cookie-uri neesențiale
              </h2>
              <p className="mt-3">
                La data publicării acestei politici, site-ul nu utilizează instrumente de analiză de
                trafic sau de publicitate de tip Google Analytics, Meta Pixel ori alte tehnologii de
                marketing comportamental care să urmărească vizitatorii în scopuri publicitare.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                4. Servicii terțe care pot seta date în browser
              </h2>
              <p className="mt-3">
                Unele pagini pot integra servicii externe, precum Google Maps. În astfel de cazuri,
                furnizorul terț poate utiliza propriile cookie-uri sau tehnologii similare, conform
                politicilor sale. Aceste servicii nu sunt operate direct de {company.name}.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                5. Gestionarea cookie-urilor
              </h2>
              <p className="mt-3">
                Poți controla sau șterge cookie-urile din setările browserului tău. Blocarea
                cookie-urilor strict necesare poate afecta funcționarea normală a anumitor
                componente ale site-ului.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                6. Consimțământ
              </h2>
              <p className="mt-3">
                Dacă în viitor vor fi adăugate cookie-uri neesențiale, instrumente de analiză sau
                tehnologii de marketing care necesită consimțământ, această politică și mecanismul
                de informare de pe site vor fi actualizate corespunzător.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                7. Modificarea politicii
              </h2>
              <p className="mt-3">
                Putem actualiza această politică atunci când apar schimbări privind tehnologiile
                folosite pe site sau obligațiile legale aplicabile.
              </p>
            </section>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Vrei să discutăm despre o lucrare cadastrală?"
        subtitle="Ne poți contacta rapid prin telefon, WhatsApp sau formularul de pe site."
        className="pt-0 pb-14 sm:pb-16 lg:pb-20"
      />
    </>
  );
}
