<script>
  import { fade } from 'svelte/transition';

  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
</script>

<div class="flex flex-col h-full max-w-screen-lg px-6 pt-8 pb-2 mx-auto sm:px-4 sm:pt-16">
  <Header />
  <main transition:fade class="flex-grow">
    <slot />
  </main>
  <div class="flex-shrink-0">
    <Footer />
  </div>
</div>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    @apply h-full;
    @apply bg-transparent;
  }

  html {
    @apply h-full;
    @apply font-sans;
    @apply subpixel-antialiased;

    @apply transition-colors;
    @apply duration-150;

    @apply text-gray-900;
    @apply bg-gray-200;
  }

  html.dark{
    @apply text-blue-200;
    @apply bg-gray-900;
  }
</style>
