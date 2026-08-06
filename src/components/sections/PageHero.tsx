import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { ScrollToTopLink } from "@/components/common/ScrollToTopLink";

type PageHeroProps = {
  breadcrumb: { label: string; to?: string }[];
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
};

/** Hero-ul folosit pe paginile interioare (Servicii, Despre Noi, Despre Cadastru, Contact). */
export function PageHero({ breadcrumb, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark">
      <ImagePlaceholder
        alt="Imagine placeholder de fundal pentru hero"
        label="Imagine hero placeholder"
        tone="dark"
        className="absolute inset-0 -z-10 h-full w-full border-0"
      />
      <div
        className="absolute inset-0 -z-10 bg-brand-dark/80"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-brand-accent">
            {breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-3" aria-hidden="true" />}
                {crumb.to ? (
                  <ScrollToTopLink
                    to={crumb.to}
                    className="rounded transition-colors hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
                  >
                    {crumb.label}
                  </ScrollToTopLink>
                ) : (
                  <span aria-current="page" className="text-primary-foreground/80">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-5 max-w-3xl text-3xl leading-tight font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
