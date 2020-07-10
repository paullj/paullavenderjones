<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  import { fade } from "svelte/transition";

  export let segment;
</script>

<style global>
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
</style>

<div
  class="max-w-screen-md px-4 pt-8 mx-auto font-sans subpixel-antialiased sm:pt-16">
  <Nav {segment} />
  <main transition:fade>
    <slot />
  </main>
  <Footer />
</div>
