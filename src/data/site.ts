/**
 * Date centralizate ale site-ului.
 * Se folosesc doar informațiile reale confirmate pentru business și contact.
 */

export const company = {
  name: "Topocond Cadastru",
  legalName: "TOPOCOND CADASTRU SRL",
  shortName: "TOPOCOND",
  siteUrl: "https://intabularibotosani.ro",
  ogImagePath: "/og-image-topocond-v2.png",
  ogImageAlt:
    "Identitate vizuală Topocond Cadastru pentru servicii de cadastru, intabulare și topografie în Botoșani",
  mapLabel: "Topocond Cadastru",
  phoneLabel: "0754 827 623",
  phoneHref: "tel:0754827623",
  whatsappHref: "https://wa.me/40754827623",
  facebookHref: "https://www.facebook.com/topocondcadastru",
  instagramHref: "https://www.instagram.com/topocond_cadastru/",
  email: "claudiamarina30@gmail.com",
  address: "Calea Națională nr. 71, Botoșani",
  addressLines: ["Calea Națională nr. 71", "Botoșani"],
  mapsUrl: "https://maps.app.goo.gl/n2UdJ9byNsAGsMmn7",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d766661.6886921142!2d26.081230344220884!3d47.848995690968046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734ebceb27d1217%3A0xdeda8395c7344954!2sTopocond%20Cadastru!5e1!3m2!1sro!2sro!4v1786099072349!5m2!1sro!2sro",
  openingHours: "Luni – Vineri: 09:00 – 16:30",
  schedule: "Luni – Vineri: 09:00 – 16:30",
  tagline:
    "Servicii complete de cadastru, intabulare și topografie în județul Botoșani și zonele limitrofe.",
} as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, company.siteUrl).toString();
}

export const defaultOgImagePath = company.ogImagePath;
export const defaultOgImageUrl = absoluteUrl(company.ogImagePath);

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createLocalBusinessSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#organization"),
    name: company.name,
    legalName: company.legalName,
    alternateName: company.shortName,
    url: company.siteUrl,
    image: defaultOgImageUrl,
    logo: absoluteUrl("/Images/Logo/LogoNew-transparent.png"),
    description,
    telephone: company.phoneLabel,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.addressLines[0],
      addressLocality: company.addressLines[1],
      addressCountry: "RO",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Județul Botoșani",
      },
      {
        "@type": "City",
        name: "Botoșani",
      },
    ],
    sameAs: [company.facebookHref, company.instagramHref],
    hasMap: company.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "09:00",
        closes: "16:30",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phoneLabel,
        email: company.email,
        contactType: "customer service",
        areaServed: "RO",
        availableLanguage: ["ro"],
      },
    ],
  };
}

export function createWebPageSchema(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "ro-RO",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${absoluteUrl("/")}#website`,
      url: company.siteUrl,
      name: company.name,
    },
    about: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: "Acasă", to: "/" },
  { label: "Servicii", to: "/servicii" },
  { label: "Despre Noi", to: "/despre-noi" },
  { label: "Despre Cadastru", to: "/despre-cadastru" },
  { label: "Contact", to: "/contact" },
];

/** Statistici pagina Despre Noi. */
export const stats = [
  { value: "2+", label: "Ani de experiență", text: "Experiență practică în lucrări cadastrale și topografice." },
  { value: "200+", label: "Lucrări finalizate", text: "Proiecte gestionate atent pentru proprietăți rezidențiale și terenuri." },
  { value: "100%", label: "Clienți mulțumiți", text: "Comunicare clară, documentații corecte și respectarea termenelor." },
  { value: "Botoșani", label: "Acoperire locală", text: "Servicii oferite în municipiu, județ și zonele apropiate." },
] as const;

/** Avantaje (Home). */
export const advantages = [
  {
    icon: "badgeCheck",
    title: "Expertiză certificată",
    text: "Specialiști autorizați ANCPI, cu experiență și pregătire continuă.",
  },
  {
    icon: "gauge",
    title: "Servicii rapide",
    text: "Respectăm termenele agreate și răspundem prompt solicitărilor.",
  },
  {
    icon: "handshake",
    title: "Calitate garantată",
    text: "Documentații corecte, verificate și conforme legislației în vigoare.",
  },
  {
    icon: "headset",
    title: "Suport permanent",
    text: "Te ținem la curent în fiecare etapă și îți oferim suport chiar și după finalizare.",
  },
] as const;

