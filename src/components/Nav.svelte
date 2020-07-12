<script>
  export let segment;

  const pages = [
    { name: "Home" },
    // { name: "about", href: "about" },
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
          class="hover:underline"
          class:text-black={segment === page.href}
          class:text-gray-500={segment !== page.href}
          href={page.href ? page.href : '.'}
          target="_self">
          {page.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>
