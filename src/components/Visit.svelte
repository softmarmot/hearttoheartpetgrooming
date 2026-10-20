<script>
  import { site } from '../lib/site.js';
  import Social from './Social.svelte';
  import MapArt from './art/MapArt.svelte';

  const hasSocial = Boolean(site.facebook || site.instagram);
</script>

<section id="visit" class="py-[60px] sm:py-[88px]">
  <div class="wrap">
    <div class="mb-11 max-w-[640px]">
      <span class="kicker">Visit us</span>
      <h2 class="section-title">Find us on Ridge Road</h2>
    </div>
    <div class="grid items-stretch gap-7 lg:grid-cols-2">
      <div class="rounded-card border border-line bg-white px-[22px] py-[26px] sm:p-9">
        <h3 class="mb-[18px] text-2xl font-semibold">{site.name}</h3>
        <div class="flex gap-3.5 border-b border-dashed border-line py-3.5">
          <i class="fa-solid fa-location-dot mt-1 w-[22px] text-center text-xl text-rose" aria-hidden="true"></i>
          <div><strong class="block">{site.street}</strong><small class="text-[15px] text-ink-soft">{site.city}</small></div>
        </div>
        <div class="flex gap-3.5 border-b border-dashed border-line py-3.5">
          <i class="fa-solid fa-phone mt-1 w-[22px] text-center text-xl text-rose" aria-hidden="true"></i>
          <div>
            <a class="block font-bold" href={site.phoneHref}>{site.phone}</a>
            <small class="text-[15px] text-ink-soft">Call to book</small>
          </div>
        </div>
        <div class="flex gap-3.5 py-3.5">
          <i class="fa-solid fa-clock mt-1 w-[22px] text-center text-xl text-rose" aria-hidden="true"></i>
          <div>
            <strong class="block">Hours</strong>
            <div class="grid grid-cols-[auto_auto] gap-x-7 gap-y-0.5 text-[15px] text-ink-soft">
              {#each site.hours as row}
                <span>{row.days}</span><span>{row.time}</span>
              {/each}
            </div>
          </div>
        </div>
        {#if hasSocial}
          <div class="mt-[18px] flex items-center gap-3.5 text-[15px] font-extrabold text-ink-soft">
            Follow us <Social />
          </div>
        {/if}
        <div class="mt-[22px] flex flex-wrap gap-3.5">
          <a class="btn btn-primary justify-center max-sm:flex-[1_1_100%]" href={site.phoneHref}>
            <i class="fa-solid fa-phone" aria-hidden="true"></i>Call now
          </a>
          <a class="btn btn-ghost justify-center max-sm:flex-[1_1_100%]" href={site.directionsHref} target="_blank" rel="noopener">
            <i class="fa-solid fa-diamond-turn-right" aria-hidden="true"></i>Get directions
          </a>
        </div>
      </div>
      <a
        class="relative block min-h-[260px] overflow-hidden rounded-card border border-line bg-sage sm:min-h-[360px]"
        href={site.directionsHref}
        target="_blank"
        rel="noopener"
        aria-label="Open {site.street}, {site.city} in Google Maps"
      >
        <MapArt />
      </a>
    </div>
  </div>
</section>
