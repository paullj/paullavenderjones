<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Content from "../../components/Content.svelte";

  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.description} />
  <meta name="keywords" content={post.tags} />
</svelte:head>

<div class="mb-4 sm:mb-8">
  <h1 class="mb-4 font-serif text-5xl font-bold leading-none tracking-tight">
    {post.title}
  </h1>

  {#if post.description}
    <p class="mb-1 font-sans text-base font-thin sm:text-lg">
      {post.description}
    </p>
  {/if}

  <div class="text-gray-600 sm:space-x-2">
    <span class="text-xs font-bold tracking-widest uppercase">{post.date}</span>
    <span class="font-serif text-sm">{post.readingTime}</span>
    <span class="hidden sm:inline">&#183;</span>
    <br class="inline sm:hidden" />
    {#if post.author}
      <div class="inline text-sm font-thin">
        By
        <span>{post.author}</span>
      </div>
    {/if}
  </div>
</div>

<Content>
  {@html post.content}
</Content>
<ul class="my-2 text-sm text-gray-500">
  {#each post.tags as tag}
    <li class="inline pr-1">#{tag}</li>
  {/each}
</ul>
<div class="pt-2 mb-12">
  <hr class="mx-auto mb-8 border-t border-gray-400" />
  <div class="flex justify-between w-full">
    <div class="justify-start text-left">
      {#if post.prev}
        <div>
          <p class="text-xs font-bold tracking-widest text-gray-500 uppercase">
            Previous Post
          </p>
          <a href="blog/{post.prev.slug}" target="_self" rel="prefetch">
            <p class="font-serif text-xl hover:underline">{post.prev.title}</p>
          </a>
        </div>
      {/if}
    </div>

    <div class="justify-end text-right">
      {#if post.next}
        <div>
          <p class="text-xs font-bold tracking-widest text-gray-500 uppercase">
            Next Post
          </p>
          <a href="blog/{post.next.slug}" target="_self" rel="prefetch">
            <p class="font-serif text-xl hover:underline">{post.next.title}</p>
          </a>
        </div>
      {/if}
    </div>
  </div>
</div>
