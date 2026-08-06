import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/brand/Logo";
import { services } from "@/data/services";
import { company, usefulLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo tone="dark" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-footer-muted">
            {company.tagline}
          </p>
          <ul className="mt-5 flex items-center gap-3">
            <li>
              {/* PLACEHOLDER — link social de confirmat */}
              <a
                href="#"
                aria-label="Facebook"
                className="grid size-9 place-items-center rounded-full border border-footer-muted/40 text-footer-foreground transition-colors hover:bg-brand focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
              >
                <Facebook className="size-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              {/* PLACEHOLDER — link social de confirmat */}
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
          <h2 id="footer-servicii" className="text-sm font-semibold">
            Servicii
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-footer-muted">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/servicii"
                  className="rounded transition-colors hover:text-footer-foreground focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-utile">
          <h2 id="footer-utile" className="text-sm font-semibold">
            Informații utile
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-footer-muted">
            {usefulLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="rounded transition-colors hover:text-footer-foreground focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              {/* PLACEHOLDER — pagina de politică de confidențialitate */}
              <span>Politică de confidențialitate</span>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-footer-muted">
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
