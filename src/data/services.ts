/**
 * Sursa unică de adevăr pentru servicii.
 * Cardurile de servicii și popup-urile folosesc aceste date, fără duplicare.
 * Textele marcate [placeholder] se înlocuiesc cu informațiile clientului.
 */

export type ServiceIconName =
  | "cadastru"
  | "ridicari"
  | "consultanta"
  | "dezmembrari"
  | "trasari"
  | "planuri";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  /** Descriere scurtă folosită pe card și în header-ul popup-ului. */
  shortDescription: string;
  /** Descriere completă (popup). */
  fullDescription: string;
  icon: ServiceIconName;
  imageSrc?: string;
  /** Alt text pentru imaginea de card. */
  imageAlt: string;
  /** Bullet-uri afișate pe card. */
  bullets: string[];
  /** „Ce include serviciul?” */
  includes: string[];
  /** „Când este necesar?” */
  whenNeeded: string;
  /** „Documente necesare” */
  documents: string[];
  duration: string;
  price: string;
  coverage: string;
};

export const services: Service[] = [
  {
    slug: "cadastru-si-intabulare",
    title: "Cadastru și Intabulare",
    shortTitle: "Cadastru și Intabulare",
    shortDescription:
      "Întocmirea documentațiilor pentru înscrierea terenurilor și construcțiilor în cartea funciară.",
    fullDescription:
      "Realizăm documentații cadastrale complete pentru terenuri, apartamente, case și alte construcții, inclusiv apartamentări, relevee pentru apartamente și recepții pentru atribuirea numărului cadastral, astfel încât proprietatea ta să fie înregistrată corect și fără complicații.",
    icon: "cadastru",
    imageSrc: "/Images/Servicii/Cadastru_si_Intabulare.jpeg",
    imageAlt: "Documentație cadastrală pentru teren și construcții",
    bullets: [
      "Înregistrarea terenurilor și construcțiilor",
      "Apartamentări și relevee pentru apartamente",
      "Recepție și atribuire număr cadastral",
      "Intabulare pentru apartamente, case și terenuri",
      "Trasarea limitelor de proprietate",
      "Dezmembrări și alipiri terenuri",
      "Actualizări cadastrale",
    ],
    includes: [
      "Măsurători și identificarea exactă a proprietății",
      "Întocmirea documentației cadastrale complete",
      "Documentații pentru apartamentări și relevee apartamente",
      "Pregătirea actelor pentru intabulare",
      "Depunerea documentației conform cerințelor ANCPI",
    ],
    whenNeeded:
      "Este necesar atunci când vinzi, cumperi, intabulezi sau actualizezi datele unei proprietăți în evidențele de cadastru și carte funciară.",
    documents: [
      "Act de proprietate",
      "Carte de identitate proprietar",
      "Certificat fiscal, dacă este solicitat",
      "Documente tehnice existente, dacă sunt disponibile",
    ],
    duration: "În funcție de complexitatea proprietății",
    price: "Se stabilește după analiza documentației",
    coverage: "Botoșani și zonele limitrofe",
  },
  {
    slug: "ridicari-topografice",
    title: "Ridicări Topografice",
    shortTitle: "Ridicări Topografice",
    shortDescription:
      "Măsurători precise pentru documentații tehnice și proiecte de construcții.",
    fullDescription:
      "Executăm ridicări topografice precise pentru proiecte rezidențiale, comerciale sau urbanistice, folosind echipamente moderne și metode de lucru adaptate fiecărui teren.",
    icon: "ridicari",
    imageSrc: "/Images/Servicii/Ridicari_Topografice.jpg",
    imageAlt: "Ridicare topografică realizată pe teren cu echipamente moderne",
    bullets: [
      "Planuri topografice",
      "Planuri de situație",
      "PUZ, PUD și DTAC",
      "Trasări limite de proprietate",
      "Ridicări pentru proiecte de infrastructură",
      "Modelare teren 3D",
    ],
    includes: [
      "Măsurători topografice în teren",
      "Prelucrarea și interpretarea datelor colectate",
      "Întocmirea planurilor topografice și de situație",
      "Predarea documentației în format util pentru proiectare",
    ],
    whenNeeded:
      "Este necesar pentru proiecte de construire, urbanism, trasări, planuri de situație sau pentru orice analiză exactă a configurației terenului.",
    documents: [
      "Act de proprietate sau document care atestă folosința terenului",
      "Carte de identitate proprietar sau reprezentant",
      "Tema sau cerințele proiectului, dacă există",
      "Planuri anterioare, dacă sunt disponibile",
    ],
    duration: "Stabilită în funcție de suprafață și complexitate",
    price: "Personalizat în funcție de lucrare",
    coverage: "Botoșani și împrejurimi",
  },
  {
    slug: "consultanta-cadastrala-si-juridica",
    title: "Consultanță Cadastrală și Juridică",
    shortTitle: "Consultanță Cadastrală",
    shortDescription:
      "Consultanță și sprijin pentru întocmirea documentațiilor cadastrale.",
    fullDescription:
      "Oferim consultanță cadastrală și juridică pentru a clarifica pașii necesari, actele implicate și soluțiile potrivite fiecărei situații legate de proprietatea ta, inclusiv pentru înscrierea posesiei sau obținerea extraselor de carte funciară.",
    icon: "consultanta",
    imageSrc: "/Images/Servicii/Consultanta_Cadastrala_si_Juridica.jpg",
    imageAlt: "Consultanță cadastrală și juridică pentru documentații imobiliare",
    bullets: [
      "Întocmirea actelor cadastrale",
      "Verificarea documentației",
      "Ghidare pentru obținerea avizelor",
      "Consultanță privind înscrierea proprietăților",
      "Înscriere posesie",
      "Extrase de carte funciară",
      "Soluții personalizate pentru fiecare caz",
    ],
    includes: [
      "Analiza situației cadastrale și juridice",
      "Verificarea actelor și a documentației disponibile",
      "Recomandări clare pentru pașii următori",
      "Sprijin pentru înscrierea posesiei și obținerea extraselor necesare",
      "Sprijin în relația cu instituțiile implicate",
    ],
    whenNeeded:
      "Este utilă atunci când ai neclarități privind actele, documentația cadastrală sau procedurile necesare pentru intabulare, actualizare ori clarificarea situației proprietății.",
    documents: [
      "Acte de proprietate existente",
      "Carte de identitate",
      "Documentații cadastrale anterioare, dacă există",
      "Orice alte înscrisuri relevante pentru situația analizată",
    ],
    duration: "În funcție de complexitatea cazului",
    price: "Se comunică după evaluarea solicitării",
    coverage: "Botoșani și zonele limitrofe",
  },
  {
    slug: "dezmembrari-alipiri-terenuri",
    title: "Dezmembrări / Alipiri Terenuri",
    shortTitle: "Dezmembrări / Alipiri",
    shortDescription:
      "Servicii cadastrale pentru împărțirea sau unirea terenurilor, în funcție de situația proprietății.",
    fullDescription:
      "Realizăm documentația cadastrală necesară pentru dezmembrarea sau alipirea proprietăților, în funcție de situația juridică și tehnică a imobilului.",
    icon: "dezmembrari",
    imageSrc: "/Images/Servicii/Dezmembrari_alipire.jpg",
    imageAlt: "Documentație pentru dezmembrare și alipire terenuri",
    bullets: [
      "Dezmembrarea terenurilor",
      "Alipirea mai multor imobile",
      "Măsurători cadastrale",
      "Întocmirea documentației tehnice",
      "Actualizarea informațiilor cadastrale",
    ],
    includes: [
      "Măsurători și identificarea proprietății",
      "Pregătirea documentației cadastrale",
      "Reprezentarea noilor limite ale imobilului",
      "Pregătirea documentației pentru depunere",
    ],
    whenNeeded:
      "Atunci când dorești să împarți un teren în mai multe loturi sau să unești mai multe proprietăți într-un singur imobil.",
    documents: [
      "Act de proprietate",
      "Carte de identitate proprietar",
      "Documentația cadastrală existentă, dacă este disponibilă",
      "Extras de Carte Funciară, dacă este disponibil",
    ],
    duration: "În funcție de complexitatea lucrării",
    price: "Se stabilește după analiza documentației",
    coverage: "Botoșani și zonele limitrofe",
  },
  {
    slug: "trasari-limite-de-proprietate",
    title: "Trasări Limite de Proprietate",
    shortTitle: "Trasări Limite de Proprietate",
    shortDescription:
      "Identificarea și materializarea în teren a limitelor proprietății pe baza documentației cadastrale.",
    fullDescription:
      "Identificăm și trasăm în teren limitele proprietății pe baza informațiilor cadastrale disponibile și a măsurătorilor topografice.",
    icon: "trasari",
    imageSrc: "/Images/Servicii/Trasari_limite.jpg",
    imageAlt: "Trasare limite de proprietate pe teren",
    bullets: [
      "Identificarea limitelor proprietății",
      "Măsurători în teren",
      "Materializarea punctelor de hotar",
      "Verificarea poziției limitelor",
      "Măsurători cu echipamente topografice",
    ],
    includes: [
      "Analiza informațiilor cadastrale disponibile",
      "Identificarea proprietății în teren",
      "Măsurători topografice",
      "Materializarea punctelor de limită",
    ],
    whenNeeded:
      "Este util atunci când vrei să identifici limitele terenului înainte de împrejmuire, construcție sau alte lucrări pe proprietate.",
    documents: [
      "Act de proprietate",
      "Carte de identitate proprietar",
      "Documentația cadastrală / planul cadastral existent",
      "Extras de Carte Funciară, dacă este disponibil",
    ],
    duration: "În funcție de complexitatea lucrării",
    price: "Se stabilește după analiza documentației",
    coverage: "Botoșani și zonele limitrofe",
  },
  {
    slug: "planuri-de-situatie",
    title: "Planuri de Situație",
    shortTitle: "Planuri de Situație",
    shortDescription:
      "Realizarea planurilor de situație pe baza măsurătorilor efectuate direct în teren.",
    fullDescription:
      "Realizăm planuri de situație prin măsurători topografice, pentru reprezentarea terenului, construcțiilor și elementelor existente pe proprietate.",
    icon: "planuri",
    imageSrc: "/Images/Servicii/Planuri_de_Situatie.jpg",
    imageAlt: "Planuri de situație și documentații tehnice",
    bullets: [
      "Măsurători topografice",
      "Reprezentarea terenului",
      "Poziționarea construcțiilor existente",
      "Evidențierea elementelor relevante",
      "Întocmirea planului de situație",
    ],
    includes: [
      "Măsurători în teren",
      "Prelucrarea datelor topografice",
      "Reprezentarea proprietății și construcțiilor",
      "Întocmirea planului de situație",
    ],
    whenNeeded:
      "Poate fi necesar pentru proiectare, documentații tehnice, autorizare sau pentru obținerea unei reprezentări actualizate a proprietății.",
    documents: [
      "Act de proprietate",
      "Carte de identitate proprietar",
      "Documentația cadastrală existentă, dacă este disponibilă",
      "Alte documente tehnice relevante, dacă sunt disponibile",
    ],
    duration: "În funcție de complexitatea lucrării",
    price: "Se stabilește după analiza documentației",
    coverage: "Botoșani și zonele limitrofe",
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
