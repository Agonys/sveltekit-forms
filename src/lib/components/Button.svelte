<script lang="ts">
  type ButtonType = "primary" | "secondary" | "primary-full" | "secondary-full" | "outline";
  export let variant: ButtonType = "primary";
  export let type: "" | "submit" = "";

  const typeClasses: Record<ButtonType, string> = {
    primary: "bg-blue-600 hover:brightness-90 w-fit",
    secondary: "bg-gray-600 hover:brightness-90 w-fit",
    outline: "bg-transparent border border-white w-fit",
    "primary-full": "bg-blue-600 hover:brightness-90 w-full",
    "secondary-full": "bg-gray-600 hover:brightness-90 w-full",
  };

  function typeAction(node) {
    node.type = type;
  }
</script>

<button use:typeAction class={`outline-0 py-2.5 px-8 bg-blue-600 text-center rounded-lg text-white ${typeClasses[variant]}`}>
  <slot />
</button>