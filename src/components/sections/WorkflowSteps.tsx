import { Headset, Map, Ruler, ScrollText } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { workflowSteps } from "@/data/site";
import { cn } from "@/lib/utils";

const stepIcons = [Headset, Map, Ruler, ScrollText];

/** Secțiunea „Cum colaborăm?” — 4 pași pe o linie orizontală numerotată. */
export function WorkflowSteps({ className }: { className?: string }) {
  return (
    <section className={cn("bg-surface py-14 sm:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Cum colaborăm?" />
        <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <span
            className="absolute top-4 right-8 left-8 hidden border-t border-dashed border-brand/30 lg:block"
            aria-hidden="true"
          />
          {workflowSteps.map((step, index) => {
            const Icon = stepIcons[index] ?? Headset;
            return (
              <Reveal as="li" key={step.title} delay={index * 90} className="relative">
                <div className="flex flex-col items-center text-center">
                  <span className="grid size-8 place-items-center rounded-full bg-brand text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <Icon className="mt-4 size-6 text-brand" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-semibold text-brand-dark">{step.title}</h3>
                  <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
