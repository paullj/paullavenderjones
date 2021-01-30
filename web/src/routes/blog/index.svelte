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
  <title>Blog</title>
</svelte:head>

<h1 class="mb-2 text-2xl sm:text-3xl">Recent Posts</h1>

<ul class="space-y-1">
  {#each posts as { slug, title, publishedAt }}
    <li>
      <p class="inline text-xs font-bold tracking-widest text-gray-600 uppercase">{publishedAt}</p>
      <a href="blog/{slug}" rel="prefetch">
        <h2 class="inline ml-2 font-serif text-lg font-normal leading-none tracking-tight break-words hover:underline">
          {title}
        </h2>
      </a>
    </li>
  {/each}
</ul>
