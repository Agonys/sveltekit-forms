<script lang="ts">
  import { Check } from "lucide-svelte";

  export let checked: boolean;
  export let label: string = "";
  export let name: string;
</script>

<label class="flex w-fit cursor-pointer items-center gap-2 text-sm font-medium">
  <input
    type="checkbox"
    {name}
    bind:checked
    class="peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-600 bg-gray-700 drop-shadow checked:border-none checked:bg-blue-600"
  />
  <Check class="absolute hidden h-4 w-4 cursor-pointer peer-checked:block" />
  {#if label}
    {label}
  {:else}
    <slot />
  {/if}
</label>
