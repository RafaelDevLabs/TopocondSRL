import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { Reveal } from "@/components/common/Reveal";
import { ScrollToTopLink } from "@/components/common/ScrollToTopLink";
import { Button } from "@/components/ui/button";
import { aboutBullets, company } from "@/data/site";

type AboutSectionProps = {
  eyebrow?: string;
  title: string;
  /** Afișează CTA-ul „Află mai multe despre noi” (doar pe Home). */
  withCta?: boolean;
  variant?: "default" | "home";
};

/** Secțiunea despre companie: imagine + descriere + bullet points (+ CTA). */
export function AboutSection({
  eyebrow,
  title,
  withCta = false,
  variant = "default",
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
                alt="Echipa Topocond în teren realizând măsurători cadastrale"
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
              Suntem o echipă de specialiști autorizați ANCPI care oferă servicii complete de
              cadastru, intabulare și topografie în județul Botoșani și zonele limitrofe.
            </p>
            <p className="mt-5 max-w-[520px] text-sm leading-[1.95] text-muted-foreground sm:text-[0.95rem]">
              Folosim tehnologii moderne și respectăm cele mai înalte standarde de calitate pentru a
              livra documentații corecte, la timp și fără bătăi de cap.
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
    <section className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Reveal className="relative">
          <ImagePlaceholder
            alt="Imagine placeholder cu activitatea de teren a echipei"
            className="h-72 w-full rounded-xl sm:h-96"
          />
          <div className="absolute -bottom-5 left-4 flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3 shadow-float sm:left-6">
            <ShieldCheck className="size-5 shrink-0 text-brand-accent" aria-hidden="true" />
            <div className="min-w-0">
              {/* PLACEHOLDER — autorizare de confirmat */}
              <p className="text-xs font-semibold text-brand-dark">[badge placeholder]</p>
              <p className="text-[0.7rem] text-muted-foreground">[detaliu placeholder]</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {eyebrow && (
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-accent uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-2xl font-bold text-brand-dark sm:text-3xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {/* PLACEHOLDER — descriere companie de confirmat */}
            [descriere companie placeholder]
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            [paragraf secundar placeholder]
          </p>
          <ul className="mt-6 space-y-3">
            {aboutBullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand-accent text-primary-foreground">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                <span>{bullet}</span>
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
