<script>
  import { reviews } from '../lib/site.js';
</script>

<section id="reviews" class="bg-blush py-[60px] sm:py-[88px]">
  <div class="wrap">
    <div class="mx-auto mb-11 max-w-[640px] text-center">
      <span class="kicker">Kind words</span>
      <h2 class="section-title">What our customers say</h2>
    </div>
    <div class="grid gap-[22px] lg:grid-cols-3">
      {#each reviews as review}
        <figure class="rounded-card bg-white px-[30px] py-8">
          <i class="fa-solid fa-quote-left text-4xl text-rose/35" aria-hidden="true"></i>
          <blockquote class="mt-3 mb-[18px] text-xl font-bold">{review.text}</blockquote>
          <figcaption class="text-[15px] font-bold text-ink-soft">{review.author}</figcaption>
        </figure>
      {/each}
    </div>
  </div>
</section>
