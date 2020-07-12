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
    <p class="mb-2 font-sans text-base font-thin sm:text-lg">
      {post.description}
    </p>
  {/if}

  <div class="space-x-2 text-gray-600">
    <span class="text-xs font-bold tracking-widest uppercase">{post.date}</span>
    {#if post.author}
      <div class="inline text-sm font-thin">
        By
        <span>{post.author}</span>
      </div>
    {/if}
    <span>&#183;</span>
    <span class="font-serif text-sm">{post.readingTime}</span>
  </div>
</div>

<Content>
  {@html post.content}
</Content>

<div class="mb-12">
  <hr class="mx-auto my-8 border-t border-gray-400" />
  <div class="flex justify-between w-full">
    <div class="justify-start text-left">
      {#if post.prevArticle}
        <div>
          <p class="text-xs font-bold tracking-widest text-gray-500 uppercase">
            Previous Post
          </p>
          <a href="blog/{post.prevArticle.slug}" target="_self" rel="prefetch">
            <p class="font-serif text-xl hover:underline">
              {post.prevArticle.title}
            </p>
          </a>
        </div>
      {/if}
    </div>

    <div class="justify-end text-right">
      {#if post.nextArticle}
        <div>
          <p class="text-xs font-bold tracking-widest text-gray-500 uppercase">
            Next Post
          </p>
          <a href="blog/{post.nextArticle.slug}" target="_self" rel="prefetch">
            <p class="font-serif text-xl hover:underline">
              {post.nextArticle.title}
            </p>
          </a>
        </div>
      {/if}
    </div>
  </div>
</div>
