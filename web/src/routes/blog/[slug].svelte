<script context="module">
  export const load = async ({ page, fetch }) => {
    const { slug } = page.params;
    const { title, body } = await fetch(`/api/blog/${slug}.json`).then(res => res.json());
    return {
      props: { title, body },
    };
  };
</script>

<script>
  export let title: string;
  export let body;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

{@html body}
