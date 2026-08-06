# Topocond Cadastru — website după mockup

## Structura pe care am înțeles-o din imagini

**Identitate vizuală:** verde închis (brand) + verde accent pentru highlight în titluri, fundal alb și secțiuni gri foarte deschis, carduri albe cu border subtil și radius mediu, footer verde foarte închis. Bannere CTA verzi full-width. Tipografie sans-serif, titluri bold, eyebrow-uri mici uppercase verzi ("SERVICIILE NOASTRE", "VALORILE NOASTRE", "DE CE SĂ ALEGI").

**Navbar (sticky, identic pe toate paginile):** logo hexagonal stânga, meniu centrat (Acasă, Servicii cu dropdown, Despre Noi, Despre Cadastru, Contact), buton verde outline/solid cu icon telefon + număr în dreapta. Pe mobil: hamburger + drawer.

**Home (Fig. 1)**
1. Hero cu imagine peisaj, overlay întunecat, titlu pe 3 rânduri (ultimul rând verde accent), subtitlu, CTA principal verde + CTA telefon outline; în dreapta 4 mini-statistici cu icon (experiență, lucrări finalizate, răspuns rapid, autorizare ANCPI).
2. Card alb suprapus pe hero: bară cu 6 servicii, fiecare icon + titlu scurt.
3. Despre Topocond: imagine stânga (cu badge flotant), text dreapta + 4 bullet-uri cu check verde + CTA "Află mai multe despre noi".
4. Servicii — eyebrow + titlu + subtitlu, grid 3 carduri (imagine, titlu, 4 bullet-uri, link "Vezi detalii").
5. Avantaje — 4 carduri mici cu icon în pătrat.
6. Testimoniale — 3 carduri cu 5 stele, text, nume + localitate.
7. Banner CTA verde: icon + titlu pe 2 rânduri + subtitlu, butoane WhatsApp și telefon.
8. Footer verde închis: logo + descriere + social, coloană Servicii, coloană Informații utile, coloană Contact; bară copyright jos.

**Servicii (Fig. 2)**
Hero cu breadcrumb + titlu + subtitlu, bară highlights cu 4 itemi, eyebrow + titlu, grid 6 carduri servicii (imagine, titlu, bullet-uri, "Detalii serviciu" → deschide popup), secțiune "Cum colaborăm?" cu 4 pași pe o linie orizontală numerotată, banner CTA verde, testimoniale, footer.

**Popup serviciu (Fig. 3)** — Dialog shadcn, header cu icon + titlu + descriere scurtă, "Ce include serviciul?" (listă cu check verde), două coloane: "Când e necesar?" (text) și "Documente necesare" (listă cu check), trei carduri mici: Durată / Preț / Zonă deservită, footer cu CTA verde "Solicită ofertă pentru acest serviciu" + buton WhatsApp outline.

**Despre Noi (Fig. 4)**
Hero cu breadcrumb + titlu + subtitlu, secțiune "CINE SUNTEM" (imagine stânga cu badge autorizare, text dreapta + 5 bullet-uri cu check), bandă statistici 4 coloane (ani experiență, lucrări finalizate, clienți mulțumiți, acoperire), eyebrow "VALORILE NOASTRE" + titlu + grid 5 carduri cu icon (profesionalism, corectitudine, promptitudine, parteneriat, calitate), banner CTA verde, footer.

**Contact** — nu există mockup; o construiesc în exact același limbaj vizual: hero identic celorlalte pagini, formular (nume, telefon, email, serviciu, mesaj) + card informații (telefon, email, adresă, program), hartă placeholder, banner CTA, footer.

## Informații lipsă (voi folosi placeholder, fără conținut inventat)
- Logo real (folosesc un placeholder hexagonal cu textul TOPOCOND).
- Textele complete ale serviciilor, documente necesare, durată, preț, zonă — placeholder în popup-uri.
- Statistici reale (ani, lucrări, clienți) — placeholder.
- Recenzii reale — placeholder.
- Email, adresă exactă, program, link WhatsApp, coordonate hartă.
- Pagina "Despre Cadastru" apare în navbar dar nu e în lista de pagini cerută: o creez ca pagină schelet (hero + secțiuni placeholder) ca să nu existe link mort. Spune-mi dacă preferi altfel.
- Imaginile din mockup nu sunt livrate ca fișiere; generez imagini asemănătoare (peisaj colinar, topograf pe teren, teodolit) pentru hero/carduri, ușor de înlocuit ulterior.

## Implementare tehnică
- TanStack Start, rute: `/` (index), `/servicii`, `/despre-noi`, `/despre-cadastru`, `/contact`.
- Design tokens noi în `src/styles.css` (oklch): brand green, accent green, surface gri, footer dark, radius, umbre carduri. Zero culori hardcodate în componente.
- Componente reutilizabile în `src/components/`: `Navbar`, `Footer`, `PageHero`, `SectionHeading` (eyebrow+titlu+subtitlu), `HighlightBar`, `ServiceCard` (props: image, icon, title, description, bullets, popupContent), `ServiceDialog`, `StatsBand`, `ValueCard`, `TestimonialCard`, `CtaBanner`, `WorkflowSteps`, `ContactForm`.
- Date centralizate în `src/data/` (services, values, testimonials, stats, nav) — un singur loc de editat când vin textele clientului.
- Animații discrete: fade/slide-in la scroll (Intersection Observer sau tailwind + `tw-animate-css`), hover subtil pe carduri/butoane.
- Responsive: grid-uri 3→2→1, navbar drawer pe mobil, hero cu highlights stivuite pe mobil, reguli grid+`min-w-0`+`shrink-0` pentru rândurile mixte.
- SEO: `head()` per rută cu title/description/og/twitter unice, H1 unic pe pagină, HTML semantic, alt pe imagini, JSON-LD placeholder (LocalBusiness/Service/Breadcrumb), `public/robots.txt`, `public/sitemap.xml`.
- Accesibilitate: focus-visible ring pe tokens, aria-label pe iconuri/butoane, dialog shadcn cu focus trap, contrast verificat.
- Fără backend în acest pas: formularul de contact validează cu react-hook-form + zod și afișează confirmare (sonner). Spune-mi dacă vrei trimitere reală pe email — atunci activez Lovable Cloud într-un pas următor.
