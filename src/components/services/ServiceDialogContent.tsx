import { Check, Clock, MapPin, MessageCircle, Tag } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import type { Service } from "@/data/services";
import { company } from "@/data/site";

/** Conținutul popup-ului de serviciu folosește exact aceleași date ca și cardul. */
export function ServiceDialogContent({ service }: { service: Service }) {
  return (
    <div className="space-y-8">
      <p className="text-sm leading-7 text-muted-foreground">{service.fullDescription}</p>

      <section className="pt-1">
        <h4 className="text-sm font-bold text-slate-900">Ce include serviciul?</h4>
        <ul className="mt-4 space-y-3">
          {service.includes.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
            >
              <Check className="mt-1 size-4 shrink-0 text-brand-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-8 pt-1 sm:grid-cols-2">
        <section>
          <h4 className="text-sm font-bold text-slate-900">Când este necesar?</h4>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.whenNeeded}</p>
        </section>
        <section>
          <h4 className="text-sm font-bold text-slate-900">Documente necesare</h4>
          <ul className="mt-4 space-y-3">
            {service.documents.map((doc, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
              >
                <Check className="mt-1 size-4 shrink-0 text-brand-accent" aria-hidden="true" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
          {service.documentsNote ? (
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.documentsNote}</p>
          ) : null}
        </section>
      </div>

      <div className="grid gap-4 pt-1 sm:grid-cols-3">
        <InfoCard
          icon={<Clock className="size-[1.05rem]" aria-hidden="true" />}
          label="Durată"
          value={service.duration}
        />
        <InfoCard
          icon={<Tag className="size-[1.05rem]" aria-hidden="true" />}
          label="Preț"
          value={service.price}
        />
        <InfoCard
          icon={<MapPin className="size-[1.05rem]" aria-hidden="true" />}
          label="Zonă deservită"
          value={service.coverage}
        />
      </div>

      <div className="flex flex-col gap-3 border-t border-border/50 pt-6 sm:flex-row">
        <Button asChild className="h-11 bg-brand text-primary-foreground hover:bg-brand/90">
          <a href={company.phoneHref}>Solicită ofertă pentru acest serviciu →</a>
        </Button>
        <Button asChild variant="outline" className="h-11 border-brand text-brand">
          <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="size-4" aria-hidden="true" />
            Scrie-ne pe WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}

function InfoCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-surface/60 p-5 text-center">
      <span className="mx-auto grid size-9 place-items-center rounded-full bg-brand-soft text-brand">
        {icon}
      </span>
      <p className="mt-3 text-sm font-bold text-slate-900">{label}</p>
      <p className="mt-1 text-[0.72rem] leading-relaxed text-muted-foreground">{value}</p>
    </div>
  );
}
