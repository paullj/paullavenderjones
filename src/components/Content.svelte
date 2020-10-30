<style global>
  .content {
    @apply mb-12;
    @apply leading-loose;
    @apply text-lg;
    @apply font-serif;
  }
  .content br {
    @apply block;
    @apply mb-6;
  }

  .content h1,
  .content h2,
  .content h3,
  .content h4 {
    @apply font-light;
    @apply mb-4;
  }
  .content h1 {
    @apply text-2xl;
  }
  .content h2 {
    @apply text-xl;
  }
  .content h3 {
    @apply text-lg;
  }
  .content h4 {
    @apply text-base;
  }
  .content mark {
    @apply text-gray-900;
    @apply bg-transparent;
  }
  .content mark {
    @apply bg-yellow-300;
    @apply py-1;
    @apply px-0;
  }
  .content blockquote > mark {
    @apply bg-transparent;
    @apply py-0;
    @apply underline;
  }
  .content img {
    @apply border-4;
    @apply border-gray-200;
    max-width: 83.33%;
    @apply mx-auto;
    @apply h-auto;
    @apply border-dashed;
    @apply my-8;
  }
  .content img[src*="?large"] {
    @apply border-0;
    max-width: 115%;
    @apply w-full;
    @apply shadow-xl;
  }
  @screen lg {
    .content img[src*="?large"] {
      width: 115%;
      margin-left: -7.5%;
    }
  }
  .content blockquote {
    @apply py-2;
    @apply mt-4;
    @apply pl-4;
    @apply font-sans;
    @apply font-thin;
    @apply text-xl;
    @apply leading-relaxed;
    @apply border-l-4;
    @apply border-red-400;
  }

  .content img + blockquote {
    @apply block;
    @apply -mt-4;
    @apply text-center;
    @apply font-sans;
    @apply text-gray-600;
    @apply font-medium;
    @apply text-sm;
    @apply not-italic;
    @apply tracking-wide;
    @apply py-0;
    @apply border-0;
  }
  .content iframe {
    max-width: 83.33%;
    @apply mx-auto;
    @apply my-8;
  }
  .content a {
    @apply text-red-500;
    @apply font-medium;
  }
  .content a:hover {
    @apply underline;
  }
  .content a:focus {
    @apply bg-red-200;
    @apply text-red-700;
  }
  .content code {
    @apply text-base;
    @apply bg-gray-800;
    @apply text-gray-400;
    @apply py-1;
    @apply px-2;
    @apply rounded;
  }
  .content hr {
    @apply border-gray-400;
    @apply border-t;
    @apply my-8;
    @apply mx-auto;
  }
  .content ol {
    @apply list-decimal;
    @apply list-inside;
  }
  .content ul {
    @apply list-disc;
    @apply list-inside;
  }
  .content ul > li,
  ol > li {
    @apply ml-8;
  }

  .content pre {
    @apply text-base;
    @apply bg-gray-800;
    @apply text-gray-400;
    @apply p-1;
    @apply px-3;
    @apply m-4;
    @apply rounded-md;
    @apply overflow-auto;
  }
</style>

<svelte:head>
  <base target="_blank" rel="external noopener noreferrer" />
</svelte:head>

<div class="content">
  <slot />
</div>
