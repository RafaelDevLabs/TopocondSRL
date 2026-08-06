import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { advantages } from "@/data/site";
import { getUiIcon } from "@/lib/icons";

export function WhyChooseSection() {
  return (
    <section className="bg-background pt-6 pb-10 sm:pt-10 sm:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DE CE SĂ NE ALEGI?"
          title="Avantajele colaborării cu noi"
          className="max-w-2xl"
        />

        <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => {
            const Icon = getUiIcon(item.icon);

            return (
              <Reveal as="li" key={item.title} delay={index * 70} className="h-full">
                <div className="flex h-full min-h-[118px] items-start gap-3 rounded-[18px] border border-border/80 bg-card px-5 py-4 text-left shadow-[0_10px_28px_rgba(15,23,42,.05)]">
                  <span className="mt-0.5 shrink-0 text-brand-accent">
                    <Icon className="size-8 stroke-[1.8]" aria-hidden="true" />
                  </span>

                  <div className="min-w-0 self-start">
                    <h3 className="text-[0.95rem] leading-snug font-semibold text-brand-dark">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[0.83rem] leading-5 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
