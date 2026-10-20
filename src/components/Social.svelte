<script>
  import { site } from '../lib/site.js';

  let { class: className = '' } = $props();

  const links = [
    { href: site.facebook, label: 'Facebook', icon: 'fa-facebook-f' },
    { href: site.instagram, label: 'Instagram', icon: 'fa-instagram' },
  ].filter((link) => link.href);
</script>

{#if links.length}
  <div class="flex gap-2.5 {className}">
    {#each links as link}
      <a class="social-link" href={link.href} target="_blank" rel="noopener" aria-label={link.label}>
        <i class="fa-brands {link.icon}" aria-hidden="true"></i>
      </a>
    {/each}
  </div>
{/if}
