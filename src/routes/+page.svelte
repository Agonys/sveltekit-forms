<script>
  import Card from "$lib/components/Card.svelte";
  import Button from "$lib/components/Button.svelte";
</script>

<Card>
  <div class="flex flex-col gap-8">
    <a href="/login"><Button type="primary-full">Sign in</Button></a>
    <a href="/register"><Button type="primary-full">Create Account</Button></a>
  </div>
</Card>