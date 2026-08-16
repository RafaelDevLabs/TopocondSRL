import { Send } from "lucide-react";
import type { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollToTopLink } from "@/components/common/ScrollToTopLink";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";

const contactServiceOptions = [
  { value: "cadastru-si-intabulare", label: "Cadastru și Intabulare" },
  { value: "ridicari-topografice", label: "Ridicări Topografice" },
  { value: "consultanta-cadastrala", label: "Consultanță Cadastrală" },
  { value: "dezmembrari-alipiri", label: "Dezmembrări / Alipiri" },
  { value: "trasari-limite", label: "Trasări Limite de Proprietate" },
  { value: "planuri-de-situatie", label: "Planuri de Situație" },
  { value: "alt-serviciu", label: "Alt serviciu / Nu sunt sigur" },
] as const;

export function ContactForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const selectedService =
      contactServiceOptions.find((service) => service.value === values.service)?.label ??
      values.service;

    const whatsappMessage = [
      "Bună ziua! Am completat formularul de contact de pe site.",
      "",
      `Nume: ${values.name}`,
      `Telefon: ${values.phone}`,
      `Email: ${values.email}`,
      `Serviciu: ${selectedService}`,
      `Mesaj: ${values.message}`,
    ].join("\n");

    const whatsappUrl = `${company.whatsappHref}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
      <h2 className="text-xl font-bold text-brand-dark">Trimite-ne un mesaj</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Completează formularul și te contactăm în cel mai scurt timp.
      </p>
      <p className="mt-3 text-xs leading-6 text-muted-foreground">
        Prin folosirea formularului, datele introduse sunt incluse într-un mesaj precompletat care
        se deschide în WhatsApp. Detalii despre prelucrarea datelor găsești în{" "}
        <ScrollToTopLink
          to="/politica-de-confidentialitate"
          className="font-medium text-brand underline-offset-4 hover:underline"
        >
          Politica de confidențialitate
        </ScrollToTopLink>{" "}
        și{" "}
        <ScrollToTopLink
          to="/politica-de-cookies"
          className="font-medium text-brand underline-offset-4 hover:underline"
        >
          Politica de cookies
        </ScrollToTopLink>
        .
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-brand-dark">Nume și prenume</span>
          <Input name="name" placeholder="Numele tău" autoComplete="name" minLength={2} required />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-brand-dark">Telefon</span>
          <Input name="phone" placeholder="07xx xxx xxx" autoComplete="tel" minLength={6} required />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-brand-dark">Email</span>
          <Input
            type="email"
            name="email"
            placeholder="nume@email.ro"
            autoComplete="email"
            required
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-brand-dark">Serviciu dorit</span>
          <select
            name="service"
            required
            defaultValue=""
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              "text-foreground invalid:text-muted-foreground",
            )}
          >
            <option value="" disabled>
              Selectează serviciul
            </option>
            {contactServiceOptions.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-sm font-medium text-brand-dark">Mesaj</span>
        <Textarea
          name="message"
          rows={5}
          placeholder="Spune-ne pe scurt cu ce te putem ajuta"
          minLength={10}
          required
        />
      </label>

      <Button type="submit" className="mt-6 bg-brand text-primary-foreground hover:bg-brand/90">
        <Send className="size-4" aria-hidden="true" />
        Trimite mesajul
      </Button>
    </form>
  );
}
