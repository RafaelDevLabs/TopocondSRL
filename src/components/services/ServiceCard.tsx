import { Check } from "lucide-react";
import { lazy, Suspense, useState } from "react";

import { Reveal } from "@/components/common/Reveal";
import { ScrollToTopLink } from "@/components/common/ScrollToTopLink";
import { Button } from "@/components/ui/button";
import type { Service } from "@/data/services";
import { serviceIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

const LazyServiceDialog = lazy(() => import("@/components/services/LazyServiceDialog"));

type ServiceCardProps = {
  service: Pick<
    Service,
    | "slug"
    | "title"
    | "shortDescription"
    | "icon"
    | "imageSrc"
    | "imageAlt"
    | "imageCardClassName"
    | "bullets"
  >;
  anchorId?: string;
  delay?: number;
  dialogEnabled?: boolean;
  detailsHref?: string;
  detailsService?: Service;
};

/** Card de serviciu reutilizabil; deschide popup-ul cu detalii din aceleași date. */
export function ServiceCard({
  service,
  anchorId,
  delay = 0,
  dialogEnabled = true,
  detailsHref,
  detailsService,
}: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];
  const [open, setOpen] = useState(false);

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
            decoding="async"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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

          {dialogEnabled && detailsService ? (
            <>
              <Button
                variant="link"
                className="mt-5 h-auto justify-start p-0 text-brand"
                onClick={() => setOpen(true)}
              >
                Vezi detalii →
              </Button>
              {open ? (
                <Suspense fallback={null}>
                  <LazyServiceDialog
                    open={open}
                    onOpenChange={setOpen}
                    service={detailsService}
                    Icon={Icon}
                  />
                </Suspense>
              ) : null}
            </>
          ) : detailsHref ? (
            <Button asChild variant="link" className="mt-5 h-auto justify-start p-0 text-brand">
              <ScrollToTopLink to={detailsHref}>Vezi detalii →</ScrollToTopLink>
            </Button>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}
