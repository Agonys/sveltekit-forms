<script lang="ts">
type ButtonVariant =
  | "primary"
  | "secondary"
  | "primary-full"
  | "secondary-full"
  | "outline"
  | "disabled";
type ButtonType = "button" | "submit" | "reset";
export let variant: ButtonVariant = "primary";
export let type: ButtonType = "button";
export let disabled = false;

const typeClasses: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 hover:brightness-90 w-fit",
  secondary: "bg-gray-600 hover:brightness-90 w-fit",
  outline: "bg-transparent border border-white w-fit",
  "primary-full": "bg-blue-600 hover:brightness-90 w-full",
  "secondary-full": "bg-gray-600 hover:brightness-90 w-full",
  disabled: "bg-gray-400 cursor-not-allowed",
};

let finalVariant: ButtonVariant;
$: finalVariant = disabled ? "disabled" : variant;

function typeAction(node: HTMLButtonElement) {
  node.type = type;
}
</script>

<button
  use:typeAction
  {disabled}
  class="{`rounded-lg bg-blue-600 px-8 py-2.5 text-center text-white outline-0 ${typeClasses[finalVariant]}`}"
>
  <slot />
</button>
