<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`article.json`)
      .then((r) => r.json())
      .then((articles) => {
        return { articles };
      });
  }
</script>

<script>
  export let articles;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1 class="mb-4 text-2xl sm:text-3xl">Recent Articles</h1>

<ul>
  {#each articles as article}
    <li class="space-y-4">
      <p
        class="inline text-xs font-bold tracking-widest text-gray-600 uppercase">
        {article.date}
      </p>
      <a rel="prefetch" href="article/{article.slug}">
        <h3
          class="inline ml-2 font-serif text-lg font-normal leading-none tracking-tight break-words hover:underline ">
          {article.title}
        </h3>
      </a>
    </li>
  {/each}
</ul>
