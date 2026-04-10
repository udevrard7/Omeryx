"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  SUBJECT_LABELS,
  type ContactFormData,
} from "@/types/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Send,
  CheckCircle,
  Loader2,
  MapPin,
  Mail,
  User,
  Phone,
  Clock,
  ArrowRight,
} from "lucide-react";

/* ───────────────────── Subject Options ───────────────────── */

const SUBJECT_OPTIONS = Object.entries(SUBJECT_LABELS).map(([value, label]) => ({
  value,
  label,
}));

/* ──────────────────── Component ──────────────────── */

export default function ContactPage(): React.ReactElement {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: undefined,
      message: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
    <main>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-pattern-dots" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Contact
            </span>
            <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Prenons Contact
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Vous avez un projet, une question ou une demande de cotation ?
              Notre équipe est à votre écoute pour vous accompagner.
            </p>
          </div>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full text-white"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60L1440 60L1440 0C1200 40 960 55 720 45C480 35 240 10 0 30L0 60Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5 lg:gap-16">
            {/* ── Left: Contact Info (2 cols) ── */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-3xl">
                  Nos Coordonnées
                </h2>
                <p className="text-base leading-relaxed text-[#6B7280]">
                  N&apos;hésitez pas à nous contacter par le moyen de votre
                  choix. Nous répondons sous 24h ouvrées.
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-[#F9FAFB] p-4 transition-colors hover:border-[#2563EB]/20 hover:bg-[#EFF6FF]/50">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                    <MapPin className="h-5 w-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1B3A5C]">
                      Adresse
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
                      Songon Adiopodoumé Km17, Lot&nbsp;318 Ilot&nbsp;46, Abidjan,
                      CI
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-[#F9FAFB] p-4 transition-colors hover:border-[#2563EB]/20 hover:bg-[#EFF6FF]/50">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                    <Mail className="h-5 w-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1B3A5C]">
                      Email
                    </p>
                    <a
                      href="mailto:contact@omeryxgroup.com"
                      className="mt-1 text-sm text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
                    >
                      contact@omeryxgroup.com
                    </a>
                  </div>
                </div>

                {/* Manager */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-[#F9FAFB] p-4 transition-colors hover:border-[#2563EB]/20 hover:bg-[#EFF6FF]/50">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                    <User className="h-5 w-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1B3A5C]">
                      Gérant
                    </p>
                    <p className="mt-1 text-sm text-[#6B7280]">
                      M. SANOGO ABOU
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-[#F9FAFB] p-4 transition-colors hover:border-[#2563EB]/20 hover:bg-[#EFF6FF]/50">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                    <Clock className="h-5 w-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1B3A5C]">
                      Horaires
                    </p>
                    <p className="mt-1 text-sm text-[#6B7280]">
                      Lun – Ven : 08h00 – 18h00
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-8 rounded-xl bg-[#1B3A5C] p-6">
                <h3 className="mb-2 text-lg font-bold text-white">
                  Besoin d&apos;une cotation rapide ?
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-white/60">
                  Pour les demandes de transport, utilisez notre formulaire de
                  cotation dédié pour une réponse plus rapide.
                </p>
                <Button
                  asChild
                  className="w-full rounded-lg bg-[#2563EB] text-sm font-semibold text-white shadow-sm shadow-[#2563EB]/20 transition-all hover:bg-[#1D4ED8] hover:shadow-md hover:shadow-[#2563EB]/25"
                >
                  <a href="/activites/transport">
                    Formulaire de cotation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* ── Right: Contact Form (3 cols) ── */}
            <div className="lg:col-span-3">
              <Card className="border border-gray-100 shadow-lg shadow-black/[.04]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-[#1B3A5C]">
                    Envoyez-nous un message
                  </CardTitle>
                  <CardDescription className="text-sm text-[#6B7280]">
                    Remplissez le formulaire ci-dessous et nous vous répondrons
                    dans les plus brefs délais.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  {/* Success state */}
                  {submitStatus === "success" ? (
                    <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                        <CheckCircle className="h-8 w-8 text-emerald-500" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1B3A5C]">
                        Message envoyé !
                      </h3>
                      <p className="max-w-sm text-sm text-[#6B7280]">
                        Merci pour votre message. Notre équipe vous répondra dans
                        les plus brefs délais, généralement sous 24h ouvrées.
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
                        {/* Row: Full Name + Email */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {/* Full Name */}
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                                  Nom complet{" "}
                                  <span className="text-red-500">*</span>
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
                                  Email <span className="text-red-500">*</span>
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
                        </div>

                        {/* Row: Phone + Subject */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {/* Phone */}
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                                  Téléphone
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+225 00 00 00 00"
                                    className="rounded-lg border-gray-200 focus-visible:ring-[#2563EB]/30 focus-visible:border-[#2563EB]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Subject */}
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                                  Sujet <span className="text-red-500">*</span>
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="rounded-lg border-gray-200 focus:ring-[#2563EB]/30 focus:border-[#2563EB]">
                                      <SelectValue placeholder="Sélectionnez un sujet" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {SUBJECT_OPTIONS.map((opt) => (
                                      <SelectItem key={opt.value} value={opt.value}>
                                        {opt.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Message */}
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex items-center justify-between">
                                <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                                  Message <span className="text-red-500">*</span>
                                </FormLabel>
                                <span className="text-xs text-[#9CA3AF]">
                                  {field.value?.length || 0} / 5000
                                </span>
                              </div>
                              <FormControl>
                                <Textarea
                                  placeholder="Décrivez votre projet ou votre demande en détail..."
                                  rows={6}
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
                          <div className="rounded-lg border border-red-100 bg-red-50 p-3">
                            <p className="text-sm font-medium text-red-600">
                              Une erreur est survenue lors de l&apos;envoi.
                              Veuillez réessayer.
                            </p>
                          </div>
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

                        <p className="text-center text-xs text-[#9CA3AF]">
                          En soumettant ce formulaire, vous acceptez que vos
                          données soient traitées dans le cadre de votre demande.
                        </p>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map / Bottom CTA Section ── */}
      <section className="bg-[#F9FAFB] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#EFF6FF] p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:p-14">
            <div className="mb-6 lg:mb-0 lg:max-w-lg">
              <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-3xl">
                Vous préférez nous rendre visite ?
              </h2>
              <p className="text-base leading-relaxed text-[#6B7280]">
                Notre bureau est ouvert du lundi au vendredi, de 8h à 18h.
                Venez nous rencontrer pour discuter de votre projet en personne.
              </p>
            </div>
            <Button
              asChild
              className="shrink-0 rounded-lg bg-[#1B3A5C] px-8 py-6 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#0F2640] hover:shadow-md"
            >
              <a
                href="https://maps.google.com/?q=Songon+Adiopodoume+Km17+Abidjan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Voir sur Google Maps
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
