<script>
  import "../app.css";
  import Logo from "$lib/components/Logo.svelte";
</script>

<main class="p-4 h-full flex flex-col items-center justify-center max-w-xl w-full gap-6">
  <Logo />
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    height: 100%;
    background-color: theme('colors.gray.900');
  }
</style>