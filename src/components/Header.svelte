<script>
  import logo from '../lib/assets/logo.png';
  import { site } from '../lib/site.js';
  import Social from './Social.svelte';

  const nav = [
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'About' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#visit', label: 'Visit us' },
  ];
</script>

<header class="sticky top-0 z-10 border-b border-line bg-cream/90 backdrop-blur-md">
  <div class="wrap flex h-[76px] items-center justify-between gap-6 sm:h-24">
    <a href="#top" aria-label="{site.name} home">
      <img class="block h-[60px] w-auto sm:h-[78px]" src={logo} alt={site.name} />
    </a>
    <nav class="hidden gap-[30px] font-bold text-ink-soft lg:flex">
      {#each nav as item}
        <a class="hover:text-rose" href={item.href}>{item.label}</a>
      {/each}
    </nav>
    <div class="flex items-center gap-4">
      <Social class="max-sm:hidden" />
      <a class="btn btn-primary p-[11px] text-[15px] sm:px-5" href={site.phoneHref} aria-label="Call {site.phone}">
        <i class="fa-solid fa-phone" aria-hidden="true"></i>
        <span class="max-sm:hidden">{site.phone}</span>
      </a>
    </div>
  </div>
</header>
