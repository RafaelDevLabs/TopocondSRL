import { Reveal } from "@/components/common/Reveal";
import { getUiIcon } from "@/lib/icons";
import { stats } from "@/data/site";

/** Banda de statistici (pagina Despre Noi). */
export function StatsBand() {
  const icons = ["award", "fileCheck", "badgeCheck", "mapPin"];

  return (
    <section className="bg-surface/55 py-12 sm:py-16 lg:py-[4.5rem]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid overflow-hidden rounded-xl border border-border/75 bg-white shadow-[0_8px_22px_rgba(15,23,42,.035)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = getUiIcon(icons[index] ?? "badgeCheck");
            return (
              <Reveal
                as="li"
                key={stat.label}
                delay={index * 80}
                className="border-b border-border/75 px-5 py-6 sm:px-7 sm:py-8 lg:border-r lg:border-b-0 lg:px-8 lg:py-[2.35rem] last:border-b-0 last:lg:border-r-0"
              >
                <div className="text-center lg:text-left">
                  <span className="mx-auto grid size-9 place-items-center rounded-full bg-brand-soft text-brand sm:size-10 lg:mx-0">
                    <Icon className="size-[1.125rem] sm:size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-[1.75rem] font-bold text-brand-dark sm:mt-4 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-brand-dark sm:mt-2 sm:text-[0.95rem]">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-[0.84rem] leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                    {stat.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
