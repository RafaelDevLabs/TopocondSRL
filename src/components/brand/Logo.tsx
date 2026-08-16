import { company } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <img
      src="/Images/Logo/LogoNew-ui.png"
      alt={company.name}
      width={256}
      height={256}
      decoding="async"
      className={cn("block h-11 w-auto shrink-0 sm:h-12", className)}
    />
  );
}
