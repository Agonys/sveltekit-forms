import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms/server";
import { loginSchema } from "$lib/schema/login";

export const load = (async (event) => {
  const form = await superValidate(loginSchema);

  return { form };
}) satisfies PageServerLoad;
