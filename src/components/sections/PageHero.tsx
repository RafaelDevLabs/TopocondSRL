import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { ScrollToTopLink } from "@/components/common/ScrollToTopLink";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  breadcrumb: { label: string; to?: string }[];
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  footerContent?: ReactNode;
  backgroundImageSrc?: string;
  backgroundImageSrcSet?: string;
  backgroundImageMobileSrc?: string;
  backgroundImageAlt?: string;
  backgroundPosition?: string;
  backgroundClassName?: string;
  overlayClassName?: string;
  contentClassName?: string;
  breadcrumbClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  prioritizeImage?: boolean;
  backgroundImageWidth?: number;
  backgroundImageHeight?: number;
  backgroundImageSizes?: string;
};

/** Hero-ul folosit pe paginile interioare (Servicii, Despre Noi, Despre Cadastru, Contact). */
export function PageHero({
  breadcrumb,
  title,
  subtitle,
  children,
  footerContent,
  backgroundImageSrc,
  backgroundImageSrcSet,
  backgroundImageMobileSrc,
  backgroundImageAlt,
  backgroundPosition = "center",
  backgroundClassName,
  overlayClassName,
  contentClassName,
  breadcrumbClassName,
  titleClassName,
  subtitleClassName,
  prioritizeImage = true,
  backgroundImageWidth,
  backgroundImageHeight,
  backgroundImageSizes = "100vw",
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark">
      {backgroundImageSrc ? (
        <picture className="absolute inset-0 -z-10 block overflow-hidden" aria-hidden="true">
          {backgroundImageMobileSrc ? (
            <source media="(max-width: 640px)" srcSet={backgroundImageMobileSrc} />
          ) : null}
          <img
            src={backgroundImageSrc}
            srcSet={backgroundImageSrcSet}
            sizes={backgroundImageSizes}
            alt=""
            width={backgroundImageWidth}
            height={backgroundImageHeight}
            className={cn("h-full w-full object-cover", backgroundClassName)}
            style={{ objectPosition: backgroundPosition }}
            fetchPriority={prioritizeImage ? "high" : "auto"}
            loading={prioritizeImage ? "eager" : "lazy"}
            decoding="async"
          />
        </picture>
      ) : (
        <ImagePlaceholder
          alt={backgroundImageAlt ?? "Imagine placeholder de fundal pentru hero"}
          label="Imagine hero placeholder"
          tone="dark"
          className="absolute inset-0 -z-10 h-full w-full border-0"
        />
      )}
      <div
        className={cn(
          "absolute inset-0 -z-10 bg-brand-dark/80",
          backgroundImageSrc &&
            "bg-[linear-gradient(90deg,rgba(12,28,23,0.88)_0%,rgba(12,28,23,0.78)_38%,rgba(12,28,23,0.52)_68%,rgba(12,28,23,0.35)_100%)]",
          overlayClassName,
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
          contentClassName,
        )}
      >
        <nav aria-label="Breadcrumb">
          <ol
            className={cn(
              "flex flex-wrap items-center gap-1 text-xs text-brand-accent",
              breadcrumbClassName,
            )}
          >
            {breadcrumb.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-1">
                {index > 0 && <ChevronRight className="size-3" aria-hidden="true" />}
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

        <h1
          className={cn(
            "mt-5 max-w-3xl text-3xl leading-tight font-bold text-primary-foreground sm:text-4xl lg:text-5xl",
            titleClassName,
          )}
        >
          {title}
        </h1>
        {children && <div className="mt-5 sm:mt-6">{children}</div>}
        {subtitle && (
          <div
            className={cn(
              "mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base",
              subtitleClassName,
            )}
          >
            {subtitle}
          </div>
        )}
        {footerContent && <div className="mt-8 sm:mt-9">{footerContent}</div>}
      </div>
    </section>
  );
}
