/**
 * Sursa unică de adevăr pentru servicii.
 * Cardurile de servicii și popup-urile folosesc aceste date, fără duplicare.
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
  imageCardClassName?: string;
  /** Bullet-uri afișate pe card. */
  bullets: string[];
  /** „Ce include serviciul?” */
  includes: string[];
  /** „Când este necesar?” */
  whenNeeded: string;
  /** „Documente necesare” */
  documents: string[];
  /** Notă scurtă afișată sub lista de documente, dacă este cazul. */
  documentsNote?: string;
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
      "Întocmirea documentațiilor cadastrale pentru înscrierea și actualizarea imobilelor în sistemul de cadastru și carte funciară.",
    fullDescription:
      "Realizăm documentații cadastrale complete pentru terenuri, case, apartamente și alte construcții, astfel încât imobilele să poată fi înscrise sau actualizate corect în evidențele de cadastru și carte funciară. Serviciul acoperă inclusiv înscrierea construcțiilor, apartamentări, relevee pentru apartamente și documentațiile necesare pentru recepție și atribuirea numărului cadastral, în funcție de situația fiecărui imobil.",
    icon: "cadastru",
    imageSrc: "/Images/Servicii/Cadastru_si_Intabulare.jpeg",
    imageAlt: "Documentație cadastrală pentru teren și construcții",
    bullets: [
      "Cadastru și intabulare pentru terenuri",
      "Cadastru și intabulare pentru case și alte construcții",
      "Cadastru și intabulare pentru apartamente",
      "Înscrierea construcțiilor în cartea funciară",
      "Apartamentări și relevee pentru apartamente",
      "Recepție număr cadastral",
    ],
    includes: [
      "Măsurarea și identificarea imobilului",
      "Verificarea documentelor puse la dispoziție de proprietar",
      "Întocmirea documentației necesare pentru înscrierea în cadastru și cartea funciară",
      "Depunerea documentației la OCPI Botoșani, în vederea recepției și înscrierii în cartea funciară",
      "Urmărirea documentației până la soluționare",
    ],
    whenNeeded:
      "Este necesar atunci când vinzi, cumperi, intabulezi sau actualizezi datele unei proprietăți în evidențele de cadastru și carte funciară.",
    documents: [
      "Actul de proprietate al imobilului",
      "Actele de identitate ale proprietarilor",
      "Documentația cadastrală existentă, dacă este cazul",
      "Certificatul fiscal și/sau alte documente specifice, în funcție de tipul lucrării",
    ],
    documentsNote:
      "Lista documentelor necesare poate varia în funcție de situația juridică și cadastrală a imobilului. Documentele exacte vor fi stabilite după o analiză preliminară.",
    duration: "În funcție de complexitatea proprietății",
    price: "Se stabilește după analiza documentației",
    coverage: "Botoșani și zonele limitrofe",
  },
  {
    slug: "ridicari-topografice",
    title: "Ridicări Topografice",
    shortTitle: "Ridicări Topografice",
    shortDescription:
      "Măsurători topografice pentru proiectare, autorizare și realizarea lucrărilor de construcții.",
    fullDescription:
      "Executăm ridicări topografice pentru proiecte de construcții, documentații necesare proiectării și autorizării, trasări în teren și lucrări de infrastructură, folosind echipamente moderne și metode de lucru adaptate fiecărei lucrări. Documentațiile rezultate pot fi utilizate pentru planuri topografice, planuri de situație, DTAC, PUZ, PUD și alte cerințe tehnice specifice.",
    icon: "ridicari",
    imageSrc: "/Images/ClientsPhotos/RidicariTopo.png",
    imageAlt: "Ridicare topografică realizată pe teren cu echipamente moderne",
    imageCardClassName: "object-[center_38%]",
    bullets: [
      "Ridicări topografice și planuri de situație",
      "Documentații topografice pentru proiectare",
      "Suport topografic pentru PUZ și PUD",
      "Planuri topografice necesare documentațiilor pentru autorizarea construcțiilor (DTAC)",
      "Trasarea limitelor de proprietate",
      "Trasarea construcțiilor și a elementelor proiectate",
      "Ridicări topografice pentru lucrări de infrastructură",
    ],
    includes: [
      "Efectuarea măsurătorilor topografice în teren",
      "Prelucrarea și verificarea datelor obținute din măsurători",
      "Întocmirea planurilor topografice și a planurilor de situație",
      "Pregătirea documentației topografice în funcție de scopul lucrării",
      "Predarea documentației în formatul necesar beneficiarului sau proiectantului",
    ],
    whenNeeded:
      "Este necesar pentru proiecte de construire, urbanism, trasări, planuri de situație sau pentru orice analiză exactă a configurației terenului.",
    documents: [
      "Actul de proprietate sau alte documente privind imobilul, după caz",
      "Actul de identitate al beneficiarului",
      "Certificatul de urbanism, dacă este cazul",
      "Tema de proiectare sau cerințele proiectantului, dacă există",
      "Planuri, schițe sau documentații tehnice existente, dacă sunt disponibile",
      "Alte documente, în funcție de scopul lucrării",
    ],
    documentsNote:
      "Documentele necesare pot varia în funcție de scopul ridicării topografice și de cerințele documentației pentru care aceasta este întocmită.",
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
      "Oferim consultanță cadastrală și sprijin pentru clarificarea pașilor necesari, a actelor implicate și a soluțiilor potrivite pentru fiecare situație legată de proprietate. Serviciul este util pentru intabulare, verificarea actelor, înscrierea posesiei, obținerea extraselor de carte funciară și înțelegerea procedurilor necesare înainte de întocmirea documentațiilor cadastrale.",
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
      "Servicii cadastrale pentru împărțirea unui imobil în două sau mai multe imobile distincte ori pentru unirea mai multor imobile într-un singur imobil.",
    fullDescription:
      "Întocmim documentația cadastrală necesară pentru dezmembrarea unui teren în două sau mai multe loturi ori pentru alipirea mai multor imobile într-un singur corp de proprietate. Serviciul este realizat în funcție de situația juridică și tehnică a imobilului și include pașii necesari pentru reprezentarea corectă a noilor limite și pentru depunerea documentației în vederea actualizării evidențelor cadastrale.",
    icon: "dezmembrari",
    imageSrc: "/Images/Servicii/Dezmembrari_alipire.jpg",
    imageAlt: "Documentație pentru dezmembrare și alipire terenuri",
    bullets: [
      "Dezmembrarea imobilelor în două sau mai multe loturi",
      "Alipirea a două sau mai multe imobile",
      "Efectuarea măsurătorilor cadastrale necesare",
      "Întocmirea documentației cadastrale de dezmembrare sau alipire",
      "Depunerea documentației la OCPI Botoșani în vederea recepției",
      "Actualizarea informațiilor cadastrale, dacă situația imobilului o impune",
    ],
    includes: [
      "Măsurarea și identificarea imobilului/imobilelor",
      "Stabilirea și reprezentarea noilor limite, în cazul dezmembrării",
      "Întocmirea documentației cadastrale de dezmembrare sau alipire",
      "Întocmirea planurilor și documentelor tehnice necesare",
      "Depunerea documentației la OCPI Botoșani în vederea recepției",
      "Urmărirea documentației până la soluționare",
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
      "Identificarea și materializarea în teren a limitelor unui imobil, pe baza documentației cadastrale și a coordonatelor existente.",
    fullDescription:
      "Identificăm și materializăm în teren limitele unei proprietăți pe baza documentației cadastrale existente, a coordonatelor disponibile și a măsurătorilor topografice efectuate la fața locului. Serviciul este util atunci când trebuie clarificate limitele terenului înainte de împrejmuire, construcție, vânzare sau alte intervenții care necesită o delimitare corectă a proprietății.",
    icon: "trasari",
    imageSrc: "/Images/Servicii/Trasari_limite.jpg",
    imageAlt: "Trasare limite de proprietate pe teren",
    bullets: [
      "Identificarea imobilului pe baza documentației cadastrale",
      "Verificarea și trasarea în teren a punctelor de contur",
      "Materializarea punctelor de hotar",
      "Verificarea poziției limitelor proprietății",
      "Efectuarea măsurătorilor cu echipamente topografice de precizie",
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
    title: "Actualizare Informații Cadastrale",
    shortTitle: "Actualizare Informații Cadastrale",
    shortDescription:
      "Actualizarea datelor tehnice ale unui imobil atunci când situația existentă în teren sau informațiile cadastrale necesită modificări.",
    fullDescription:
      "Realizăm documentații cadastrale pentru actualizarea datelor tehnice ale imobilului atunci când apar modificări privind suprafața, amplasamentul, construcțiile sau alte informații relevante din evidențele cadastrale. Serviciul acoperă înscrierea, extinderea ori radierea construcțiilor, modificarea suprafeței, actualizarea categoriei de folosință sau corectarea informațiilor necesare pentru corelarea actelor cu situația reală din teren.",
    icon: "planuri",
    imageSrc: "/Images/Servicii/Planuri_de_Situatie.jpg",
    imageAlt: "Actualizare informații cadastrale și documentații tehnice",
    bullets: [
      "Înscriere / Extindere / Radiere Construcții",
      "Modificare Suprafață Imobil",
      "Repoziționare Imobil",
    ],
    includes: [
      "Actualizarea informațiilor tehnice ale imobilului",
      "Actualizarea categoriei de folosință/destinației, după caz",
      "Actualizarea adresei imobilului, după caz",
      "Corectarea sau completarea informațiilor cadastrale",
      "Înscrierea construcțiilor",
      "Actualizarea construcțiilor în urma modificării sau extinderii",
      "Radierea construcțiilor desființate",
      "Întocmirea și depunerea documentației cadastrale la OCPI Botoșani",
    ],
    whenNeeded:
      "Este necesar atunci când datele tehnice sau cadastrale ale imobilului nu mai corespund situației reale din teren ori când sunt necesare actualizări privind suprafața, construcțiile, amplasamentul sau categoria de folosință.",
    documents: [
      "Actul de proprietate al imobilului",
      "Actele de identitate ale proprietarilor",
      "Documentația cadastrală existentă, dacă este disponibilă",
      "Certificat fiscal, după caz",
      "Certificat de urbanism, autorizație de construire/desființare și alte acte administrative, dacă sunt necesare în funcție de tipul actualizării",
      "Acte sau documente care justifică modificarea solicitată, după caz",
      "Alte documente specifice situației cadastrale și juridice a imobilului",
    ],
    documentsNote:
      "Documentele necesare pot diferi în funcție de tipul actualizării cadastrale (modificare suprafață, actualizare construcție, repoziționare, modificare categorie de folosință etc.). Lista exactă a documentelor se stabilește după analizarea situației imobilului.",
    duration: "În funcție de complexitatea lucrării",
    price: "Se stabilește după analiza documentației",
    coverage: "Botoșani și zonele limitrofe",
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
