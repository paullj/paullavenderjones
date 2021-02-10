<script>
  export let name: string;
  export let src: string;
</script>

<div class="block px-2 py-1 font-medium text-gray-600 dark:text-gray-400 md:py-4">
  <img {src} alt="{name} thumbnail" class="inline-block h-8 mr-2 rounded-full shadow-md" />
  By {name}
</div>
