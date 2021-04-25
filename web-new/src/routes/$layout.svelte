<script>
  import '../app.postcss';
  import 'lazysizes';

  // import Header from '$lib/Header.svelte';
  // import Footer from '$lib/Footer.svelte';
  // import ProgressBar from '$lib/ProgressBar.svelte';
</script>

<div class="flex flex-col h-full max-w-screen-md px-6 pt-8 pb-2 mx-auto sm:px-4 sm:pt-16">
  <!-- <ProgressBar /> -->
  <!-- <Header /> -->
  <main class="flex-grow">
    <slot />
  </main>
  <div class="flex-shrink-0">
    <!-- <Footer /> -->
  </div>
</div>
