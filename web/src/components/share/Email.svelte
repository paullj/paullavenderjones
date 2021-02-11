<script>
  export let title;
  export let description;
  export let url;
  export let ariaLabel = 'Share by Email';

  $: href = encodeURI(
    `mailto:?subject=From paullj.me: ${title}&body=Here is a post from Paul Lavender-Jones's blog that might interest you: \n${title}\n${description}\n${url}`
  );
</script>

<a class="" {href} target="_blank" rel="noopener" aria-label={ariaLabel}>
  <div
    class="inline-block text-gray-500 transition-colors duration-200 dark:text-blue-200 hover:text-gray-900 dark:hover:text-gray-200"
  >
    <div aria-hidden="true">
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
        <path
          d="M4.5 7.5h4M11 4L8.5 7.495 11 11m3.5-8.501a2 2 0 01-4 0 2 2 0 014 0zm0 9.993a2 2 0 01-4 0 2 2 0 014 0zm-10-4.997a2 2 0 01-4 0 2 2 0 014 0z"
          stroke="currentColor"
          stroke-linecap="square"
        />
      </svg>
    </div>
  </div>
</a>
