import { createFileRoute } from "@tanstack/react-router";

import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import {
  absoluteUrl,
  company,
  createBreadcrumbSchema,
  createWebPageSchema,
  defaultOgImageUrl,
} from "@/data/site";

const title = "Politică de confidențialitate | Topocond Cadastru";
const description =
  "Informații despre modul în care Topocond Cadastru prelucrează datele personale transmise prin site, telefon, email, WhatsApp și alte canale de contact.";
const pageUrl = absoluteUrl("/politica-de-confidentialitate");

export const Route = createFileRoute("/politica-de-confidentialitate")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: defaultOgImageUrl },
      { property: "og:image:alt", content: company.ogImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: defaultOgImageUrl },
      { name: "twitter:image:alt", content: company.ogImageAlt },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          createWebPageSchema("/politica-de-confidentialitate", title, description),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          createBreadcrumbSchema([
            { name: "Acasă", path: "/" },
            {
              name: "Politică de confidențialitate",
              path: "/politica-de-confidentialitate",
            },
          ]),
        ),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Acasă", to: "/" }, { label: "Politică de confidențialitate" }]}
        title="Politică de confidențialitate"
        subtitle="Transparență privind datele personale prelucrate prin intermediul site-ului Topocond Cadastru."
        backgroundImageSrc="/Images/Herosections/ContactHero-Topocond.png"
        backgroundPosition="78% center"
        backgroundClassName="bg-[position:76%_center] sm:bg-[position:80%_center] lg:bg-[position:78%_center]"
        overlayClassName="bg-[rgba(5,45,28,0.72)]"
        contentClassName="py-14 sm:py-16 lg:py-18 xl:py-20"
      >
        <div className="h-1 w-16 rounded-full bg-brand-accent" aria-hidden="true" />
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Date personale"
            title="Cum prelucrăm datele tale"
            subtitle="Această pagină explică ce date putem primi prin site și cum le folosim pentru a răspunde solicitărilor legate de serviciile de cadastru, intabulare și topografie."
            align="left"
          />

          <div className="mt-10 space-y-8 text-sm leading-7 text-muted-foreground sm:text-[0.98rem]">
            <section>
              <h2 className="text-lg font-semibold text-brand-dark">1. Operatorul datelor</h2>
              <p className="mt-3">
                Operatorul datelor cu caracter personal este {company.legalName}, care utilizează
                brandul {company.name}, cu sediul în {company.address}, telefon {company.phoneLabel},
                email {company.email}.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                2. Ce date putem colecta
              </h2>
              <p className="mt-3">
                În funcție de modul în care ne contactezi, putem prelucra nume și prenume,
                număr de telefon, adresă de email, conținutul mesajului transmis și orice alte
                informații pe care alegi să ni le comunici pentru a solicita o ofertă, informații
                sau clarificări despre servicii.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                3. Scopurile prelucrării
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>preluarea și gestionarea solicitărilor transmise prin formular, telefon, email sau WhatsApp;</li>
                <li>comunicarea cu persoanele interesate de serviciile oferite;</li>
                <li>transmiterea de informații despre pașii necesari, documente și servicii solicitate;</li>
                <li>apărarea drepturilor și intereselor legitime, dacă este necesar.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                4. Temeiul prelucrării
              </h2>
              <p className="mt-3">
                Prelucrarea datelor se realizează, după caz, pentru a răspunde unei solicitări
                formulate de tine înainte de încheierea unei colaborări, pentru executarea unor
                demersuri necesare furnizării serviciilor solicitate sau în baza interesului legitim
                de a gestiona comunicarea și solicitările primite.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                5. Cum sunt transmise datele din formular
              </h2>
              <p className="mt-3">
                Formularul de contact de pe site precompletează un mesaj care este deschis în
                aplicația WhatsApp. Înainte de trimiterea efectivă a mesajului, datele introduse de
                tine pot fi transferate către serviciul WhatsApp, conform termenilor și politicilor
                acelui furnizor.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                6. Destinatari și servicii terțe
              </h2>
              <p className="mt-3">
                În funcționarea site-ului pot fi implicate servicii terțe precum furnizorul de
                hosting, serviciile tehnice de livrare a site-ului, Google Maps pentru afișarea
                hărții și WhatsApp pentru contactul inițiat de utilizator. Aceste servicii pot
                prelucra date în conformitate cu propriile politici.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                7. Cât timp păstrăm datele
              </h2>
              <p className="mt-3">
                Datele sunt păstrate atât timp cât este necesar pentru gestionarea solicitării,
                continuarea discuțiilor privind serviciile cerute și respectarea eventualelor
                obligații legale aplicabile. Datele care nu mai sunt necesare pot fi șterse sau
                anonimizate într-un termen rezonabil.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                8. Drepturile tale
              </h2>
              <p className="mt-3">
                În condițiile prevăzute de legislația aplicabilă, poți solicita acces la date,
                rectificarea, ștergerea, restricționarea prelucrării, opoziția la prelucrare și, după
                caz, portabilitatea datelor. De asemenea, poți adresa o cerere la {company.email}.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                9. Autoritatea de supraveghere
              </h2>
              <p className="mt-3">
                Dacă apreciezi că drepturile tale nu au fost respectate, poți formula o plângere
                către Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter
                Personal.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-brand-dark">
                10. Actualizarea politicii
              </h2>
              <p className="mt-3">
                Această politică poate fi actualizată atunci când apar schimbări privind modul de
                funcționare al site-ului sau obligațiile legale aplicabile. Versiunea publicată pe
                site este cea care produce efecte.
              </p>
            </section>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ai nevoie de informații despre serviciile noastre?"
        subtitle="Ne poți contacta direct pentru detalii despre cadastru, intabulare și topografie în Botoșani."
        className="pt-0 pb-14 sm:pb-16 lg:pb-20"
      />
    </>
  );
}
