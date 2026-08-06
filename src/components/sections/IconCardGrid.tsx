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
            <div className="flex h-full flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-card">
              <span className="grid size-11 place-items-center rounded-lg bg-brand-soft text-brand">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-brand-dark">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
