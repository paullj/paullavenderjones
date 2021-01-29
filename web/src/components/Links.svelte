<script>
  import SVG from '$components/SVG.svelte';

  const routes = [
    {
      href: 'https://www.github.com/paullj',
      name: 'GitHub',
      icon: 'assets/github.svg',
    },
    {
      href: 'https://www.linkedin.com/in/paul-lavender-jones/',
      name: 'LinkedIn',
      icon: 'assets/linkedin.svg',
    },
    {
      href: 'mailto:paul@lavender-jones.com',
      name: 'Email',
      icon: 'assets/send.svg',
    },
    {
      href: '',
      name: 'Curriculum Vitae',
      icon: 'assets/document.svg',
    },
  ];
</script>

<div class="my-6 text-base font-semibold tracking-widest text-gray-800 uppercase sm:my-4 dark:text-blue-300 sm:text-sm">
  <ul class="flex items-center space-x-10 sm:space-x-12">
    {#each routes as { href, name, icon }}
      <li class="inline transition-colors duration-200 dark:hover:text-yellow-300 hover:text-yellow-700">
        <a {href} rel="external noopener noreferrer" target="_blank" class="flex flex-row items-center">
          {#if icon}
            <SVG src={icon} class="w-8 h-8 mr-1 sm:w-3 sm:h-3" />
          {/if}
          <span class="hidden ml-1 sm:block hover:underline">
            {name}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</div>
