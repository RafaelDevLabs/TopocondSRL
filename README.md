# Pixel Perfect Builder

Vreau să construiești un website complet folosind imaginile pe care le voi atașa ca referință.

IMPORTANT: imaginile reprezintă mockup-ul aprobat de client. Acesta NU este un punct de plecare pentru un design nou, ci trebuie reprodus cât mai fidel.

Reguli generale

 NU modifica structura website-ului.

 NU modifica ordinea secțiunilor.

 NU schimba paleta de culori.

 NU schimba stilul general.

 NU simplifica designul.

 NU adăuga secțiuni noi.

 NU elimina secțiuni existente.

 Respectă spacing-ul și stilul premium din mockup.

 Folosește animații discrete.

 Website-ul trebuie să fie responsive pentru Desktop, Tablet și Mobile.

Stack

 React

 TypeScript

 Tailwind CSS

 shadcn/ui

 Lucide Icons

Folosește componente reutilizabile.

Pagini

Construiește următoarele pagini:

 Home

 Servicii

 Despre Noi

 Contact

Navbar

Navbar-ul trebuie să fie identic cu mockup-ul.

Include:

 Logo

 Acasă

 Servicii

 Despre Noi

 Despre Cadastru

 Contact

În partea dreaptă:

 buton telefon

Navbar sticky.

Homepage

Recreează homepage-ul identic.

Include:

Hero

 imagine mare background

 overlay

 titlu

 subtitlu

 CTA principal

 CTA WhatsApp

Highlights

Carduri cu:

 experiență

 autorizare ANCPI

 răspuns rapid

 lucrări realizate

Servicii principale

Cardurile trebuie reproduse identic.

Fiecare card conține:

 imagine

 icon

 titlu

 descriere scurtă

 buton "Detalii serviciu"

Despre companie

Secțiune cu:

 imagine

 descriere

 bullet points

 CTA

Avantaje

Carduri cu icon.

Recenzii

Carduri pentru testimoniale.

Momentan folosește placeholder.

CTA final

Banner verde exact ca în mockup.

Pagina Servicii

Trebuie reprodusă fidel.

Include:

 Hero

 highlights

 grid servicii

 workflow

 CTA

 testimoniale

 footer

Card servicii

Construiește un component reutilizabil.

Props:

 imagine

 icon

 titlu

 descriere

 popupContent

Popup servicii

Construiește un Dialog reutilizabil folosind shadcn.

Popup-ul trebuie să arate identic cu mockup-ul.

Structură:

 icon

 titlu

 descriere

Secțiunea:

Ce include serviciul

listă cu icon check

Când este necesar

text

Documente necesare

listă

Durată

card

Preț

card

Zonă deservită

card

Jos:

două CTA

 Solicită ofertă

 WhatsApp

Momentan folosește placeholder pentru toate informațiile.

NU inventa conținut.

Pagina Despre Noi

Recreează designul.

Include:

 Hero

 imagine

 descriere

 statistici

 valori

 CTA

 Footer

Toate statisticile trebuie să fie placeholder până primesc informațiile clientului.

Pagina Contact

Construiește:

 formular

 informații contact

 telefon

 email

 program

 hartă (placeholder)

Footer

Footer identic.

Include:

 logo

 descriere

 servicii

 linkuri utile

 contact

 social media

SEO

Pregătește structura pentru SEO.

Folosește:

 semantic HTML

 H1 unic

 heading hierarchy

 alt pentru imagini

 metadata

 Open Graph

 robots

 sitemap

 schema placeholders

Accesibilitate

Respectă:

 contrast

 focus states

 keyboard navigation

 aria labels

Responsive

Desktop

Tablet

Mobile

Trebuie să arate foarte bine pe toate dimensiunile.

Cod

 componente reutilizabile

 fără cod duplicat

 structură clară

 naming consistent

 TypeScript strict

 fără TODO-uri inutile

IMPORTANT

Nu inventa:

 texte

 statistici

 recenzii

 documente

 descrieri servicii

 prețuri

Folosește placeholder acolo unde lipsesc informațiile.

Foarte important

După ce analizezi imaginile atașate:

NU începe implementarea imediat.

Mai întâi:

 analizează toate imaginile;

 explică-mi structura pe care ai înțeles-o;

 spune-mi dacă există informații lipsă;

 prezintă planul de implementare;

 doar după aprobarea mea începe dezvoltarea.
Obiectivul este ca rezultatul final să fie cât mai apropiat de mockup-ul furnizat, nu o reinterpretare a acestuia. Dacă există diferențe între implementare și mockup, mockup-ul are întotdeauna prioritate.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a2690637-4d98-4a1a-8daf-75e00390cbd7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
