<script>
  import logo from '../lib/assets/logo.png';
  import { site } from '../lib/site.js';
  import Social from './Social.svelte';

  const nav = [
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'About' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#visit', label: 'Visit us' },
    { href: '#book', label: 'Request an appointment' },
  ];

  let open = $state(false);

  function onkeydown(event) {
    if (event.key === 'Escape') open = false;
  }
</script>

<svelte:window {onkeydown} />

<header class="sticky top-0 z-10 border-b border-line bg-cream/90 backdrop-blur-md">
  <div class="wrap flex h-[76px] items-center justify-between gap-6 sm:h-24">
    <a href="#top" aria-label="{site.name} home" onclick={() => (open = false)}>
      <img class="block h-[60px] w-auto sm:h-[78px]" src={logo} alt={site.name} />
    </a>
    <nav class="hidden gap-[30px] font-bold text-ink-soft lg:flex">
      {#each nav.slice(0, 4) as item}
        <a class="hover:text-rose" href={item.href}>{item.label}</a>
      {/each}
    </nav>
    <div class="flex items-center gap-3 sm:gap-4">
      <Social class="max-sm:hidden" />
      <a class="btn btn-primary p-[11px] text-[15px] sm:px-5" href={site.phoneHref} aria-label="Call {site.phone}">
        <i class="fa-solid fa-phone" aria-hidden="true"></i>
        <span class="max-sm:hidden">{site.phone}</span>
      </a>
      <button
        type="button"
        class="grid size-[42px] cursor-pointer place-items-center rounded-full bg-blush text-lg text-rose transition-colors hover:bg-rose hover:text-white lg:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onclick={() => (open = !open)}
      >
        <i class="fa-solid {open ? 'fa-xmark' : 'fa-bars'}" aria-hidden="true"></i>
      </button>
    </div>
  </div>

  {#if open}
    <nav id="mobile-menu" class="border-t border-line bg-cream lg:hidden">
      <div class="wrap flex flex-col py-2">
        {#each nav as item}
          <a
            class="border-b border-dashed border-line py-3.5 text-lg font-bold text-ink last:border-b-0 hover:text-rose"
            href={item.href}
            onclick={() => (open = false)}
          >
            {item.label}
          </a>
        {/each}
      </div>
    </nav>
  {/if}
</header>
