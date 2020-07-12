<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
  <meta name="description" content="Paul Lavender-Jones blog posts" />
</svelte:head>

<h1 class="mb-4 text-2xl sm:text-3xl">Recent Posts</h1>

<ul class="space-y-1">
  {#each posts as post}
    <li>
      <p
        class="inline text-xs font-bold tracking-widest text-gray-600 uppercase">
        {post.date}
      </p>
      <a rel="prefetch" href="blog/{post.slug}">
        <h2
          class="inline ml-2 font-serif text-lg font-normal leading-none tracking-tight break-words hover:underline ">
          {post.title}
        </h2>
      </a>
    </li>
  {:else}
    <h2
      class="font-serif text-lg font-normal leading-none tracking-tight break-words">
      No posts.
    </h2>
  {/each}
</ul>
