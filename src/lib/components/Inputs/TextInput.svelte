<script lang="ts">
  import { AlertCircle } from "lucide-svelte";

  export let label: string = "";
  export let placeholder: string;
  export let type: "text" | "email" | "password" = "text";
  export let value: string;
  export let name: string;
  export let error: string | null = null;
  let className = "";
  export { className as class };

  function typeAction(node: HTMLInputElement) {
    node.type = type;
  }
</script>

<label class="flex flex-col gap-2 text-sm font-medium">
  {label}
  <input
    use:typeAction
    bind:value
    {name}
    {placeholder}
    class={`rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 drop-shadow focus:outline-0 ${className}`}
  />
  {#if error}
    <p class="flex gap-2 font-normal text-red-600">
      <AlertCircle
        size="16"
        class="mt-0.5 flex-shrink-0"
      />{error}
    </p>
  {/if}
</label>
