<script context="module">
  import BlockContent from '@movingbrands/svelte-portable-text';
  import sanity from '$utils/sanity';

  export const load = async function ({ page, context, session, fetch }) {
    const { slug } = page.params;
    const filter = '*[_type == "post" && slug.current == $slug][0]';
    const projection = `{
      ...,
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            _type,
            author->
          }
        }
      }
    }`;

    const query = filter + projection;
    const url = sanity.url(query, { slug });

    const article = await fetch(url)
      .then(response => response.json())
      .then(({ result }) => result)
      .catch(err => console.error(err));
    return {
      props: {
        title: article.title,
        body: article.body,
      },
    };
  };
</script>

<script>
  export let title;
  export let body;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

{JSON.stringify(body)}
