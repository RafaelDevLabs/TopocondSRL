import { Reveal } from "@/components/common/Reveal";
import { getUiIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

type HighlightItem = {
  icon: string;
  title: string;
  text: string;
};

type HighlightBarProps = {
  items: readonly HighlightItem[];
  /** Suprapune bara peste hero-ul de deasupra. */
  overlap?: boolean;
  className?: string;
};

export function HighlightBar({ items, overlap = true, className }: HighlightBarProps) {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        overlap && "-mt-10 sm:-mt-12",
        className,
      )}
    >
      <Reveal className="grid gap-4 rounded-xl border border-border bg-card p-5 shadow-float sm:grid-cols-2 sm:gap-6 sm:p-7 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = getUiIcon(item.icon);
          return (
            <div key={item.title} className="flex min-w-0 items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-brand-dark">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </div>
          );
        })}
      </Reveal>
    </div>
  );
}
