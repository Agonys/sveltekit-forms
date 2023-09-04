import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
