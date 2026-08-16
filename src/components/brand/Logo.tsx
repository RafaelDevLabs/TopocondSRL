import { company } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <img
      src="/Images/Logo/LogoNew-ui-112.png"
      srcSet="/Images/Logo/LogoNew-ui-112.png 112w, /Images/Logo/LogoNew-ui-168.png 168w"
      sizes="(max-width: 640px) 80px, 84px"
      alt={company.name}
      width={168}
      height={168}
      decoding="async"
      className={cn("block h-11 w-auto shrink-0 sm:h-12", className)}
    />
  );
}
