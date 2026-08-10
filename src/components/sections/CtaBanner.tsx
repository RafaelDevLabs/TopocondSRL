import { MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { ClipboardIcon } from "@/components/sections/ClipboardIcon";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  title: string;
  subtitle: string;
  floating?: boolean;
  className?: string;
  iconAlwaysVisible?: boolean;
};

/** Bannerul verde de CTA, folosit identic pe toate paginile. */
export function CtaBanner({
  title,
  subtitle,
  floating = false,
  className,
  iconAlwaysVisible = false,
}: CtaBannerProps) {
  return (
    <section
      className={cn(
        "mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8",
        floating &&
        "relative z-10 -mt-[48px] -mb-4 py-0 sm:-mt-[50px] sm:-mb-5 sm:py-0 lg:-mt-[52px] lg:-mb-6 lg:py-0",
        className,
      )}
    >
      <Reveal
        className={cn(
          "flex flex-col gap-5 rounded-xl bg-brand px-5 py-10 text-primary-foreground sm:gap-6 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-[3.35rem]",
          floating && "rounded-b-none bg-footer py-[3.25rem]",
        )}
      >
        <div className="flex min-w-0 items-center gap-3.5 sm:gap-4 lg:py-1">
          <span
            className={cn(
              "size-[52px] shrink-0 place-items-center rounded-lg bg-primary-foreground/10 sm:size-[56px]",
              iconAlwaysVisible ? "grid" : "hidden sm:grid",
            )}
          >
            <ClipboardIcon className="size-8 sm:size-[2.2rem]" />
          </span>
          <div className="min-w-0">
            <h2 className="text-[1.28rem] leading-snug font-bold sm:text-[2.125rem]">{title}</h2>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-primary-foreground/78 sm:text-sm">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 self-center sm:flex-row sm:gap-3 lg:shrink-0 lg:self-center">
          <Button
            asChild
            className="h-11 w-full bg-primary-foreground px-6 text-brand hover:bg-primary-foreground/90 sm:h-12 sm:w-auto sm:px-7"
          >
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" aria-hidden="true" />
              Scrie-ne pe WhatsApp
            </a>
          </Button>
          <Button
            asChild
            className="h-11 w-full bg-brand-dark px-6 text-primary-foreground hover:bg-brand-dark/90 sm:h-12 sm:w-auto sm:px-7"
          >
            <a href={company.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              {company.phoneLabel}
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
