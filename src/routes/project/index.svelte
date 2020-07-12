<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`project.json`)
      .then((r) => r.json())
      .then((projects) => {
        return { projects };
      });
  }
</script>

<script>
  export let projects;
</script>

<style>
  .background-clip-text {
    background-clip: text;
    -webkit-background-clip: text;
  }
</style>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1 class="mb-4 text-2xl sm:text-3xl">Recent Projects</h1>

<ul class="grid grid-cols-1 row-gap-4 col-gap-4 md:grid-cols-2">
  {#each projects as project, index}
    <li class="h-full">
      <div
        class="bg-center bg-no-repeat bg-cover background-clip-text"
        style="{project.thumbnail ? 'color: rgba(0, 0, 0, 0.25);' : 'color: black'}
        background-image: url({project.thumbnail})">
        <p class="text-xs font-bold tracking-widest uppercase opacity-75">
          {project.date}
        </p>
        <a rel="prefetch" href="project/{project.slug}">
          <h3
            class="font-serif text-2xl font-bold leading-none tracking-tight break-words hover:underline sm:text-4xl lg:text-5xl ">
            {project.title}
          </h3>
        </a>
      </div>
      <p class="mt-2 mb-8 text-sm font-thin text-gray-900">
        {project.description}
      </p>
    </li>
  {:else}
    <h3
      class="font-serif text-lg font-normal leading-none tracking-tight break-words">
      No projects.
    </h3>
  {/each}
</ul>
