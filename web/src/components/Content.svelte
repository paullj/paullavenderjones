<script>
  export let content;
</script>

<div class="content-wrapper">
  {@html content}
</div>

<style global>
  .content-wrapper {
    div > :first-child {
      @apply mt-0;
    }
    h1,
    h2,
    h3,
    h4 {
      @apply font-serif font-bold tracking-tight mb-2;
    }
    h1 {
      @apply text-gray-700;
      @apply mt-16 text-3xl md:text-5xl;
    }
    h2 {
      @apply text-gray-700;
      @apply mt-16 text-2xl md:text-4xl;
    }
    h3 {
      @apply text-gray-600;
      @apply mt-16 text-2xl underline md:text-3xl uppercase tracking-wider;
    }
    /* Tailwind directive @apply dark:* doesn't seem to work :( */
    h4 {
      @apply mt-12 text-xl underline md:text-2xl uppercase tracking-wider;
      @apply text-gray-600 dark:text-blue-300;
    }
    p,
    li {
      @apply font-serif font-extralight text-lg leading-8 md:text-xl md:leading-10;
      @apply dark:text-blue-200;
    }
    a {
      @apply border-b-2 border-dotted;
      @apply border-yellow-700 text-yellow-700;
      @apply dark:border-yellow-400 dark:text-yellow-400;
    }
    mark {
      @apply bg-yellow-400 bg-opacity-75 px-1 py-0.5;
    }
    strong {
      @apply font-semibold;
    }
    em {
      @apply italic font-medium;
    }
    ul {
      @apply list-inside list-disc my-4;
      li {
        @apply pl-4;
      }
    }
    ol {
      @apply list-inside list-decimal my-4;
      li {
        @apply pl-4;
      }
    }
    blockquote {
      @apply font-sans tracking-wide font-thin leading-loose border-l-4 text-xl pl-4 my-8 md:text-2xl md:pl-6 py-2 md:py-4 md:border-l-8;
      @apply border-gray-300;
    }

    figure {
      @apply sm:w-3/4 mx-auto w-full my-4 sm:my-10;
    }

    figure > div {
      @apply overflow-hidden relative;
    }

    figure > div > img {
      @apply shadow-lg w-full h-full inset-0 absolute;
    }

    figure > figcaption {
      @apply text-center font-sans pt-4 font-medium text-base;
      @apply text-gray-500 dark:text-blue-300;
    }

    .youtube {
      @apply h-0 relative shadow-lg;
      padding-bottom: calc(9 / 16 * 100%);

      iframe {
        @apply bg-gray-900 dark:bg-gray-700;
        @apply absolute top-0 left-0 w-full h-full rounded-sm overflow-hidden truncate;
      }
    }
  }
</style>
