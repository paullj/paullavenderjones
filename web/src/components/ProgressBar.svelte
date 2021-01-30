<script>
  import NProgress from 'nprogress';
  import { navigating } from '$app/stores';

  NProgress.configure({
    // minimum: 0.16,
    showSpinner: false,
  });

  $: $navigating ? NProgress.start() : NProgress.done();
</script>

<style global>
  #nprogress {
    @apply pointer-events-none;
  }

  #nprogress .bar {
    @apply bg-gray-800;
    @apply opacity-100;
    @apply fixed;
    @apply z-50;
    @apply inset-x-0;
    @apply top-0;
    @apply w-full;
    height: 2px;
  }

  .dark #nprogress .bar {
    @apply opacity-50;
    @apply bg-blue-400;
  }
</style>
