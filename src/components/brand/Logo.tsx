import { company } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <img
      src="/Images/Logo/LogoNew-ui-128.png"
      srcSet="/Images/Logo/LogoNew-ui-128.png 128w, /Images/Logo/LogoNew-ui-192.png 192w"
      sizes="(max-width: 640px) 80px, 84px"
      alt={company.name}
      width={192}
      height={192}
      decoding="async"
      className={cn("block h-11 w-auto shrink-0 sm:h-12", className)}
    />
  );
}
