import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: "center" | "left";
  as?: "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-accent uppercase">
          {eyebrow}
        </p>
      )}
      <Tag className="mt-3 text-2xl font-bold text-brand-dark sm:text-3xl lg:text-[2rem]">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
