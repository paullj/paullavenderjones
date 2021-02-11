<script>
  export let title;
  export let description;
  export let url;
  export let ariaLabel = 'Share on Facebook';

  $: href = encodeURI(`https://facebook.com/sharer/sharer.php?u=${url}`);
</script>

<a class="" {href} target="_blank" rel="noopener" aria-label={ariaLabel}>
  <div
    class="inline-block text-gray-500 transition-colors duration-200 dark:text-blue-200 dark:hover:text-blue-500 hover:text-blue-600"
  >
    <div aria-hidden="true">
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
        <path d="M7.5 14.5a7 7 0 110-14 7 7 0 010 14zm0 0v-8a2 2 0 012-2h.5m-5 4h5" stroke="currentColor" />
      </svg>
    </div>
  </div>
</a>
