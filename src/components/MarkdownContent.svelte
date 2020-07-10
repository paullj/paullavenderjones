<style global>
  .content {
    @apply mb-6 leading-loose text-lg font-serif;
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
    @apply bg-yellow-300 text-gray-900;
    @apply py-1 px-0;
  }

  .content img {
    max-width: 85%;
    @apply mx-auto h-auto my-8;
  }

  .content img[src*="?thumbnail"] {
    width: 150px;
    height: 100px;
  }
  .content img[src*="?highlight"] {
    max-width: 100%;
    @apply shadow-xl;
  }
  @screen md {
    .content img[src*="?highlight"] {
      max-width: 115%;
      transform: translateX(-7.5%);
    }
  }
  .content img + em {
    @apply block -mt-4 mb-8;
    @apply text-center font-sans text-gray-800 font-semibold text-sm not-italic tracking-wider;
  }

  .content iframe {
    @apply mx-auto my-8;
  }
  .content a {
    @apply transition-all ease-in duration-200;
    @apply text-blue-600 font-medium;
  }
  .content a:hover {
    @apply underline;
  }

  .content p code {
    @apply bg-gray-700;
    @apply text-gray-400;
    @apply p-1;
    @apply rounded;
  }
  .content blockquote {
    @apply border-l-4 border-teal-200;
    @apply pl-5 my-6;
    @apply italic;
  }
  .content br {
    @apply mb-4;
  }
  .content hr {
    @apply border-gray-600 border;
    @apply my-8 w-11/12 mx-auto;
  }
  .content ol {
    @apply list-decimal list-inside;
  }
  .content ul {
    @apply list-disc list-inside;
  }
  .content li {
    @apply mb-3;
  }
</style>

<div class="content">
  <slot />
</div>
