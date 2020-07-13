<script>
  export let segment;

  const pages = [
    { name: "Home" },
    { name: "Projects", href: "project", prefetch: true },
    { name: "Blog", href: "blog", prefetch: true },
  ];
</script>

<nav class="mb-8 text-xl font-light sm:text-base sm:font-normal">
  <ul class="space-x-3 sm:space-x-5">
    {#each pages as page}
      <li class="inline">
        <a
          rel={page.prefetch ? 'prefetch' : undefined}
          aria-current={segment === undefined ? 'page' : undefined}
          title="{page.name} Page"
          class="hover:underline focus:text-gray-800 {segment === page.href ? 'text-gray-black underline' : 'text-gray-600'}"
          href={page.href ? page.href : '.'}
          target="_self">
          {page.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>
