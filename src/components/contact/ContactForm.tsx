import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const contactServiceOptions = [
  { value: "cadastru-si-intabulare", label: "Cadastru și Intabulare" },
  { value: "ridicari-topografice", label: "Ridicări Topografice" },
  { value: "consultanta-cadastrala", label: "Consultanță Cadastrală" },
  { value: "dezmembrari-alipiri", label: "Dezmembrări / Alipiri" },
  { value: "trasari-limite", label: "Trasări Limite de Proprietate" },
  { value: "planuri-de-situatie", label: "Planuri de Situație" },
  { value: "alt-serviciu", label: "Alt serviciu / Nu sunt sigur" },
] as const;

const schema = z.object({
  name: z.string().min(2, "Introdu numele complet."),
  phone: z.string().min(6, "Introdu un număr de telefon valid."),
  email: z.string().email("Introdu o adresă de email validă."),
  service: z.string().min(1, "Selectează un serviciu."),
  message: z.string().min(10, "Mesajul trebuie să aibă minim 10 caractere."),
});

type FormValues = z.infer<typeof schema>;

/**
 * Formularul este pregătit la nivel de UI și validare.
 * Trimiterea efectivă depinde de adresa finală de email sau de o integrare backend.
 */
export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", service: "", message: "" },
  });

  const onSubmit = () => {
    toast.message("Mesaj pregătit pentru trimitere", {
      description:
        "Formularul este valid, iar conectarea pentru trimiterea efectivă va fi activată după ce primim datele finale de contact.",
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8"
        noValidate
      >
        <h2 className="text-xl font-bold text-brand-dark">Trimite-ne un mesaj</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Completează formularul și te contactăm în cel mai scurt timp.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nume și prenume</FormLabel>
                <FormControl>
                  <Input placeholder="Numele tău" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input placeholder="07xx xxx xxx" autoComplete="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="nume@email.ro" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Serviciu dorit</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectează serviciul" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {contactServiceOptions.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-5">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mesaj</FormLabel>
                <FormControl>
                  <Textarea rows={5} placeholder="Spune-ne pe scurt cu ce te putem ajuta" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="mt-6 bg-brand text-primary-foreground hover:bg-brand/90">
          <Send className="size-4" aria-hidden="true" />
          Trimite mesajul
        </Button>
      </form>
    </Form>
  );
}
