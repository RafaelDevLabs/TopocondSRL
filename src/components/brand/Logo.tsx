import { Hexagon } from "lucide-react";

import { company } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Variantă de culoare pentru fundal deschis sau închis. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Logo placeholder.
 * Când primim logo-ul real, se înlocuiește DOAR conținutul acestei componente
 * (ex. cu un <img src={logoAsset.url} />) — navbar-ul și footer-ul rămân neatinse.
 */
export function Logo({ tone = "light", className }: LogoProps) {
  const isDark = tone === "dark";

  return (
    <span
      className={cn("flex items-center gap-2", className)}
      data-placeholder="logo"
      aria-hidden="false"
    >
      <span className="relative grid size-9 shrink-0 place-items-center">
        <Hexagon
          className={cn("absolute size-9", isDark ? "text-footer-muted" : "text-brand")}
          strokeWidth={1.5}
        />
        <Ruler tone={tone} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[0.7rem] font-bold tracking-[0.18em]",
            isDark ? "text-footer-foreground" : "text-brand-dark",
          )}
        >
          {company.shortName}
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.5rem] tracking-[0.14em] uppercase",
            isDark ? "text-footer-muted" : "text-muted-foreground",
          )}
        >
          Cadastru
        </span>
      </span>
    </span>
  );
}

function Ruler({ tone }: { tone: "light" | "dark" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-4", tone === "dark" ? "text-footer-foreground" : "text-brand")}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 18h16" />
      <path d="M12 18V7" />
      <path d="M8 10l4-3 4 3" />
    </svg>
  );
}
