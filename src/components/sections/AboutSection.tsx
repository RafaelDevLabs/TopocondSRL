import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { aboutBullets, company } from "@/data/site";

type AboutSectionProps = {
  eyebrow?: string;
  title: string;
  /** Afișează CTA-ul „Află mai multe despre noi” (doar pe Home). */
  withCta?: boolean;
};

/** Secțiunea despre companie: imagine + descriere + bullet points (+ CTA). */
export function AboutSection({ eyebrow, title, withCta = false }: AboutSectionProps) {
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
              <Link to="/despre-noi">
                Află mai multe despre noi
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          )}
          <span className="sr-only">{company.name}</span>
        </Reveal>
      </div>
    </section>
  );
}
