<script>
  import { onMount } from 'svelte';
  import { storable } from '$utils/storable';

  const preferredTheme = storable('theme');
  let darkMode = false;

  $: if (typeof window != 'undefined') {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }

  onMount(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkMode = $preferredTheme ? $preferredTheme === 'dark' : darkMediaQuery.matches;
    try {
      // Chrome & Firefox
      darkMediaQuery.addEventListener('change', e => {
        darkMode = e.matches;
      });
    } catch (e1) {
      try {
        // Safari
        darkMediaQuery.addListener(e => {
          darkMode = e.matches;
        });
      } catch (e2) {
        console.error(e2);
      }
    }
  });

  const toggleMode = () => {
    darkMode = !darkMode;
    $preferredTheme = darkMode ? 'dark' : 'light';
  };
</script>

<label for="nightModeCheckbox">
  <div class="relative inline-block align-middle bg-transparent cursor-pointer select-none">
    <svg
      class="w-8 h-8 sm:w-6 sm:h-6"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      {#if darkMode}
        <path
          d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z"
          stroke="currentColor"
          stroke-linecap="square"
        />
      {:else}
        <path
          d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z"
          stroke="currentColor"
          stroke-linejoin="round"
        />
      {/if}
    </svg>
    <input id="nightModeCheckbox" on:input={toggleMode} type="checkbox" class="inline sr-only" checked={darkMode} />
  </div>
  <span class="ml-2 cursor-default sr-only">Nightmode Toggle</span>
</label>
