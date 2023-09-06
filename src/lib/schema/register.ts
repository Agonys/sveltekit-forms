import { z } from "zod";

export const errors = {
  username: {
    required: "Username is required.",
    default:
      "Username must be between 3-32 characters and contains only alphanumerics.",
  },
  email: {
    required: "Email is required.",
    default: "Email must be a valid address.",
  },
  password: {
    required: "Password is required.",
    default:
      "Password must be at least 8 characters (uppercase and lowercase), 1 digit and 1 special character.",
  },
  confirmPassword: {
    required: "Confirm password is required.",
    default: "Passwords do not match.",
  },
};

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registerSchema = z.object({
  username: z
    .string({ required_error: errors.username.required })
    .min(3, errors.username.default)
    .max(32, errors.username.default)
    .regex(/^[a-zA-Z0-9]+$/, errors.username.default)
    .trim(),
  email: z
    .string({ required_error: errors.email.required })
    .email(errors.email.default),
  password: z
    .string({ required_error: errors.password.required })
    .min(8, errors.password.default)
    .max(32, errors.password.default)
    .regex(passwordRegex, errors.password.default)
    .trim(),
  confirmPassword: z
    .string({ required_error: errors.confirmPassword.required })
    .trim(),
  agreement: z.literal<boolean>(true),
});

export type RegisterSchema = z.input<typeof registerSchema>;
