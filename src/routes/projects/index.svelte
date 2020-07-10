<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`projects.json`)
      .then((r) => r.json())
      .then((projects) => {
        return { projects };
      });
  }
</script>

<script>
  export let projects;
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1 class="mb-4 text-3xl">Recent Projects</h1>

<ul class="grid grid-cols-3 row-gap-4 col-gap-4">
  {#each projects as project}
    <li>
      <a rel="prefetch" href="projects/{project.slug}">
        <h3 class="text-2xl hover:underline">{project.title}</h3>
      </a>
      <p class="text-sm font-thin text-gray-600">{project.description}</p>
    </li>
  {/each}
</ul>
