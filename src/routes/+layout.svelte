<script>
  import "../app.css";
  import Logo from "$lib/components/Logo.svelte";
</script>

<main class="flex h-full w-full max-w-xl flex-col items-center justify-center gap-6 p-4">
  <Logo />
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    height: 100%;
    background-color: theme("colors.gray.900");
  }
</style>
