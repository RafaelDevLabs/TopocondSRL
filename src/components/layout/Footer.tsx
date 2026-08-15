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
          <Logo tone="dark" className="h-16 sm:h-20" />
          <p className="mt-5 max-w-xs text-sm leading-[1.9] text-footer-muted">
            {company.tagline}
          </p>
          <ul className="mt-6 flex items-center gap-3">
            <li>
              <a
                href={company.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid size-9 place-items-center rounded-full border border-footer-muted/40 text-footer-foreground transition-colors hover:bg-brand focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
              >
                <Facebook className="size-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={company.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
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
                <a
                  href={`/servicii#${service.slug}`}
                  className="rounded transition-colors hover:text-footer-foreground focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
                >
                  {service.shortTitle}
                </a>
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
          <div className="mt-6 space-y-3">
            <p className="text-[0.82rem] font-medium tracking-[0.02em] text-footer-muted">
              Protecția consumatorului
            </p>
            <a
              href={company.salPlatformHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-[1rem] focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
            >
              <img
                src="/anpc-sal.webp"
                alt="Platforma SAL online - detalii"
                width="250"
                height="50"
                loading="lazy"
                className="h-auto max-w-[15.625rem] rounded-[1rem] transition-opacity hover:opacity-90"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-footer-muted/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {company.name}. Toate drepturile rezervate.</p>
          <p>
            Website realizat de{" "}
            <a
              href="https://rafaeldev.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-footer-foreground transition-colors hover:text-footer-foreground/85 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
            >
              Rafael.Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
