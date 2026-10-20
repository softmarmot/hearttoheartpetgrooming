<script>
  import { points, site } from '../lib/site.js';
  import FriendsArt from './art/FriendsArt.svelte';
</script>

<section id="why" class="py-[60px] sm:py-[88px]">
  <div class="wrap grid items-center gap-9 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
    <div class="relative grid aspect-[1/.9] place-items-center overflow-hidden rounded-[32px] bg-sage">
      <div
        class="absolute top-4 right-4 rounded-[22px] bg-white px-3.5 py-2.5 text-center shadow-[0_14px_30px_-18px_rgba(46,34,56,.45)] sm:top-[26px] sm:right-[26px] sm:px-5 sm:py-3.5"
      >
        <strong class="block font-display text-[34px] leading-none font-semibold text-rose sm:text-[44px]">{site.years}</strong>
        <span class="text-[13px] font-extrabold tracking-[.08em] text-ink-soft uppercase">years in Parma</span>
      </div>
      <FriendsArt />
    </div>
    <div>
      <div class="mb-7 max-w-[640px]">
        <span class="kicker">Why Heart To Heart</span>
        <h2 class="section-title">Treated like family, every visit</h2>
        <p class="text-lg text-ink-soft">We're a small local shop, so your pet gets real attention, not an assembly line.</p>
        <p
          class="mt-[18px] mb-[30px] border-l-4 border-rose py-1 pl-[18px] font-display text-xl font-medium text-rose-dark sm:text-[23px]"
        >
          “We treat each pet we groom as if it were our own.”
        </p>
      </div>
      <div class="mt-2 grid gap-[26px]">
        {#each points as point}
          <div class="flex gap-[18px]">
            <div class="grid size-[46px] flex-none place-items-center rounded-full bg-rose text-lg text-white">
              <i class="fa-solid {point.icon}" aria-hidden="true"></i>
            </div>
            <div>
              <h3 class="mb-0.5 text-[21px] font-semibold">{point.title}</h3>
              <p class="text-ink-soft">{point.text}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
