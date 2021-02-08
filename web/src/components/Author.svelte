<script>
  export let name: string;
  export let src: string;
  export let alt: string;
</script>

<div class="block px-2 py-1 font-medium text-gray-600 md:py-4">
  <img {src} {alt} class="inline-block h-8 mr-2 rounded-full shadow-md" />
  By {name}
</div>
