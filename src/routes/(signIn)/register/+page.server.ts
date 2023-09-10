import type { PageServerLoad } from "./$types";
import { message, superValidate } from "sveltekit-superforms/server";
import { registerSchema } from "$lib/schema/register";
import { fail, type Actions, json } from "@sveltejs/kit";

export const load = async () => {
  const form = await superValidate(registerSchema);
  return { form };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, registerSchema);
    console.log("actions", form);

    if (!form.valid) {
      return fail(400, { form });
    }

    return { form, status: 200, message: "Registered successfully!" };
  },
};
