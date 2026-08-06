import { ImageOff } from "lucide-react";

import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Text descriptiv (devine și alt-text când imaginea reală este adăugată). */
  alt: string;
  className?: string;
  /** Etichetă opțională afișată în placeholder. */
  label?: string;
  tone?: "light" | "dark";
};

/**
 * Placeholder neutru pentru imaginile care urmează să fie livrate de client.
 * Se înlocuiește cu <img src=... alt={alt} /> fără alte modificări de layout.
 */
export function ImagePlaceholder({
  alt,
  className,
  label = "Imagine placeholder",
  tone = "light",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      data-placeholder="image"
      className={cn(
        "flex flex-col items-center justify-center gap-2 border border-dashed text-center",
        tone === "dark"
          ? "border-footer-muted/40 bg-footer/60 text-footer-muted"
          : "border-border bg-surface text-muted-foreground",
        className,
      )}
    >
      <ImageOff className="size-6 shrink-0" aria-hidden="true" />
      <span className="px-3 text-[0.7rem] tracking-wide uppercase">{label}</span>
    </div>
  );
}
