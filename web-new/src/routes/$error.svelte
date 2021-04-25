<script>
  export let status;
  export let error;
  const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div>
  <h1 class="font-serif font-black text-9xl">{status}</h1>
  <p class="mt-6 text-2xl font-medium text-gray-600">{error.message}</p>
</div>

{#if dev && error.stack}
  <pre class="px-4 pt-4 pb-12 mt-12 overflow-y-auto bg-gray-200 rounded-lg shadow-inner">{error.stack}</pre>
{/if}
<div class="mt-8">
  <a href="/" class="text-yellow-500 border-b-2 border-yellow-500 border-dotted">Back to home</a>
</div>
