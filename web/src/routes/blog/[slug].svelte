<script context="module">
  export const load = async ({ page, fetch }) => {
    const { slug } = page.params;
    const { title, publishedAt, description, author, content, readingTime } = await fetch(`/api/blog/${slug}.json`)
      .then(res => {
        return res.json();
      })
      .catch(error => console.error(error));
    return {
      props: {
        title,
        author,
        description,
        publishedAt,
        readingTime,
        content,
      },
    };
  };
</script>

<script>
  import Content from '$components/Content.svelte';
  import Author from '$components/Author.svelte';
  import Email from '$components/share/Email.svelte';
  import Twitter from '$components/share/Twitter.svelte';
  import Facebook from '$components/share/Facebook.svelte';
  import LinkedIn from '$components/share/LinkedIn.svelte';
  import { onMount } from 'svelte';

  export let title: string;
  export let author: {
    name: string;
    image: string;
  };
  export let description: string;
  export let publishedAt: string;
  export let content: string;
  export let readingTime: string;

  let url = 'paullj.me';
  onMount(() => (url = location.href));
</script>

<svelte:head>
  <title>{title} | Paul Lavender-Jones</title>
  <meta name="description" content={description} />
</svelte:head>

<div>
  <div class="flex flex-col mt-6 md:mt-24">
    <div class="">
      <span
        class="block mb-1 text-xs font-bold tracking-widest text-gray-700 text-opacity-50 uppercase dark:text-blue-300 md:text-sm"
      >
        {publishedAt}
      </span>
      <span class="font-serif text-4xl font-semibold tracking-tight text-gray-800 12 md:text-6xl dark:text-gray-300"
        >{title}</span
      >

      <div
        class="relative block mt-4 text-xl leading-loose text-gray-900 md:text-2xl font-extralight dark:text-gray-200"
      >
        {description}
      </div>
      <div
        class="relative flex flex-col justify-start mt-4 space-y-4 sm:space-x-2 sm:items-center sm:flex-row sm:mt-8 sm:space-y-0"
      >
        <Author name={author.name} src={author.image} />
        <span class="hidden sm:block">·</span>
        <div class="flex items-center space-x-6">
          <span
            class="block text-xs font-bold tracking-widest text-gray-700 text-opacity-50 uppercase dark:text-gray-300"
          >
            {readingTime}
          </span>
          <Email {title} {description} {url} />
          <Twitter {title} {description} {url} />
          <Facebook {title} {description} {url} />
          <LinkedIn {title} {description} {url} />
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-screen-md mx-auto mt-12">
    <Content {content} />
  </div>
</div>
