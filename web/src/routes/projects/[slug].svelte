<script context="module">
  export const load = async ({ page, fetch }) => {
    const { slug } = page.params;
    const { title, description, publishedAt, coverImage, author, content } = await fetch(`/api/projects/${slug}.json`)
      .then(res => {
        return res.json();
      })
      .catch(error => console.error(error));
    return {
      props: {
        title,
        description,
        author,
        publishedAt,
        coverImage,
        content,
      },
    };
  };
</script>

<script>
  import Content from '$components/Content.svelte';
  import Author from '$components/Author.svelte';

  export let title: string;
  export let description: string;
  export let author: {
    name: string;
    image: string;
  };
  export let publishedAt: string;
  export let coverImage: {
    src: string;
    srcset: string;
    placeholder: string;
    sizes: string;
  };
  export let content: string;
</script>

<svelte:head>
  <title>{title} | Paul Lavender-Jones</title>
  <meta name="description" content={description} />
</svelte:head>

<div>
  <div class="flex flex-col mt-6 md:mt-24">
    <div class="">
      <span
        class="block text-xs font-bold tracking-widest text-gray-700 text-opacity-50 uppercase {coverImage
          ? 'lg:-ml-24'
          : ''}  dark:text-gray-500 md:text-sm"
      >
        {publishedAt}
      </span>
      <div class="relative flex  flex-col space-y-6 {coverImage ? 'lg:-ml-24' : ''}  md:space-y-0 md:flex-row">
        <div class="z-10 ">
          <span
            class="font-serif text-6xl font-semibold tracking-tight text-gray-800 title md:text-8xl dark:text-gray-300"
            >{title}</span
          >
        </div>

        {#if coverImage}
          <img
            class="z-0 self-center w-full max-w-screen-sm mb-4 shadow-xl md:w-auto md:absolute md:right-0 md:h-72 lg:h-96 lazyload lg:-right-24"
            src={coverImage.src}
            srcset={coverImage.placeholder}
            data-srcset={coverImage.srcset}
            sizes={coverImage.sizes}
            alt="{title} cover image"
          />
        {/if}
      </div>

      <div
        class="relative block mt-4 text-xl leading-normal text-gray-900 md:text-3xl font-extralight dark:text-gray-400 {coverImage
          ? 'sm:mt-20 lg:mt-32'
          : ''}"
      >
        {description}
      </div>
      <div class="relative flex flex-row items-center justify-start mt-4 space-x-2 sm:mt-8">
        <Author name={author.name} src={author.image} />
      </div>
    </div>
    <div class="flex-grow w-12 py-12 mx-auto">
      <svg
        class="w-6 h-6 animate-bounce"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
      >
        <path d="M7.5 13.5l4-4m-4 4l-4-4m4 4V1" stroke="currentColor" />
      </svg>
    </div>
  </div>
  <div class="max-w-screen-md mx-auto">
    <Content {content} />
  </div>
</div>

<style>
  :global(:root) {
    --tsc: rgb(243, 244, 246, 1);
  }
  :global(:root).dark {
    --tsc: rgb(17, 24, 39, 0.2);
  }
  .title {
    text-shadow: 0px 2px 0 var(--tsc), 0px -2px 0 var(--tsc), -2px 0px 0 var(--tsc), 2px 0px 0 var(--tsc),
      2px 2px 0 var(--tsc), -2px -2px 0 var(--tsc), -2px 2px 0 var(--tsc), 2px -2px 0 var(--tsc);
  }
</style>