/** Valori (Despre Noi). */
export const values = [
  {
    icon: "target",
    title: "Profesionalism",
    text: "Tratăm fiecare lucrare de cadastru și topografie cu rigoare tehnică, atenție la detalii și responsabilitate.",
  },
  {
    icon: "scale",
    title: "Corectitudine",
    text: "Explicăm clar pașii, costurile și actele necesare pentru intabulare și documentații cadastrale.",
  },
  {
    icon: "timer",
    title: "Promptitudine",
    text: "Răspundem rapid solicitărilor și urmărim ca fiecare etapă să avanseze eficient, fără blocaje inutile.",
  },
  {
    icon: "users",
    title: "Parteneriat",
    text: "Construim relații de încredere și tratăm fiecare client cu seriozitate, respect și atenție reală la contextul lucrării.",
  },
  {
    icon: "star",
    title: "Calitate",
    text: "Livrăm documentații cadastrale bine pregătite, conforme și susținute de măsurători precise.",
  },
] as const;

/** Pași de colaborare (pagina Servicii). */
export const workflowSteps = [
  {
    title: "Discuție inițială",
    text: "Înțelegem nevoile tale și tipul de proprietate pentru a-ți oferi cea mai bună soluție.",
  },
  {
    title: "Măsurători și documentare",
    text: "Efectuăm măsurători în teren și adunăm toate informațiile necesare pentru proiectul tău.",
  },
  {
    title: "Întocmire documentații",
    text: "Pregătim documentațiile cadastrale și topografice conform cerințelor legale.",
  },
  {
    title: "Depunere și soluționare",
    text: "Ne ocupăm de depunere la ANCPI și urmărim dosarul până la finalizare.",
  },
] as const;

/** Recenzii parafrazate după feedback public. */
export const testimonials = [
  {
    rating: 5,
    text: "Colaborarea pentru documentația cadastrală a mers foarte bine, iar echipa s-a remarcat prin seriozitate, profesionalism și reacții rapide pe tot parcursul lucrării.",
    author: "Ancuța Iannis-Valentin",
    city: "Botoșani",
  },
  {
    rating: 5,
    text: "Am avut parte de servicii bine făcute, comunicare clară și o documentație pregătită fără dificultăți, motiv pentru care recomand echipa cu încredere.",
    author: "Paul Sufaru",
    city: "Botoșani",
  },
  {
    rating: 5,
    text: "Experiența a fost una foarte bună, cu o echipă atentă, promptă și profesionistă de la începutul colaborării până la final.",
    author: "Carmen Bucătariu",
    city: "Botoșani",
  },
] as const;

/** Bullet-uri secțiunea „Despre companie” / „Cine suntem”. */
export const aboutBullets = [
  "Specialiști autorizați pentru servicii de cadastru, intabulare și topografie",
  "Măsurători precise și documentații cadastrale conforme cu cerințele ANCPI",
  "Comunicare clară și sprijin pe tot parcursul lucrării",
  "Respect pentru termen, proprietate și particularitățile fiecărui proiect",
] as const;

export const aboutParagraphs = [
  "Topocond Cadastru este o echipă specializată în servicii de cadastru, intabulare și topografie în Botoșani, care lucrează pentru proprietari, investitori și companii ce au nevoie de servicii clare și bine organizate.",
  "Abordăm fiecare lucrare cu precizie și claritate, de la măsurători și verificări în teren până la pregătirea documentației necesare pentru depunere.",
  "Folosim echipamente moderne și o abordare profesionistă, astfel încât fiecare client să primească explicații clare, documentații cadastrale complete și un parcurs de lucru predictibil.",
] as const;

export const aboutAuthorization = {
  title: "Autorizați ANCPI",
  text: "Lucrări realizate responsabil, cu atenție la conformitate și la cerințele fiecărui proiect.",
} as const;

/** Linkuri utile în footer. */
export const usefulLinks: NavItem[] = [
  { label: "Despre Cadastru", to: "/despre-cadastru" },
  { label: "Despre Noi", to: "/despre-noi" },
  { label: "Servicii", to: "/servicii" },
  { label: "Contact", to: "/contact" },
  { label: "Politică de confidențialitate", to: "/politica-de-confidentialitate" },
  { label: "Politică de cookies", to: "/politica-de-cookies" },
];
