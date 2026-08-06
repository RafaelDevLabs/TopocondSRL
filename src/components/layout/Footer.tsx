import { useRouterState } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/brand/Logo";
import { ScrollToTopLink } from "@/components/common/ScrollToTopLink";
import { services } from "@/data/services";
import { company, usefulLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Footer() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isHomePage = pathname === "/";

  return (
    <footer className="bg-footer text-footer-foreground">
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-4 lg:gap-14 lg:px-8",
          isHomePage ? "pt-12 sm:pt-14 lg:pt-16" : "pt-14",
        )}
      >
        <div>
          <Logo tone="dark" className="h-12 sm:h-14" />
          <p className="mt-5 max-w-xs text-sm leading-[1.9] text-footer-muted">
            {company.tagline}
          </p>
          <ul className="mt-6 flex items-center gap-3">
            <li>
              <a
                href="#"
                aria-label="Facebook"
                className="grid size-9 place-items-center rounded-full border border-footer-muted/40 text-footer-foreground transition-colors hover:bg-brand focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
              >
                <Facebook className="size-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Instagram"
                className="grid size-9 place-items-center rounded-full border border-footer-muted/40 text-footer-foreground transition-colors hover:bg-brand focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
              >
                <Instagram className="size-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <nav aria-labelledby="footer-servicii">
          <h2
            id="footer-servicii"
            className="text-[0.95rem] font-semibold tracking-[0.01em] text-footer-foreground"
          >
            Servicii
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-footer-muted">
            {services.map((service) => (
              <li key={service.slug}>
                <ScrollToTopLink
                  to="/servicii"
                  className="rounded transition-colors hover:text-footer-foreground focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
                >
                  {service.shortTitle}
                </ScrollToTopLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-utile">
          <h2
            id="footer-utile"
            className="text-[0.95rem] font-semibold tracking-[0.01em] text-footer-foreground"
          >
            Informații utile
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-footer-muted">
            {usefulLinks.map((item) => (
              <li key={item.to}>
                <ScrollToTopLink
                  to={item.to}
                  className="rounded transition-colors hover:text-footer-foreground focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
                >
                  {item.label}
                </ScrollToTopLink>
              </li>
            ))}
            <li>
              <span>Politică de confidențialitate</span>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.95rem] font-semibold tracking-[0.01em] text-footer-foreground">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-footer-muted">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a
                href={company.phoneHref}
                className="rounded transition-colors hover:text-footer-foreground focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
              >
                {company.phoneLabel}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${company.email}`}
                className="rounded break-all transition-colors hover:text-footer-foreground focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
              >
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{company.schedule}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-footer-muted/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {company.name}. Toate drepturile rezervate.</p>
          <p>Website realizat cu pasiune.</p>
        </div>
      </div>
    </footer>
  );
}
