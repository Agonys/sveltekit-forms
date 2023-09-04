<script lang="ts">
  export let label: string = "";
  export let placeholder: string;
  export let type: "text" | "email" | "password" = "text";
  export let value: string;
</script>

<label class="flex flex-col gap-2 font-medium text-sm capitalize">
  {label}
  <input type="text" bind:value placeholder={placeholder} class="px-4 py-3 bg-gray-700 rounded-lg border-gray-600 border drop-shadow focus:outline-0" />
</label>
