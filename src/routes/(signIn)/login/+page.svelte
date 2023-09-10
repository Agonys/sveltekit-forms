<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import TextInput from "$lib/components/Inputs/TextInput.svelte";
  import { superForm } from "sveltekit-superforms/client";
  import CheckboxInput from "$lib/components/Inputs/CheckboxInput.svelte";
  import Button from "$lib/components/Button.svelte";
  import { loginSchema } from "$lib/schema/login";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { form, errors, enhance } = superForm(data?.form, {
    taintedMessage: false,
    validators: loginSchema,
  });
</script>

<Card
  class="gap-8"
  title="Log in"
>
  <div class="flex flex-col gap-4">
    <form
      method="POST"
      use:enhance
      class="flex flex-col gap-4"
    >
      <TextInput
        label="Username"
        type="text"
        name="username"
        placeholder="Enter your username..."
        bind:value={$form.username}
        error={$errors.username?.[0]}
      />
      <TextInput
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password..."
        bind:value={$form.password}
        error={$errors.password?.[0]}
      />
      <CheckboxInput
        label="Remember me"
        name="rememberMe"
        bind:checked={$form.rememberUser}
      />
      <Button
        type="submit"
        variant="primary-full"
      >
        Log in
      </Button>
    </form>
    <div class="my-4 h-[1px] w-full bg-gray-700"></div>
    <p class="text-center text-sm">
      Don't have an account?
      <a href="/register">Sign up</a>
    </p>
  </div>
</Card>
