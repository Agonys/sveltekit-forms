<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import TextInput from "$lib/components/Inputs/TextInput.svelte";
  import type {PageData} from "./$types";
  import {superForm} from "sveltekit-superforms/client";
  import CheckboxInput from "$lib/components/Inputs/CheckboxInput.svelte";
  import Button from "$lib/components/Button.svelte";
  import {z} from "zod";

  const errorMessages = {
    username: "Username must be between 3-32 characters and contains only alphanumerics."
  }

  export let data: PageData;
  const {form, errors, enhance} = superForm(data.form, {
    taintedMessage: false,
    validators: z.object({
      username: z.string()
        .min(3, errorMessages.username)
        .max(32, errorMessages.username)
        .regex(/^[a-zA-Z0-9]+$/, errorMessages.username),
    }),
  });

  $: console.log($form, $errors);
</script>

<Card class="gap-8">
  <h2 class="text-center">Log in</h2>
  <div class="flex flex-col gap-4">
    <form method="POST" use:enhance class="flex flex-col gap-4">
      <TextInput label="Username" type="text" placeholder="Enter your username..." bind:value={$form.username}/>
      <TextInput label="Password" type="text" placeholder="Enter your password..." bind:value={$form.password} errors={$errors.password}/>
      <CheckboxInput bind:checked={$form.rememberUser} placeholder="Remember me" />
      <Button type="submit">Log in</Button>
    </form>
    <div class="w-full bg-gray-700 h-[1px] my-4"></div>
    <p class="text-sm text-center">Don't have an account? <a href="/register" class="text-blue-500 hover:underline">Sign up</a></p>
  </div>
</Card>
