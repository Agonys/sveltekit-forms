<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import TextInput from "$lib/components/Inputs/TextInput.svelte";
  import {superForm} from "sveltekit-superforms/client";
  import CheckboxInput from "$lib/components/Inputs/CheckboxInput.svelte";
  import Button from "$lib/components/Button.svelte";
  import {errors as schemaErrors, registerSchema} from "$lib/schema/register";

  import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";

  export let data;
  const {form, errors, enhance} = superForm(data?.form, {
    taintedMessage: false,
    validators: registerSchema
      .refine(({password, confirmPassword}) => password === confirmPassword, {
        message: schemaErrors.confirmPassword.default,
        path: ["confirmPassword"]
      }),
  });

  $: {
    const values = Object.entries($errors);
    const temp = {};
    for (const [key, value] of values) {
      if (value?.length) {
        temp[key] = value;
      }
    }

    console.log(temp);
  }
</script>

<SuperDebug class="w-full" data={$form}/>
<Card title="Register" class="gap-8">
  <div class="flex flex-col gap-4">
    <form method="POST" class="flex flex-col gap-4" use:enhance>
      <TextInput
        type="text"
        label="username"
        placeholder="Enter your username..."
        bind:value={$form.username}
        error={$errors.username?.[0]}
      />
      <TextInput
        type="text"
        label="Email"
        placeholder="Enter your email..."
        bind:value={$form.email}
        error={$errors.email?.[0]}
      />
      <TextInput
        type="password"
        label="Password"
        placeholder="Enter your password..."
        bind:value={$form.password}
        error={$errors.password?.[0]}
      />
      <TextInput
        type="password"
        label="Confirm Password"
        placeholder="Confirm your password..."
        bind:value={$form.confirmPassword}
        error={$errors.confirmPassword?.[0]}
        class="mb-2"
      />
      <CheckboxInput
        bind:checked={$form.agreement}
      >
        I agree to the
        <a href="#">Terms and Conditions</a>
      </CheckboxInput>
      <Button type="submit" variant="primary-full">Register</Button>
    </form>
    <div class="w-full bg-gray-700 my-4 h-[1px]"></div>
    <p class="text-sm text-center">
      Already have an account?
      <a href="/login">Sign in</a>
    </p>
  </div>
</Card>