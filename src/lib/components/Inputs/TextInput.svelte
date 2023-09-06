<script lang="ts">
  import {AlertCircle} from "lucide-svelte";

  export let label: string = "";
  export let placeholder: string;
  export let type: "text" | "email" | "password" = "text";
  export let value: string;
  export let name: string = "";
  export let error: string | null = null;
  let className = "";
  export { className as class };

  function typeAction(node) {
    node.type = type;
  }
</script>

<label class="flex flex-col gap-2 font-medium text-sm">
  {label}
  <input use:typeAction bind:value name={name} placeholder={placeholder} class={`px-4 py-3 bg-gray-700 rounded-lg border-gray-600 border drop-shadow focus:outline-0 ${className}`} />
  {#if error}
    <p class="text-red-600 flex gap-2 font-normal"><AlertCircle size="16" class="flex-shrink-0 mt-0.5" />{error}</p>
  {/if}
</label>
