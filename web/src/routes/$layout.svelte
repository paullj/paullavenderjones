<script>
  import './_global.css';
  import 'lazysizes';

  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import ProgressBar from '$components/ProgressBar.svelte';
</script>

<div class="flex flex-col h-full max-w-screen-md px-6 pt-8 pb-2 mx-auto sm:px-4 sm:pt-16">
  <ProgressBar />
  <Header />
  <main class="flex-grow">
    <slot />
  </main>
  <div class="flex-shrink-0">
    <Footer />
  </div>
</div>
