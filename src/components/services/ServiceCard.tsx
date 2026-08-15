import { Check } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { ServiceDialogContent } from "@/components/services/ServiceDialogContent";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Service } from "@/data/services";
import { serviceIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  anchorId?: string;
  delay?: number;
};

/** Card de serviciu reutilizabil; deschide popup-ul cu detalii din aceleași date. */
export function ServiceCard({ service, anchorId, delay = 0 }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];

  return (
    <Reveal as="li" id={anchorId} delay={delay} className="h-full scroll-mt-32">
      <article className="flex h-full min-h-[100%] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-[250ms] lg:hover:-translate-y-1 lg:hover:shadow-float">
        <div className="relative">
          <img
            src={service.imageSrc}
            alt={service.imageAlt}
            className={cn(
              "h-44 w-full border-b border-border object-cover object-center",
              service.imageCardClassName,
            )}
            loading="lazy"
          />
          <span className="absolute bottom-3 left-3 grid size-9 place-items-center rounded-md bg-card text-brand shadow-card">
            <Icon className="size-5" aria-hidden="true" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-base font-semibold text-brand-dark">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {service.shortDescription}
          </p>
          <ul className="mt-4 flex-1 space-y-2.5">
            {service.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                <Check className="mt-0.5 size-3.5 shrink-0 text-brand-accent" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="mt-5 h-auto justify-start p-0 text-brand">
                Vezi detalii →
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto bg-white p-7 sm:max-w-2xl sm:p-8">
              <DialogHeader className="pb-1">
                <div className="flex min-w-0 items-start gap-3 text-left">
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <DialogTitle className="text-lg text-brand-dark">{service.title}</DialogTitle>
                    <DialogDescription className="mt-2 text-sm leading-relaxed">
                      {service.shortDescription}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <ServiceDialogContent service={service} />
            </DialogContent>
          </Dialog>
        </div>
      </article>
    </Reveal>
  );
}
