import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { workflowSteps } from "@/data/site";
import { cn } from "@/lib/utils";

export function WorkflowSteps({ className }: { className?: string }) {
  return (
    <section className={cn("bg-surface py-14 sm:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 md:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] md:gap-10 lg:gap-14">
          <Reveal className="order-1 md:h-full">
            <div className="relative h-[22rem] overflow-hidden rounded-[1.9rem] border border-white/70 bg-card shadow-[0_28px_70px_rgba(13,36,27,0.14)] sm:h-[26rem] md:h-full md:min-h-[31rem] lg:min-h-[34rem]">
              <img
                src="/Images/ClientsPhotos/OutsideServices.jpeg"
                alt="Măsurători topografice în teren cu echipament GNSS"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={90} className="order-2">
            <div className="flex h-full flex-col justify-center pt-1 md:min-h-[31rem] md:py-4 lg:min-h-[34rem] lg:py-5">
              <SectionHeading
                eyebrow="PROCESUL NOSTRU"
                title="Cum lucrăm pentru tine"
                subtitle="Un proces clar, comunicare constantă și rezultate corecte."
                align="left"
                className="max-w-[34rem]"
              />

              <ol className="relative mt-8 grid gap-6 sm:mt-9">
                {workflowSteps.map((step, index) => (
                  <li key={step.title} className="relative flex items-start gap-4 sm:gap-4.5">
                    <div className="relative flex shrink-0 flex-col items-center self-stretch">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-soft text-base font-semibold text-brand shadow-[0_10px_24px_rgba(87,140,100,0.14)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {index < workflowSteps.length - 1 ? (
                        <span
                          className="mt-2 w-px flex-1 rounded-full bg-brand/14"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>

                    <div className="max-w-[29rem] pt-1">
                      <h3 className="text-[1.04rem] font-semibold text-brand-dark sm:text-[1.08rem]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[1.8] text-muted-foreground sm:text-[0.98rem]">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
