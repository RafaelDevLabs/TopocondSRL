import { Reveal } from "@/components/common/Reveal";
import { getUiIcon } from "@/lib/icons";
import { stats } from "@/data/site";

/** Banda de statistici (pagina Despre Noi). Valorile sunt placeholder. */
export function StatsBand() {
  const icons = ["users", "fileCheck", "badgeCheck", "mapPin"];

  return (
    <section className="bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = getUiIcon(icons[index] ?? "badgeCheck");
            return (
              <Reveal as="li" key={stat.label} delay={index * 80}>
                <div className="text-center">
                  <span className="mx-auto grid size-11 place-items-center rounded-full bg-brand-soft text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-2xl font-bold text-brand-dark sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-brand-dark">{stat.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{stat.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
