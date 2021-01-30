<script>
  export let body;
</script>

<div class="wrapper">
  {@html body}
</div>

<style global>
  .wrapper {
    h1,
    h2,
    h3,
    h4 {
      @apply font-sans font-bold tracking-normal mb-2;
    }
    h1 {
      @apply mt-24 text-5xl;
    }
    h2 {
      @apply mt-16 text-4xl;
    }
    h3 {
      @apply mt-16 text-3xl uppercase tracking-widest;
    }
    @layer base {
      h4 {
        @apply mt-12 text-2xl uppercase tracking-widest;
        &.dark {
          @apply text-blue-300;
        }
      }
      p {
        @apply font-sans text-2xl font-extralight leading-loose;
        &.dark {
          @apply text-blue-200;
        }
      }
      a {
        @apply border-b-2 border-dotted;
        &.dark {
          @apply border-yellow-400 text-yellow-400;
        }
      }
    }
  }
</style>
