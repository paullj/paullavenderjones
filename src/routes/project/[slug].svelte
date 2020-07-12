<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`project/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { project: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Content from "../../components/Content.svelte";

  export let project;
</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>

<div class="mb-4 sm:mb-8">
  <h1 class="mb-4 font-serif text-5xl font-bold leading-none tracking-tight">
    {project.title}
  </h1>
  <p class="mb-2 font-sans text-base font-thin sm:text-lg">
    {project.description}
  </p>
  <p class="text-xs font-bold tracking-widest text-gray-600 uppercase">
    {project.date}
  </p>
</div>

<Content>
  {@html project.content}
</Content>
