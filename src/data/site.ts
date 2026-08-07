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

/** Statistici pagina Despre Noi. PLACEHOLDER — de completat de client. */
export const stats = [
  { value: "[nr]", label: "Ani de experiență", text: "[text placeholder]" },
  { value: "[nr]", label: "Lucrări finalizate", text: "[text placeholder]" },
  { value: "[%]", label: "Clienți mulțumiți", text: "[text placeholder]" },
  { value: "[zonă]", label: "Acoperire locală", text: "[text placeholder]" },
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
  { icon: "target", title: "Profesionalism", text: "[text placeholder]" },
  { icon: "scale", title: "Corectitudine", text: "[text placeholder]" },
  { icon: "timer", title: "Promptitudine", text: "[text placeholder]" },
  { icon: "users", title: "Parteneriat", text: "[text placeholder]" },
  { icon: "star", title: "Calitate", text: "[text placeholder]" },
] as const;

/** Pași de colaborare (pagina Servicii). */
export const workflowSteps = [
  { title: "Ne contactezi", text: "Telefonic, pe WhatsApp sau prin formular." },
  { title: "Analizăm solicitarea", text: "Ne oferi detaliile și documentele disponibile." },
  {
    title: "Realizăm măsurătorile",
    text: "Ne deplasăm la locație pentru măsurătorile necesare.",
  },
  {
    title: "Pregătim documentația",
    text: "Întocmim documentația necesară pentru serviciul solicitat.",
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
  "[bullet placeholder]",
  "[bullet placeholder]",
  "[bullet placeholder]",
  "[bullet placeholder]",
] as const;

/** Linkuri utile în footer. */
export const usefulLinks: NavItem[] = [
  { label: "Despre Cadastru", to: "/despre-cadastru" },
  { label: "Despre Noi", to: "/despre-noi" },
  { label: "Servicii", to: "/servicii" },
  { label: "Contact", to: "/contact" },
];
