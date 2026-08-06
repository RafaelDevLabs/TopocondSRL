/**
 * Sursa unică de adevăr pentru servicii.
 * Cardurile de servicii ȘI popup-urile folosesc aceste date — fără duplicare.
 * Textele marcate [placeholder] se înlocuiesc cu informațiile clientului.
 */

export type ServiceIconName =
  "cadastru" | "ridicari" | "consultanta" | "dezmembrari" | "trasari" | "planuri";

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
  /** Alt text pentru imaginea de card (imaginea reală urmează să fie livrată). */
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

const placeholderList = (n: number) => Array.from({ length: n }, () => "[placeholder]");

export const services: Service[] = [
  {
    slug: "cadastru-si-intabulare",
    title: "Cadastru și Intabulare",
    shortTitle: "Cadastru și Intabulare",
    shortDescription:
      "Întocmirea documentațiilor pentru înscrierea terenurilor și construcțiilor în cartea funciară.",
    fullDescription:
      "Realizăm documentații cadastrale complete pentru terenuri, apartamente, case și alte construcții, astfel încât proprietatea ta să fie înregistrată corect și fără complicații.",
    icon: "cadastru",
    imageSrc: "/Images/Servicii/Cadastru_si_Intabulare.jpeg",
    imageAlt: "Documentație cadastrală pentru teren și construcții",
    bullets: [
      "Înregistrarea terenurilor și construcțiilor",
      "Obținerea Extrasului de Carte Funciară",
      "Intabulare pentru apartamente, case și terenuri",
      "Trasarea limitelor de proprietate",
      "Dezmembrări și alipiri terenuri",
      "Actualizări cadastrale",
    ],
    includes: [
      "Măsurători și identificarea exactă a proprietății",
      "Întocmirea documentației cadastrale complete",
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
    shortDescription: "Măsurători precise pentru documentații tehnice și proiecte de construcții.",
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
    shortDescription: "Consultanță și sprijin pentru întocmirea documentațiilor cadastrale.",
    fullDescription:
      "Oferim consultanță cadastrală și juridică pentru a clarifica pașii necesari, actele implicate și soluțiile potrivite fiecărei situații legate de proprietatea ta.",
    icon: "consultanta",
    imageSrc: "/Images/Servicii/Consultanta_Cadastrala_si_Juridica.jpg",
    imageAlt: "Consultanță cadastrală și juridică pentru documentații imobiliare",
    bullets: [
      "Întocmirea actelor cadastrale",
      "Verificarea documentației",
      "Ghidare pentru obținerea avizelor",
      "Consultanță privind înscrierea proprietăților",
      "Soluții personalizate pentru fiecare caz",
    ],
    includes: [
      "Analiza situației cadastrale și juridice",
      "Verificarea actelor și a documentației disponibile",
      "Recomandări clare pentru pașii următori",
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
    shortDescription: "[descriere scurtă placeholder]",
    fullDescription: "[descriere completă placeholder]",
    icon: "dezmembrari",
    imageSrc: "/Images/Servicii/Cadastru_si_Intabulare.jpeg",
    imageAlt: "Documentație pentru dezmembrare și alipire terenuri",
    bullets: placeholderList(4),
    includes: placeholderList(4),
    whenNeeded: "[text placeholder]",
    documents: placeholderList(4),
    duration: "[durată placeholder]",
    price: "[preț placeholder]",
    coverage: "[zonă placeholder]",
  },
  {
    slug: "trasari-limite-de-proprietate",
    title: "Trasări Limite de Proprietate",
    shortTitle: "Trasări Limite de Proprietate",
    shortDescription: "[descriere scurtă placeholder]",
    fullDescription: "[descriere completă placeholder]",
    icon: "trasari",
    imageSrc: "/Images/Servicii/Ridicari_Topografice.jpg",
    imageAlt: "Trasare limite de proprietate pe teren",
    bullets: placeholderList(4),
    includes: placeholderList(4),
    whenNeeded: "[text placeholder]",
    documents: placeholderList(4),
    duration: "[durată placeholder]",
    price: "[preț placeholder]",
    coverage: "[zonă placeholder]",
  },
  {
    slug: "planuri-de-situatie",
    title: "Planuri de Situație",
    shortTitle: "Planuri de Situație",
    shortDescription: "[descriere scurtă placeholder]",
    fullDescription: "[descriere completă placeholder]",
    icon: "planuri",
    imageSrc: "/Images/Servicii/Consultanta_Cadastrala_si_Juridica.jpg",
    imageAlt: "Planuri de situație și documentații tehnice",
    bullets: placeholderList(4),
    includes: placeholderList(4),
    whenNeeded: "[text placeholder]",
    documents: placeholderList(4),
    duration: "[durată placeholder]",
    price: "[preț placeholder]",
    coverage: "[zonă placeholder]",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
