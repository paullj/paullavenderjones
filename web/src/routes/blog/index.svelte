<script context="module">
  export const load = async function ({ fetch }) {
    const posts = await fetch('/api/blog.json')
      .then(res => res.json())
      .then(({ posts }) => posts);

    return {
      props: {
        posts,
      },
    };
  };
</script>

<script>
  interface Post {
    slug: string;
    title: string;
    publishedAt: string;
  }

  export let posts: Post[];
</script>

<svelte:head>
  <title>Blog | Paul Lavender-Jones</title>
  <meta name="description" content="Blog posts with some of my thoughts." />
</svelte:head>

<h1 class="mb-8 text-2xl text-gray-400 dark:text-gray-600 sm:text-3xl">Recent Posts</h1>

<ul class="space-y-1">
  {#each posts as { slug, title, publishedAt }}
    <li>
      <p
        class="inline text-xs font-bold tracking-widest text-gray-600 uppercase align-text-bottom dark:text-gray-400 sm:text-sm md:text-base"
      >
        {publishedAt}
      </p>
      <a href="blog/{slug}" rel="prefetch">
        <h2
          class="inline ml-2 font-serif text-lg font-normal leading-none tracking-tight break-words dark:text-gray-200 sm:text-xl md:text-2xl hover:underline"
        >
          {title}
        </h2>
      </a>
    </li>
  {/each}
</ul>
