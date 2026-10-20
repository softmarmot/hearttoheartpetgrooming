// Business details shown across the site. Hours and services come from
// directory listings and still need to be confirmed with the shop.
export const site = {
  name: 'Heart To Heart Pet Grooming',
  phone: '440-842-4884',
  phoneHref: 'tel:4408424884',
  street: '5570 Ridge Rd',
  city: 'Parma, OH 44129',
  years: 35,
  directionsHref:
    'https://www.google.com/maps/dir/?api=1&destination=5570+Ridge+Rd%2C+Parma%2C+OH+44129',
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
