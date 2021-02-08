<script>
  import 'lazysizes';
  let className;

  // creates a `class` property, even
  // though it is a reserved word
  export { className as class };

  export let aspectRatio: number;
  export let placeholder: string;
  export let src: string;
  export let srcset: string;
  export let alt: string;
  export let sizes = 'auto'; // 'auto' only works when using `lazysizes`

  let padding_bottom_percentage = 100 / aspectRatio + '%';
</script>

<div class={className}>
  <div class="overflow-hidden">
    <div class="aspect-ratio-holder" style="--pb:{padding_bottom_percentage}" />

    <img
      class="absolute top-0 left-0 w-full h-full lazyload"
      {src}
      srcset={placeholder}
      data-srcset={srcset}
      {sizes}
      {alt}
    />

    <noscript>
      <img {src} {srcset} {sizes} {alt} />
    </noscript>
  </div>
</div>

<style>
  .aspect-ratio-holder {
    --pb: 100%;
    padding-bottom: var(--pb);
  }
</style>
