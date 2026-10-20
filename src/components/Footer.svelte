<script>
  import logo from '../lib/assets/logo.png';
  import { site } from '../lib/site.js';
  import Social from './Social.svelte';

  const year = new Date().getFullYear();
</script>

<footer class="pt-12 pb-10 text-[15px] text-ink-soft">
  <div class="wrap flex flex-wrap justify-between gap-5 max-sm:flex-col sm:items-center">
    <div class="flex items-center gap-4">
      <img class="h-16 w-auto" src={logo} alt="" />
      <div>{site.street}, {site.city}<br /><a href={site.phoneHref}>{site.phone}</a></div>
    </div>
    <Social />
    <div>
      © {year} {site.name}<br />
      Developed by <a class="font-bold text-rose hover:underline" href="https://softmarmot.com" target="_blank" rel="noopener">SoftMarmot</a>
    </div>
  </div>
</footer>
