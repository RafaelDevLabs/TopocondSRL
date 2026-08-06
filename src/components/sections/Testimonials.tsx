import { Star } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Clienții noștri ne recomandă" />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal as="li" key={index} delay={index * 80}>
              <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card">
                <div
                  className="flex items-center gap-1 text-brand-accent"
                  aria-label={`${item.rating} din 5 stele`}
                >
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <span className="block text-sm font-semibold text-brand-dark">{item.author}</span>
                  <span className="block text-xs text-muted-foreground">{item.city}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
