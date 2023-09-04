<script>
  let className = "";
  export { className as class };
</script>

<div class={`bg-gray-800 flex flex-col py-6 px-4 rounded-lg drop-shadow-md w-full ${className}`}>
  <slot />
</div>