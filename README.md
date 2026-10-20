# Heart To Heart Pet Grooming

One-page website for Heart To Heart Pet Grooming, 5570 Ridge Rd, Parma, OH.

Built with Svelte 5, Vite, Tailwind CSS 4 and Font Awesome.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173/hearttoheartpetgrooming/
npm run build    # outputs to dist/
npm run preview
```

## Editing content

Phone, address, hours, services, reviews and social links live in
`src/lib/site.js`. The Facebook and Instagram icons appear once their URLs
are filled in there.

## Appointment form

The form posts to a Formspree or Web3Forms endpoint given at build time as
`VITE_FORM_ENDPOINT` (see `.env.example`). In GitHub, set it as the repository
variable `FORM_ENDPOINT` (Settings > Secrets and variables > Actions >
Variables). Without it, the form tells visitors to call instead.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. One-time setup: Settings > Pages > Source:
**GitHub Actions**.

The site is built for `https://<user>.github.io/hearttoheartpetgrooming/`.
When it moves to its own domain, build with `BASE_PATH=/` (add it as an `env`
on the build step) and add a `public/CNAME` file with the domain.
