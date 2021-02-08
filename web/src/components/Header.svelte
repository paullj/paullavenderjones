<script>
  import { page } from '$app/stores';
  import DarkModeToggle from '$components/DarkModeToggle.svelte';

  const routes = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/projects',
      name: 'Projects',
    },
    {
      href: '/blog',
      name: 'Blog',
    },
  ];
</script>

<nav class="mb-8 text-xl font-light text sm:text-lg">
  <ul class="flex flex-row justify-between space-x-6">
    {#each routes as { href, name }}
      <li
        class="inline-block transition-colors duration-200 dark:hover:text-yellow-300 hover:text-yellow-600
      {href ===
        $page.path
          ? 'text-gray-600 dark:text-blue-100'
          : 'text-gray-400 dark:text-blue-300'}"
      >
        <a {href} rel="prefetch">{name}</a>
      </li>
    {/each}
    <li
      class="inline-block text-gray-400 transition-colors duration-200 dark:text-blue-300 dark:hover:text-yellow-300 hover:text-yellow-600"
    >
      <span class="sm:mr-4">
        <DarkModeToggle />
      </span>
    </li>
  </ul>
</nav>
