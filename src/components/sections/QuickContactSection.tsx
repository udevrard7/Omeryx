"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, CheckCircle, Loader2 } from "lucide-react";

/* ──────────────────────── Schema ─────────────────────── */

const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(200, "Le nom est trop long"),
  email: z.string().email("Veuillez entrer un email valide").max(200),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(5000, "Le message est trop long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

/* ──────────────────── Component ──────────────────── */

export default function QuickContactSection(): React.ReactElement {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          subject: "Contact depuis la page d'accueil",
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || "Erreur lors de l'envoi");
      }

      setSubmitStatus("success");
      form.reset();
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text content */}
          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Contactez-nous
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-4xl lg:text-5xl">
              Parlons de votre projet
            </h2>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-[#6B7280] sm:text-lg">
              Remplissez le formulaire ci-contre et notre équipe vous
              répondra dans les plus brefs délais. Nous sommes à votre écoute
              pour concrétiser vos ambitions.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#2563EB]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1B3A5C]">Adresse</p>
                  <p className="text-sm text-[#6B7280]">
                    Songon Adiopodoumé Km17, Lot&nbsp;318 Ilot&nbsp;46, Abidjan, Côte d&apos;Ivoire
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#2563EB]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1B3A5C]">Email</p>
                  <a
                    href="mailto:contact@omeryxgroup.com"
                    className="text-sm text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
                  >
                    contact@omeryxgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form card */}
          <Card className="border border-gray-100 shadow-lg shadow-black/[.04]">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-[#1B3A5C]">
                Envoyez-nous un message
              </CardTitle>
              <CardDescription className="text-sm text-[#6B7280]">
                Tous les champs sont obligatoires.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              {/* Success state */}
              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                    <CheckCircle className="h-7 w-7 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A5C]">
                    Message envoyé !
                  </h3>
                  <p className="max-w-sm text-sm text-[#6B7280]">
                    Merci pour votre message. Notre équipe vous répondra dans les
                    plus brefs délais.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 rounded-lg border-[#2563EB]/20 text-[#2563EB] hover:bg-[#EFF6FF]"
                    onClick={() => setSubmitStatus("idle")}
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    {/* Full Name */}
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                            Nom complet
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Votre nom"
                              className="rounded-lg border-gray-200 focus-visible:ring-[#2563EB]/30 focus-visible:border-[#2563EB]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                            Adresse email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="votre@email.com"
                              className="rounded-lg border-gray-200 focus-visible:ring-[#2563EB]/30 focus-visible:border-[#2563EB]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Décrivez votre projet ou votre demande..."
                              rows={4}
                              className="resize-none rounded-lg border-gray-200 focus-visible:ring-[#2563EB]/30 focus-visible:border-[#2563EB]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Error message */}
                    {submitStatus === "error" && (
                      <p className="text-sm font-medium text-red-500">
                        Une erreur est survenue. Veuillez réessayer.
                      </p>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={submitStatus === "loading"}
                      className="w-full rounded-lg bg-[#2563EB] py-6 text-base font-semibold text-white shadow-sm shadow-[#2563EB]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-md hover:shadow-[#2563EB]/25 disabled:opacity-60"
                    >
                      {submitStatus === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
