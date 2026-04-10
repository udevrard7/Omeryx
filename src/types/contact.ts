import { z } from "zod";

/* ───────────────────── Contact Schema ───────────────────── */

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Nom requis (2 caractères minimum)")
    .max(200, "Le nom est trop long"),
  email: z
    .string()
    .email("Email invalide")
    .max(200, "L'email est trop long"),
  phone: z
    .string()
    .max(20, "Le numéro est trop long")
    .optional()
    .or(z.literal("")),
  subject: z.enum(["eau", "immobilier", "transport", "autre"], {
    errorMap: () => ({ message: "Veuillez sélectionner un sujet" }),
  }),
  message: z
    .string()
    .min(20, "Message trop court (20 caractères minimum)")
    .max(5000, "Le message est trop long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/* ───────────────────── Subject Labels ───────────────────── */

export const SUBJECT_LABELS: Record<ContactFormData["subject"], string> = {
  eau: "Eau Conditionnée",
  immobilier: "Immobilier & BTP",
  transport: "Transport & Logistique",
  autre: "Autre demande",
};
