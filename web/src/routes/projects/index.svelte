<script context="module">
  export const load = async ({ fetch }) => {
    const projects = await fetch('/api/projects.json')
      .then(res => res.json())
      .then(({ projects }) => projects);

    return {
      props: {
        projects,
      },
    };
  };
</script>

<script>
  interface Project {
    slug: string;
    title: string;
    coverImage: string;
    description: string;
    publishedAt: string;
  }
  export let projects: Project[];
</script>

<svelte:head>
  <title>Projects | Paul Lavender-Jones</title>
  <meta name="description" content="Some of my past projects and how I made them." />
</svelte:head>

<h1 class="mb-8 text-2xl text-gray-400 dark:text-gray-600 sm:text-3xl">Recent Projects</h1>

<ul class="grid grid-cols-1 gap-y-6 gap-x-4 row">
  {#each projects as { title, slug, publishedAt, description, coverImage }}
    <li class="h-full">
      <div
        class="inline-block text-gray-800   dark:text-gray-300
        {coverImage
          ? 'dark:text-opacity-50 text-opacity-25 bg-center bg-no-repeat bg-cover bg-clip-text'
          : ' text-opacity-100'}"
        style={coverImage ? `background-image: url(${coverImage})` : ''}
      >
        <p class="text-xs font-bold tracking-widest text-opacity-50 uppercase dark:text-gray-400 md:text-sm">
          {publishedAt}
        </p>
        <a rel="prefetch" href="projects/{slug}">
          <h2 class="font-serif text-3xl font-bold leading-none tracking-tight break-words sm:text-4xl md:text-6xl">
            <span class="no-underline hover:underline">
              {title}
            </span>
          </h2>
        </a>
      </div>
      {#if description}
        <p class="pr-4 mt-2 mb-8 text-sm font-light text-gray-900 dark:text-gray-400 md:text-base">
          {description}
        </p>
      {/if}
    </li>
  {:else}
    <h2 class="font-serif text-lg leading-none tracking-tight break-words font-lg">No projects.</h2>
  {/each}
</ul>
