import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { Reveal } from "@/components/common/Reveal";
import { ScrollToTopLink } from "@/components/common/ScrollToTopLink";
import { Button } from "@/components/ui/button";
import { aboutAuthorization, aboutBullets, aboutParagraphs, company } from "@/data/site";

type AboutSectionProps = {
  eyebrow?: string;
  title: string;
  /** Afișează CTA-ul „Află mai multe despre noi” (doar pe Home). */
  withCta?: boolean;
  variant?: "default" | "home";
  imageSrc?: string;
  imageAlt?: string;
};

/** Secțiunea despre companie: imagine + descriere + bullet points (+ CTA). */
export function AboutSection({
  eyebrow,
  title,
  withCta = false,
  variant = "default",
  imageSrc = "/Images/About/Topocond-about.jpg",
  imageAlt = "Specialist Topocond efectuând măsurători pentru documentații cadastrale în Botoșani",
}: AboutSectionProps) {
  const isHomeVariant = variant === "home";

  if (isHomeVariant) {
    const homeBullets = [
      "Echipamente moderne și precise",
      "Experiență vastă în domeniu",
      "Comunicare transparentă",
      "Prețuri corecte și competitive",
    ] as const;

    return (
      <section className="bg-white pt-16 pb-14 sm:pt-[4.75rem] sm:pb-[4.5rem] lg:pt-[5.25rem] lg:pb-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[minmax(0,1.07fr)_minmax(0,1fr)] md:gap-14 lg:gap-[4.5rem] lg:px-8">
          <Reveal className="relative">
            <div className="relative h-[540px] overflow-hidden rounded-2xl">
              <img
                src="/Images/About/Topocond-about.jpg"
                alt="Echipa Topocond realizând măsurători pentru servicii de cadastru și topografie în Botoșani"
                className="h-full w-full object-cover object-[center_30%]"
                loading="lazy"
              />
            </div>
            <div className="absolute right-4 -bottom-1 left-4 rounded-[14px] border border-border/70 bg-white px-5 py-4 shadow-[0_22px_48px_rgba(0,0,0,.18)] sm:right-auto sm:-bottom-2 sm:left-5 sm:max-w-[270px] sm:px-5 sm:py-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-snug font-semibold text-brand-dark sm:text-[0.95rem]">
                  Peste 200 de clienți
                  <br />
                  au avut încredere în noi
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="self-center">
            {eyebrow && (
              <p className="text-xs font-semibold tracking-[0.22em] text-brand-accent uppercase">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-3 text-2xl font-bold text-brand-dark sm:text-3xl lg:text-[2.45rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-[520px] text-sm leading-[1.95] text-muted-foreground sm:text-[0.95rem]">
              Suntem o echipă de specialiști autorizați ANCPI care oferă servicii de cadastru,
              intabulare și topografie în Botoșani, pentru proprietăți rezidențiale, terenuri și
              proiecte care cer documentații corecte și bine pregătite.
            </p>
            <p className="mt-5 max-w-[520px] text-sm leading-[1.95] text-muted-foreground sm:text-[0.95rem]">
              Lucrăm organizat, folosim tehnologii moderne și păstrăm comunicarea clară, astfel
              încât fiecare client să știe ce urmează și să aibă încredere în rezultat.
            </p>
            <ul className="mt-7 grid gap-4 text-sm text-brand-dark sm:text-[0.95rem]">
              {homeBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3.5">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-accent/10 text-brand-accent">
                    <Check className="size-[1.05rem]" aria-hidden="true" />
                  </span>
                  <span className="pt-0.5">{bullet}</span>
                </li>
              ))}
            </ul>
            {withCta && (
              <Button
                asChild
                className="mt-8 h-12 rounded-xl bg-brand text-primary-foreground hover:bg-brand/90"
              >
                <ScrollToTopLink to="/despre-noi">
                  Află mai multe despre noi
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ScrollToTopLink>
              </Button>
            )}
            <span className="sr-only">{company.name}</span>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white pt-10 pb-14 sm:pt-[3.75rem] sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-16 lg:px-8">
        <Reveal className="relative pb-8 sm:pb-0">
          <div className="relative overflow-hidden rounded-2xl bg-surface shadow-card">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-[29rem] w-full object-cover object-center sm:h-[31rem] lg:h-[36rem]"
              loading="lazy"
            />
          </div>
          <div className="absolute right-4 -bottom-1 left-4 rounded-[14px] border border-border/70 bg-white px-5 py-4 shadow-[0_22px_48px_rgba(0,0,0,.18)] sm:right-auto sm:bottom-5 sm:left-6 sm:max-w-[18rem] sm:rounded-xl sm:border-border sm:bg-card/98 sm:px-5 sm:py-4 sm:shadow-float lg:left-8">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand sm:size-10">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.16em] text-brand-dark uppercase">
                  {aboutAuthorization.title}
                </p>
                <p className="mt-1 text-[0.82rem] leading-relaxed text-muted-foreground sm:text-sm">
                  {aboutAuthorization.text}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="self-center">
          {eyebrow && (
            <p className="text-xs font-semibold tracking-[0.24em] text-brand-accent uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 max-w-[34rem] text-2xl leading-[1.15] font-bold text-brand-dark sm:mt-4 sm:text-3xl lg:text-[2.45rem]">
            {title}
          </h2>
          <div className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[35rem] text-sm leading-[1.85] text-muted-foreground sm:text-[0.98rem] sm:leading-[1.95]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="mt-7 grid gap-3.5 sm:mt-8 sm:gap-4 sm:grid-cols-2">
            {aboutBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-brand-dark sm:text-[0.95rem]">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-accent/12 text-brand">
                  <Check className="size-[0.95rem]" aria-hidden="true" />
                </span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
          {withCta && (
            <Button asChild className="mt-7 bg-brand text-primary-foreground hover:bg-brand/90">
              <ScrollToTopLink to="/despre-noi">
                Află mai multe despre noi
                <ArrowRight className="size-4" aria-hidden="true" />
              </ScrollToTopLink>
            </Button>
          )}
          <span className="sr-only">{company.name}</span>
        </Reveal>
      </div>
    </section>
  );
}
