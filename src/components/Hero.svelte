<script>
  import { site } from '../lib/site.js';
  import DogArt from './art/DogArt.svelte';
</script>

<section class="relative overflow-hidden pt-9 pb-14 sm:pt-16 sm:pb-[84px]">
  <div class="wrap grid items-center gap-[22px] sm:gap-12 lg:grid-cols-[1.08fr_.92fr]">
    <div>
      <span class="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-2 text-sm font-extrabold text-rose-dark">
        <i class="fa-solid fa-heart" aria-hidden="true"></i>
        Caring for Parma pets for {site.years} years
      </span>
      <h1 class="mt-[18px] mb-3.5 text-[42px] font-semibold tracking-[-.01em] sm:mt-[22px] sm:mb-5 sm:text-[64px]">
        Gentle grooming, <em class="text-rose not-italic">from the heart.</em>
      </h1>
      <p class="max-w-[520px] text-lg text-ink-soft sm:text-xl">
        Baths, haircuts and nail trims for dogs and cats, done with patience and care. Your pet goes home clean,
        comfy and happy.
      </p>
      <div class="mt-8 flex flex-wrap gap-3.5">
        <a class="btn btn-primary justify-center max-sm:flex-[1_1_100%]" href={site.phoneHref}>
          <i class="fa-solid fa-phone" aria-hidden="true"></i>Call to book
        </a>
        <a class="btn btn-ghost justify-center max-sm:flex-[1_1_100%]" href="#book">
          <i class="fa-solid fa-calendar-days" aria-hidden="true"></i>Request an appointment
        </a>
      </div>
      <div class="mt-[26px] flex flex-wrap gap-x-[18px] gap-y-3 text-[15px] font-bold text-ink-soft sm:mt-9 sm:gap-[22px]">
        <span class="inline-flex items-center gap-2">
          <i class="fa-solid fa-heart text-rose" aria-hidden="true"></i>{site.years} years in business
        </span>
        <span class="inline-flex items-center gap-2">
          <i class="fa-solid fa-clock text-rose" aria-hidden="true"></i>{site.hoursShort}
        </span>
        <span class="inline-flex items-center gap-2">
          <i class="fa-solid fa-location-dot text-rose" aria-hidden="true"></i>{site.street}, Parma
        </span>
      </div>
    </div>
    <div class="mx-auto w-full max-w-[230px] max-lg:-order-1 sm:max-w-[460px] lg:max-w-none">
      <DogArt />
    </div>
  </div>
</section>
