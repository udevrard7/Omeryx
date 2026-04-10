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
import { Send, CheckCircle, Loader2, Package } from "lucide-react";

/* ──────────────────────── Schema ─────────────────────── */

const quotationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(200),
  email: z.string().email("Veuillez entrer un email valide").max(200),
  origin: z.string().min(2, "L'origine est requise").max(200),
  destination: z
    .string()
    .min(2, "La destination est requise")
    .max(200),
  cargoType: z
    .string()
    .min(2, "Le type de marchandise est requis")
    .max(200),
  weight: z
    .string()
    .min(1, "Le poids estimé est requis")
    .max(100),
  desiredDate: z.string().min(1, "La date souhaitée est requise"),
  notes: z.string().max(2000).optional(),
});

type QuotationFormData = z.infer<typeof quotationSchema>;

/* ──────────────────── Component ──────────────────── */

export default function QuotationForm(): React.ReactElement {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const form = useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      origin: "",
      destination: "",
      cargoType: "",
      weight: "",
      desiredDate: "",
      notes: "",
    },
  });

  async function onSubmit(data: QuotationFormData) {
    setSubmitStatus("loading");

    try {
      const message = [
        `Origin: ${data.origin}`,
        `Destination: ${data.destination}`,
        `Type de marchandise: ${data.cargoType}`,
        `Poids estimé: ${data.weight}`,
        `Date souhaitée: ${data.desiredDate}`,
        data.notes ? `Notes complémentaires: ${data.notes}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          subject: "Demande de cotation — Transport & Logistique",
          message,
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
    <section className="bg-[#EFF6FF] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10">
            <Package className="h-6 w-6 text-[#2563EB]" />
          </div>
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-[#1B3A5C] sm:text-4xl">
            Demander une Cotation
          </h2>
          <p className="text-base text-[#6B7280]">
            Remplissez le formulaire ci-dessous et recevez une proposition
            personnalisée sous 24h.
          </p>
        </div>

        <Card className="border-gray-100 shadow-lg shadow-black/[.04]">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold text-[#1B3A5C]">
              Formulaire de demande de cotation
            </CardTitle>
            <CardDescription className="text-sm text-[#6B7280]">
              Les champs marqués d&apos;un astérisque (*) sont obligatoires.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            {submitStatus === "success" ? (
              <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle className="h-7 w-7 text-emerald-500" />
                </div>
                <h3 className="text-lg font-bold text-[#1B3A5C]">
                  Demande envoyée !
                </h3>
                <p className="max-w-sm text-sm text-[#6B7280]">
                  Merci pour votre demande. Notre équipe logistique vous
                  contactera sous 24h avec une proposition détaillée.
                </p>
                <Button
                  variant="outline"
                  className="mt-2 rounded-lg border-[#2563EB]/20 text-[#2563EB] hover:bg-[#EFF6FF]"
                  onClick={() => setSubmitStatus("idle")}
                >
                  Nouvelle demande
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* Row: Name + Email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                            Nom complet *
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

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                            Email *
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

                  {/* Row: Origin + Destination */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="origin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                            Origine *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ville ou pays de départ"
                              className="rounded-lg border-gray-200 focus-visible:ring-[#2563EB]/30 focus-visible:border-[#2563EB]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="destination"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                            Destination *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ville ou pays d'arrivée"
                              className="rounded-lg border-gray-200 focus-visible:ring-[#2563EB]/30 focus-visible:border-[#2563EB]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Row: Cargo Type + Weight + Date */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="cargoType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                            Type de marchandise *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: Électronique"
                              className="rounded-lg border-gray-200 focus-visible:ring-[#2563EB]/30 focus-visible:border-[#2563EB]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="weight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                            Poids estimé *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ex: 500 kg"
                              className="rounded-lg border-gray-200 focus-visible:ring-[#2563EB]/30 focus-visible:border-[#2563EB]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="desiredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                            Date souhaitée *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              className="rounded-lg border-gray-200 focus-visible:ring-[#2563EB]/30 focus-visible:border-[#2563EB]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Notes */}
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#1B3A5C]">
                          Notes complémentaires
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Détails supplémentaires sur votre besoin (dimensions, contraintes spéciales...)"
                            rows={3}
                            className="resize-none rounded-lg border-gray-200 focus-visible:ring-[#2563EB]/30 focus-visible:border-[#2563EB]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Error */}
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
                        Envoyer la demande
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
