/**
 * Date centralizate ale site-ului.
 * TOATE valorile marcate cu PLACEHOLDER trebuie înlocuite cu informațiile reale
 * primite de la client. Nu se adaugă conținut inventat.
 */

export const company = {
  name: "Topocond Cadastru",
  shortName: "TOPOCOND",
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

export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: "Acasă", to: "/" },
  { label: "Servicii", to: "/servicii" },
  { label: "Despre Noi", to: "/despre-noi" },
  { label: "Despre Cadastru", to: "/despre-cadastru" },
  { label: "Contact", to: "/contact" },
];

/** Highlight-uri din hero / bara de highlights. PLACEHOLDER pentru valori. */
export const heroHighlights = [
  { icon: "award", value: "[valoare]", label: "Experiență" },
  { icon: "fileCheck", value: "[valoare]", label: "Lucrări finalizate" },
  { icon: "clock", value: "[valoare]", label: "Răspuns rapid" },
  { icon: "shieldCheck", value: "[valoare]", label: "Autorizare ANCPI" },
] as const;

export const pageHighlights = [
  { icon: "clock", title: "Răspuns rapid", text: "[text placeholder]" },
  { icon: "shieldCheck", title: "Autorizare ANCPI", text: "[text placeholder]" },
  { icon: "fileCheck", title: "Lucrări finalizate", text: "[text placeholder]" },
  { icon: "mapPin", title: "Acoperire locală", text: "[text placeholder]" },
] as const;

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
];
