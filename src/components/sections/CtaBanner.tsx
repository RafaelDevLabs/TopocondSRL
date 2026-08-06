import { MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";
import { ClipboardIcon } from "@/components/sections/ClipboardIcon";

type CtaBannerProps = {
  title: string;
  subtitle: string;
};

/** Bannerul verde de CTA, folosit identic pe toate paginile. */
export function CtaBanner({ title, subtitle }: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Reveal className="flex flex-col gap-6 rounded-xl bg-brand px-6 py-8 text-primary-foreground sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          <span className="hidden size-14 shrink-0 place-items-center rounded-lg bg-primary-foreground/10 sm:grid">
            <ClipboardIcon className="size-7" />
          </span>
          <div className="min-w-0">
            <h2 className="text-xl leading-snug font-bold sm:text-2xl">{title}</h2>
            <p className="mt-2 text-sm text-primary-foreground/85">{subtitle}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <Button
            asChild
            className="bg-primary-foreground text-brand hover:bg-primary-foreground/90"
          >
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" aria-hidden="true" />
              Scrie pe WhatsApp
            </a>
          </Button>
          <Button
            asChild
            className="bg-brand-dark text-primary-foreground hover:bg-brand-dark/90"
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
