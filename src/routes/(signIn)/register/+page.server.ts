import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms/server";
import { registerSchema } from "$lib/schema/register";

export const load = (async (event) => {
  const form = await superValidate(registerSchema);

  return { form };
}) satisfies PageServerLoad;
