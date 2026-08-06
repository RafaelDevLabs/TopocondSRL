import { Check, Clock, MapPin, MessageCircle, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Service } from "@/data/services";
import { company } from "@/data/site";

/** Conținutul popup-ului de serviciu — folosește exact aceleași date ca și cardul. */
export function ServiceDialogContent({ service }: { service: Service }) {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-muted-foreground">{service.fullDescription}</p>

      <section>
        <h4 className="text-sm font-semibold text-brand-dark">Ce include serviciul?</h4>
        <ul className="mt-3 space-y-2">
          {service.includes.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-brand-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-6 sm:grid-cols-2">
        <section>
          <h4 className="text-sm font-semibold text-brand-dark">Când este necesar?</h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.whenNeeded}</p>
        </section>
        <section>
          <h4 className="text-sm font-semibold text-brand-dark">Documente necesare</h4>
          <ul className="mt-3 space-y-2">
            {service.documents.map((doc, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <InfoCard icon={<Clock className="size-4" aria-hidden="true" />} label="Durată" value={service.duration} />
        <InfoCard icon={<Tag className="size-4" aria-hidden="true" />} label="Preț" value={service.price} />
        <InfoCard icon={<MapPin className="size-4" aria-hidden="true" />} label="Zonă deservită" value={service.coverage} />
      </div>

      <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row">
        <Button asChild className="bg-brand text-primary-foreground hover:bg-brand/90">
          <a href={company.phoneHref}>Solicită ofertă pentru acest serviciu →</a>
        </Button>
        <Button asChild variant="outline" className="border-brand text-brand">
          <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="size-4" aria-hidden="true" />
            Scrie pe WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4 text-center">
      <span className="mx-auto grid size-8 place-items-center rounded-full bg-brand-soft text-brand">
        {icon}
      </span>
      <p className="mt-2 text-sm font-semibold text-brand-dark">{label}</p>
      <p className="mt-1 text-xs text-muted-foreground">{value}</p>
    </div>
  );
}
