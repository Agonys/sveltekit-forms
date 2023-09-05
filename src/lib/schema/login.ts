import { z } from "zod";

const errorMessages = {
  username: "Username cannot be empty.",
  password: "Password cannot be empty.",
};

export const loginSchema = z.object({
  username: z.string().min(1, errorMessages.username),
  password: z.string().min(1, errorMessages.password),
  rememberUser: z.boolean(),
});

export type LoginSchema = z.input<typeof loginSchema>;
