<script lang="ts">
  let className = "";
  export let title = "";
  export { className as class };
</script>

<div class={`bg-gray-800 flex flex-col py-6 px-4 rounded-lg drop-shadow-md w-full ${className}`}>
  {#if title.trim()}
    <h2 class="text-center">{title}</h2>
  {/if}
  <slot />
</div>