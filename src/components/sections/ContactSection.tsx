"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
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
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content:
      "Songon Adiopodoumé Km17 (Lot n°318 Ilot 46), Qt Beugré Mambé, Abidjan",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+225 00 00 00 00",
    href: "tel:+22500000000",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@omeryxgroup.com",
    href: "mailto:contact@omeryxgroup.com",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lundi - Vendredi : 8h00 - 18h00",
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'envoi");
      }

      setIsSuccess(true);
      toast.success("Message envoyé avec succès !", {
        description:
          "Nous vous répondrons dans les plus brefs délais.",
      });
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error("Erreur", {
        description:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#EFF6FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
            Contactez-nous
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3A5C] mt-3 mb-5">
            Restons en Contact
          </h2>
          <p className="text-[#374151]/80 text-lg leading-relaxed">
            Vous avez un projet ou une question ? N&apos;hésitez pas à nous
            contacter. Notre équipe est à votre disposition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#1B3A5C] via-[#F59E0B] to-[#1B3A5C]" />
              <CardContent className="p-8">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B3A5C] mb-3">
                      Message Envoyé !
                    </h3>
                    <p className="text-[#374151]/70 max-w-md">
                      Merci pour votre message. Notre équipe vous répondra dans
                      les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm font-medium text-[#1B3A5C]">
                          Nom complet <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="Votre nom complet"
                          {...register("fullName")}
                          className="h-11 rounded-lg border-gray-200 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]/20"
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-500">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-[#1B3A5C]">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          {...register("email")}
                          className="h-11 rounded-lg border-gray-200 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]/20"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-[#1B3A5C]">
                          Téléphone
                        </Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#374151]/50">
                            +225
                          </span>
                          <Input
                            id="phone"
                            placeholder="XX XX XX XX"
                            {...register("phone")}
                            className="h-11 rounded-lg border-gray-200 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]/20 pl-14"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-[#1B3A5C]">
                          Sujet <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          onValueChange={(value) => setValue("subject", value)}
                        >
                          <SelectTrigger className="h-11 rounded-lg border-gray-200 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]/20">
                            <SelectValue placeholder="Sélectionnez un sujet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="eau">
                              Eau Conditionnée
                            </SelectItem>
                            <SelectItem value="immobilier">
                              Immobilier & BTP
                            </SelectItem>
                            <SelectItem value="transport">
                              Transport & Logistique
                            </SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.subject && (
                          <p className="text-xs text-red-500">
                            {errors.subject.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-[#1B3A5C]">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre projet ou votre demande..."
                        rows={5}
                        {...register("message")}
                        className="rounded-lg border-gray-200 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]/20 resize-none"
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#1B3A5C] hover:bg-[#0F2640] text-white font-semibold h-12 px-8 rounded-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
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
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <Card
                  key={item.title}
                  className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#1B3A5C]/10 shrink-0">
                      <item.icon className="h-5 w-5 text-[#1B3A5C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B3A5C] mb-1">
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-[#374151]/70 hover:text-[#1B3A5C] transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm text-[#374151]/70 leading-relaxed">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Map Placeholder */}
              <Card className="border-0 shadow-sm rounded-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-[#1B3A5C] to-[#2A5082] flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-[#F59E0B]" />
                    <p className="text-sm font-medium">Songon Adiopodoumé Km17</p>
                    <p className="text-xs text-white/60">Abidjan, Côte d&apos;Ivoire</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
