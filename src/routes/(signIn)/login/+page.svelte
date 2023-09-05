<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import TextInput from "$lib/components/Inputs/TextInput.svelte";
  import {superForm} from "sveltekit-superforms/client";
  import CheckboxInput from "$lib/components/Inputs/CheckboxInput.svelte";
  import Button from "$lib/components/Button.svelte";
  import {loginSchema} from "$lib/schema/login";

  export let data;
  const {form, errors, enhance} = superForm(data?.form, {
    taintedMessage: false,
    validators: loginSchema,
  });
</script>

<Card class="gap-8" title="Log in">
  <div class="flex flex-col gap-4">
    <form method="POST" use:enhance class="flex flex-col gap-4">
      <TextInput
        label="Username"
        type="text"
        placeholder="Enter your username..."
        bind:value={$form.username}
        error={$errors.username?.[0]}
      />
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter your password..."
        bind:value={$form.password}
        error={$errors.password?.[0]}
      />
      <CheckboxInput
        bind:checked={$form.rememberUser}
        label="Remember me"
      />
      <Button
        type="submit"
        variant="primary-full"
      >
        Log in
      </Button>
    </form>
    <div class="w-full bg-gray-700 h-[1px] my-4"></div>
    <p class="text-sm text-center">
      Don't have an account?
      <a href="/register">Sign up</a>
    </p>
  </div>
</Card>
