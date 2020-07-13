<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Analytics from "../components/Analytics.svelte";
  import { GOOGLE_ANALYTICS_ID } from "../constants";

  import { fade } from "svelte/transition";

  export let segment;
</script>

<style global>
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";

  html,
  body {
    @apply h-full;
    @apply font-sans;
    @apply subpixel-antialiased;
    @apply bg-white;
    @apply text-gray-900;
  }
</style>

<Analytics id={GOOGLE_ANALYTICS_ID} />
<div class="flex flex-col h-full max-w-screen-md px-4 pt-8 mx-auto sm:pt-16">
  <Nav {segment} />
  <main transition:fade class="flex-grow">
    <slot />
  </main>
  <Footer class="flex-shrink-0" />
</div>
