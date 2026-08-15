import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/Logo";
import { ScrollToTopLink } from "@/components/common/ScrollToTopLink";
import { Button } from "@/components/ui/button";
import { company, navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur transition-shadow",
        scrolled && "shadow-card",
      )}
    >
      <div className="mx-auto flex h-[78px] max-w-7xl items-center gap-5 px-6 sm:h-[84px] sm:px-8 lg:h-[88px] lg:px-10">
        <ScrollToTopLink
          to="/"
          className="shrink-0 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          aria-label={`${company.name} - pagina principala`}
        >
          <Logo className="h-[60px] sm:h-[72px] lg:h-[84px]" />
        </ScrollToTopLink>

        <nav
          aria-label="Navigatie principala"
          className="mx-auto hidden lg:block lg:-translate-x-3"
        >
          <ul className="flex items-center gap-10 xl:gap-12">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollToTopLink
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-brand-accent" }}
                  inactiveProps={{ className: "text-foreground/80 hover:text-brand" }}
                  className="rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {item.label}
                </ScrollToTopLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            asChild
            variant="outline"
            className="hidden h-11 border-brand px-4 text-brand sm:flex"
          >
            <a href={company.phoneHref} aria-label={`Telefon ${company.phoneLabel}`}>
              <Phone className="size-[1.05rem]" aria-hidden="true" />
              {company.phoneLabel}
            </a>
          </Button>
          <Button
            asChild
            size="icon"
            variant="outline"
            className="size-10 border-brand text-brand sm:hidden"
          >
            <a href={company.phoneHref} aria-label={`Telefon ${company.phoneLabel}`}>
              <Phone className="size-[1.05rem]" aria-hidden="true" />
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Inchide meniul" : "Deschide meniul"}
            className="grid size-10 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigatie mobila"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollToTopLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-brand-accent" }}
                  className="block rounded-md py-3 text-sm font-medium text-foreground/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {item.label}
                </ScrollToTopLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
