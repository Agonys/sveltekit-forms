<script lang="ts">
  import {Check} from "lucide-svelte";

  export let checked: boolean;
  export let label: string = "";
</script>

<label class="flex gap-2 font-medium text-sm items-center cursor-pointer w-fit">
  <input
    type="checkbox"
    bind:checked
    class="peer appearance-none w-4 h-4 bg-gray-700 rounded-sm drop-shadow border border-gray-600 checked:bg-blue-600 checked:border-none cursor-pointer"
  />
  <Check class="absolute w-4 h-4 hidden peer-checked:block cursor-pointer" />
  {#if label}
    {label}
  {:else}
    <slot />
  {/if}
</label>