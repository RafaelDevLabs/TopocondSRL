/**
 * Sursa unică de adevăr pentru servicii.
 * Cardurile de servicii ȘI popup-urile folosesc aceste date — fără duplicare.
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
    shortDescription: "[descriere scurtă placeholder]",
    fullDescription: "[descriere completă placeholder]",
    icon: "cadastru",
    imageAlt: "Imagine placeholder pentru serviciul de cadastru și intabulare",
    bullets: placeholderList(4),
    includes: placeholderList(4),
    whenNeeded: "[text placeholder]",
    documents: placeholderList(4),
    duration: "[durată placeholder]",
    price: "[preț placeholder]",
    coverage: "[zonă placeholder]",
  },
  {
    slug: "ridicari-topografice",
    title: "Ridicări Topografice",
    shortTitle: "Ridicări Topografice",
    shortDescription: "[descriere scurtă placeholder]",
    fullDescription: "[descriere completă placeholder]",
    icon: "ridicari",
    imageAlt: "Imagine placeholder pentru serviciul de ridicări topografice",
    bullets: placeholderList(4),
    includes: placeholderList(4),
    whenNeeded: "[text placeholder]",
    documents: placeholderList(4),
    duration: "[durată placeholder]",
    price: "[preț placeholder]",
    coverage: "[zonă placeholder]",
  },
  {
    slug: "consultanta-cadastrala-si-juridica",
    title: "Consultanță Cadastrală și Juridică",
    shortTitle: "Consultanță Cadastrală",
    shortDescription: "[descriere scurtă placeholder]",
    fullDescription: "[descriere completă placeholder]",
    icon: "consultanta",
    imageAlt: "Imagine placeholder pentru serviciul de consultanță cadastrală și juridică",
    bullets: placeholderList(4),
    includes: placeholderList(4),
    whenNeeded: "[text placeholder]",
    documents: placeholderList(4),
    duration: "[durată placeholder]",
    price: "[preț placeholder]",
    coverage: "[zonă placeholder]",
  },
  {
    slug: "dezmembrari-alipiri-terenuri",
    title: "Dezmembrări / Alipiri Terenuri",
    shortTitle: "Dezmembrări / Alipiri",
    shortDescription: "[descriere scurtă placeholder]",
    fullDescription: "[descriere completă placeholder]",
    icon: "dezmembrari",
    imageAlt: "Imagine placeholder pentru serviciul de dezmembrări și alipiri terenuri",
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
    imageAlt: "Imagine placeholder pentru serviciul de trasări limite de proprietate",
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
    imageAlt: "Imagine placeholder pentru serviciul de planuri de situație",
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
