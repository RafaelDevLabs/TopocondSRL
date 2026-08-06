import { Check } from "lucide-react";

import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { Reveal } from "@/components/common/Reveal";
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
import { ServiceDialogContent } from "@/components/services/ServiceDialogContent";

type ServiceCardProps = {
  service: Service;
  delay?: number;
};

/** Card de serviciu reutilizabil; deschide popup-ul cu detalii din aceleași date. */
export function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];

  return (
    <Reveal as="li" delay={delay} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-float">
        <div className="relative">
          <ImagePlaceholder alt={service.imageAlt} className="h-44 w-full border-0 border-b" />
          <span className="absolute bottom-3 left-3 grid size-9 place-items-center rounded-md bg-card text-brand shadow-card">
            <Icon className="size-5" aria-hidden="true" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-base font-semibold text-brand-dark">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {service.shortDescription}
          </p>
          <ul className="mt-4 flex-1 space-y-2">
            {service.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <Check className="mt-0.5 size-3.5 shrink-0 text-brand-accent" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="mt-5 h-auto justify-start p-0 text-brand">
                Detalii serviciu →
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
              <DialogHeader>
                <div className="flex min-w-0 items-start gap-3 text-left">
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <DialogTitle className="text-lg text-brand-dark">{service.title}</DialogTitle>
                    <DialogDescription className="mt-1 text-sm">
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
