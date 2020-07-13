<style global>
  .content {
    @apply mb-4;
    @apply leading-loose;
    @apply text-lg;
    @apply font-serif;
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
    @apply bg-yellow-300;
    @apply text-gray-900;
    @apply py-1;
    @apply px-0;
  }
  .content img {
    @apply border-2;
    @apply border-gray-100;
    max-width: 83.33%;
    @apply mx-auto;
    @apply h-auto;
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
  .content img + em {
    @apply block;
    @apply -mt-4;
    @apply mb-8;
    @apply text-center;
    @apply font-sans;
    @apply text-gray-600;
    @apply font-semibold;
    @apply text-sm;
    @apply not-italic;
    @apply tracking-wide;
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
  .content li {
    @apply mb-3;
  }
  .content blockquote {
    @apply py-2;
    @apply my-4;
    @apply pl-4;
    @apply font-sans;
    @apply font-thin;
    @apply text-xl;
    @apply leading-none;
    @apply border-l-4;
    @apply border-red-400;
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
