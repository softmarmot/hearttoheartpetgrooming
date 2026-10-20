<script>
  import { site } from '../lib/site.js';

  // Formspree / Web3Forms endpoint, set at build time. Without one the form
  // asks people to call instead of silently dropping their request.
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

  let status = $state('idle'); // idle | sending | sent | error

  async function submit(event) {
    event.preventDefault();
    if (!endpoint) {
      status = 'error';
      return;
    }
    status = 'sending';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.currentTarget),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      status = 'sent';
      event.currentTarget.reset();
    } catch {
      status = 'error';
    }
  }

  const field = 'w-full rounded-[14px] border-0 bg-white px-4 py-[13px] text-base text-ink';
  const label = 'grid gap-1.5 text-sm font-extrabold text-[#e8dfee]';
</script>

<section id="book" class="pb-[60px] sm:pb-[88px]">
  <div class="wrap">
    <div
      class="grid items-center gap-7 rounded-[26px] bg-ink px-[22px] py-9 text-white sm:rounded-[32px] sm:p-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-12"
    >
      <div>
        <span class="kicker text-[#f2a1b1]">Book a visit</span>
        <h2 class="mt-2.5 mb-3.5 text-[32px] font-semibold sm:text-[40px]">Request an appointment</h2>
        <p class="text-lg text-[#d9cfe0]">
          Tell us about your pet and when works for you. We'll call you back to confirm a time.
        </p>
      </div>

      {#if status === 'sent'}
        <div class="rounded-card bg-white/10 p-8 text-center" role="status">
          <i class="fa-solid fa-circle-check text-4xl text-[#f2a1b1]" aria-hidden="true"></i>
          <p class="mt-3 text-xl font-bold">Thanks! We got your request.</p>
          <p class="text-[#d9cfe0]">We'll call you back soon to confirm a time.</p>
        </div>
      {:else}
        <form class="grid gap-3.5 sm:grid-cols-2" onsubmit={submit}>
          <label class={label}>Your name<input class={field} name="name" required placeholder="Jane Smith" autocomplete="name" /></label>
          <label class={label}>Phone<input class={field} name="phone" type="tel" required placeholder="(440) 555-0123" autocomplete="tel" /></label>
          <label class={label}>Pet's name<input class={field} name="pet" placeholder="Biscuit" /></label>
          <label class={label}>
            Dog or cat
            <select class={field} name="species"><option>Dog</option><option>Cat</option></select>
          </label>
          <label class="{label} sm:col-span-2">
            What would you like?
            <textarea class="{field} h-[92px] resize-none" name="message" placeholder="Full groom for a 30 lb goldendoodle, any weekday morning"></textarea>
          </label>
          <button class="btn btn-primary cursor-pointer justify-center border-0 sm:col-span-2" type="submit" disabled={status === 'sending'}>
            <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
            {status === 'sending' ? 'Sending…' : 'Send request'}
          </button>
          {#if status === 'error'}
            <p class="text-[#f2a1b1] sm:col-span-2" role="alert">
              Sorry, the request couldn't be sent. Please call us at
              <a class="font-extrabold underline" href={site.phoneHref}>{site.phone}</a>.
            </p>
          {/if}
        </form>
      {/if}
    </div>
  </div>
</section>
