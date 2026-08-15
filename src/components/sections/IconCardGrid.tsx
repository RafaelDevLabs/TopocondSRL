import { Reveal } from "@/components/common/Reveal";
import { getUiIcon } from "@/lib/icons";

type IconCardItem = {
  icon: string;
  title: string;
  text: string;
};

/** Grid reutilizabil de carduri cu icon (Avantaje pe Home, Valori pe Despre Noi). */
export function IconCardGrid({
  items,
  columns = 4,
}: {
  items: readonly IconCardItem[];
  columns?: 4 | 5;
}) {
  return (
    <ul
      className={
        columns === 5
          ? "grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5"
          : "grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      }
    >
      {items.map((item, index) => {
        const Icon = getUiIcon(item.icon);
        return (
          <Reveal as="li" key={item.title} delay={index * 70} className="h-full">
            <div className="group flex h-full flex-col rounded-xl border border-border bg-card px-4 py-5 text-left shadow-card transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-float sm:px-6 sm:py-6">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand transition-transform duration-[250ms] group-hover:scale-105 sm:size-12">
                <Icon
                  className="size-[1.2rem] transition-transform duration-[250ms] group-hover:scale-105 sm:size-[1.35rem]"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-4 text-sm font-bold text-brand-dark sm:mt-5 sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.84rem] leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
                {item.text}
              </p>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
