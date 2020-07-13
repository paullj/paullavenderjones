<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then(({ posts, tags }) => {
        return { posts, tags };
      });
  }
</script>

<script>
  export let posts;
  export let tags;

  let filter = null;
</script>

<svelte:head>
  <title>Blog</title>
  <meta name="description" content="Paul Lavender-Jones blog posts" />
</svelte:head>

<h1 class="mb-2 text-2xl sm:text-3xl">Recent Posts</h1>

<ul class="mb-4 text-sm text-gray-500">
  {#each Object.keys(tags) as tag}
    <li class="inline pr-1 {filter === tag ? 'text-red-500' : ''}">
      <button
        on:click={() => {
          filter = filter === tag ? null : tag;
        }}>
        #{tag}
      </button>
    </li>
  {/each}
</ul>

<ul class="space-y-1">
  {#if filter}
    {#each tags[filter] as postIndexes}
      <li>
        <p
          class="inline text-xs font-bold tracking-widest text-gray-600 uppercase">
          {posts[postIndexes].date}
        </p>
        <a rel="prefetch" href="blog/{posts[postIndexes].slug}">
          <h2
            class="inline ml-2 font-serif text-lg font-normal leading-none tracking-tight break-words hover:underline ">
            {posts[postIndexes].title}
          </h2>
        </a>
      </li>
    {/each}
  {:else}
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
  {/if}

</ul>
