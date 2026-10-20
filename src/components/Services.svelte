<script>
  import { services, site } from '../lib/site.js';
</script>

<section id="services" class="border-y border-line bg-white py-[60px] sm:py-[88px]">
  <div class="wrap">
    <div class="mx-auto mb-11 max-w-[640px] text-center">
      <span class="kicker">Our services</span>
      <h2 class="section-title">A fresh look for every pet</h2>
      <p class="text-lg text-ink-soft">
        From a quick tidy-up to a full makeover, every visit is calm, careful and unhurried.
      </p>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-[22px] lg:grid-cols-4">
      {#each services as service}
        <div
          class="rounded-card border border-line bg-cream px-[22px] py-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(46,34,56,.35)] sm:px-[26px] sm:py-[30px]"
        >
          <div class="mb-5 grid size-[58px] place-items-center rounded-[18px] text-[26px] {service.tone}">
            <i class="fa-solid {service.icon}" aria-hidden="true"></i>
          </div>
          <h3 class="mb-2 text-[23px] font-semibold">{service.title}</h3>
          <p class="text-ink-soft">{service.text}</p>
        </div>
      {/each}
    </div>
    <p class="mt-[34px] text-center font-semibold text-ink-soft">
      Prices depend on your pet's size and coat.
      <a class="border-b-2 border-blush font-extrabold text-rose" href={site.phoneHref}>Call us for a quote</a>
    </p>
  </div>
</section>
