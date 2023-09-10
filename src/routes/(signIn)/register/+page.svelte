<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import TextInput from "$lib/components/Inputs/TextInput.svelte";
  import { superForm } from "sveltekit-superforms/client";
  import CheckboxInput from "$lib/components/Inputs/CheckboxInput.svelte";
  import Button from "$lib/components/Button.svelte";
  import { errors as schemaErrors, registerSchema } from "$lib/schema/register";

  export let data;
  const { form, errors, enhance, allErrors, submitting } = superForm(data?.form, {
    validationMethod: "onblur",
    taintedMessage: false,
    validators: registerSchema.refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: schemaErrors.confirmPassword.default,
      path: ["confirmPassword"],
    }),
    resetForm: true,
    onResult: ({ result }) => {
      if (result.status !== 200) {
        console.log("unable to register a user");
        return;
      }

      console.log("user registered successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  let isSubmitDisabled = true;
  $: isSubmitDisabled = !Object.values($form).every(Boolean) || $allErrors.length > 0 || $submitting;
</script>

<Card
  title="Register"
  class="gap-8"
>
  <div class="flex flex-col gap-4">
    <form
      method="POST"
      class="flex flex-col gap-4"
      use:enhance
    >
      <TextInput
        type="text"
        label="Username"
        name="username"
        placeholder="Enter your username..."
        bind:value={$form.username}
        error={$errors.username?.[0]}
      />
      <TextInput
        type="text"
        label="Email"
        name="email"
        placeholder="Enter your email..."
        bind:value={$form.email}
        error={$errors.email?.[0]}
      />
      <TextInput
        type="password"
        label="Password"
        name="password"
        placeholder="Enter your password..."
        bind:value={$form.password}
        error={$errors.password?.[0]}
      />
      <TextInput
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        placeholder="Confirm your password..."
        bind:value={$form.confirmPassword}
        error={$errors.confirmPassword?.[0]}
        class="mb-2"
      />
      <CheckboxInput
        name="agreement"
        bind:checked={$form.agreement}
      >
        I agree to the
        <a href="/terms-of-service">Terms of Service</a>
      </CheckboxInput>
      <Button
        type="submit"
        disabled={isSubmitDisabled}
        variant="primary-full">Register</Button
      >
    </form>
    <div class="my-4 h-[1px] w-full bg-gray-700"></div>
    <p class="text-center text-sm">
      Already have an account?
      <a href="/login">Sign in</a>
    </p>
  </div>
</Card>
