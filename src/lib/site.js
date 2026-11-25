// Business details shown across the site. Hours and services come from
// directory listings and still need to be confirmed with the shop.
export const site = {
  name: 'Heart To Heart Pet Grooming',
  phone: '440-842-4884',
  phoneHref: 'tel:4408424884',
  street: '5570 Ridge Rd',
  city: 'Parma, OH 44129',
  years: 35,
  // Full address used for the embedded map and the navigation links.
  mapQuery: 'Heart To Heart Pet Grooming, 5570 Ridge Rd, Parma, OH 44129',
  // Social page URLs are not known yet; icons are hidden until these are set.
  facebook: '',
  instagram: '',
  hours: [
    { days: 'Monday – Friday', time: '9am – 6pm' },
    { days: 'Saturday – Sunday', time: 'Closed' },
  ],
  hoursShort: 'Mon–Fri, 9am–6pm',
};

export const services = [
  {
    icon: 'fa-bath',
    title: 'Bath & Brush',
    text: 'Shampoo, blow-dry, brush-out and ear cleaning. Perfect between haircuts.',
    tone: 'bg-blush text-rose',
  },
  {
    icon: 'fa-scissors',
    title: 'Full Groom',
    text: 'A bath plus a breed-style or custom haircut, nail trim and a fresh finish.',
    tone: 'bg-sage text-[#2f8f73]',
  },
  {
    icon: 'fa-paw',
    title: 'Nail Trim',
    text: 'Quick, gentle trims that keep paws comfortable and floors scratch-free.',
    tone: 'bg-[#fdf0d9] text-[#c47f1c]',
  },
  {
    icon: 'fa-cat',
    title: 'Cat Grooming',
    text: 'Careful baths, brush-outs and lion cuts for long-haired and nervous cats.',
    tone: 'bg-[#ece6f7] text-[#7a5bb5]',
  },
];

export const points = [
  {
    icon: 'fa-heart',
    title: '35 years of experience',
    text: 'Three decades of grooming every breed and coat, right here in Parma.',
  },
  {
    icon: 'fa-cat',
    title: 'Dogs and cats',
    text: 'Patient with shy, senior and first-time pets, and long-haired cats too.',
  },
  {
    icon: 'fa-calendar-days',
    title: 'Easy scheduling',
    text: "We'll work with you to find an appointment that fits your week.",
  },
];

export const reviews = [
  { text: 'They actually care for the well-being of animals.', author: 'Matt B.' },
  { text: 'Exceptional in grooming… customer friendly.', author: 'Liz L.' },
  { text: 'A genuine love for the furry friends.', author: 'Chanda C.' },
];

const q = encodeURIComponent(site.mapQuery);

// Embedded Google Map (no API key needed).
export const mapEmbedSrc = `https://www.google.com/maps?q=${q}&z=16&output=embed`;

// iPhones and iPads open Apple Maps; everything else gets the Google Maps
// directions link, which opens the Google Maps app on Android when installed.
const isApple =
  typeof navigator !== 'undefined' &&
  (/iPhone|iPad|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

export const directionsHref = isApple
  ? `https://maps.apple.com/?daddr=${q}`
  : `https://www.google.com/maps/dir/?api=1&destination=${q}`;
