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
          ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          : "grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      }
    >
      {items.map((item, index) => {
        const Icon = getUiIcon(item.icon);
        return (
          <Reveal as="li" key={item.title} delay={index * 70} className="h-full">
            <div className="group flex h-full flex-col items-center justify-center rounded-xl border border-border/80 bg-card px-5 py-4 text-center shadow-[0_12px_32px_rgba(15,23,42,.06)] transition-transform transition-shadow duration-[250ms] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,.10)]">
              <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand transition-transform duration-[250ms] group-hover:scale-105">
                <Icon
                  className="size-[1.35rem] transition-transform duration-[250ms] group-hover:scale-105"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-5 text-sm font-bold text-brand-dark">{item.title}</h3>
              <p className="mt-3 line-clamp-2 text-[0.9rem] leading-[1.6] text-muted-foreground">
                {item.text}
              </p>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
