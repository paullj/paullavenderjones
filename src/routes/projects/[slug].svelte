<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`projects/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { project: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import MarkdownContent from "../../components/MarkdownContent.svelte";

  export let project;
</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>

<div class="mb-4">
  <h1 class="font-serif text-5xl font-bold tracking-tight">{project.title}</h1>
  <span class="font-sans text-lg font-light">{project.description}</span>
</div>
<span>{project.date}</span>
<MarkdownContent>
  {@html project.content}
</MarkdownContent>
