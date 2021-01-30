<script context="module">
  export const load = async ({ page, fetch }) => {
    const { slug } = page.params;
    const { title, body } = await fetch(`/api/projects/${slug}.json`)
      .then(res => {
        return res.json();
      })
      .catch(error => console.error(error));
    return {
      props: {
        title,
        body,
      },
    };
  };
</script>

<script>
  import Content from '$components/Content.svelte';

  export let title: string;
  export let body: string;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1 class="font-serif font-semibold underline text-7xl">{title}</h1>
<p>
  This is the descriptpoin and tias af asdkfj aksf jkasjk fjaksdj fkajsdk fjaks jfkasjdfasjdkfja kjsd kfjaks jkaj kjak
  sjadk jfkajsdkf jaksjdf kjaksdj fkjakfjs descriptpoin and tias af asdkfj aksf jkasjk fjaksdj fkajsdk fjaks
  jfkasjdfasjdkfja kjsd kfjaks jkaj kjak sjadk jfkajsdkf jaksjdf kjaksdj fkjakfjs.
</p>
<div>
  <Content {body} />
</div>
