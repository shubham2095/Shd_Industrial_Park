import { z } from "zod";

// Keep these rules in step with the yup schema in client/src/components/common/LeadForm.jsx.
export const leadSchema = z.object({
  name: z
    .string({ error: "Please share your name." })
    .trim()
    .min(1, "Please share your name.")
    .max(100, "Name must be 100 characters or fewer."),
  mobile: z
    .string({ error: "Enter a valid 10-digit mobile number." })
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number."),
  email: z
    .string({ error: "Enter a valid email address." })
    .trim()
    .max(254, "Enter a valid email address.")
    .refine((value) => !value || z.email().safeParse(value).success, "Enter a valid email address.")
    .default(""),
});
