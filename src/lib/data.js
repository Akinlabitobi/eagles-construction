// All site content lives here.

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

// Real photos from our sites live in /public/site.
const site = (name) => `/site/${name}`;

export const images = {
  hero: site("formwork-structure.jpeg"),
  plans: site("reviewing-drawings.jpeg"),
  siteTeam: site("team-drawings.jpeg"),
  onSite: site("rebar-slab-work.jpeg"),
  concrete: site("concrete-casting.jpeg"),
  supervision: site("site-supervision.jpeg"),
  rooftop: site("rooftop-works.jpeg"),
  props: site("steel-props-formwork.jpeg"),
  interior: img("1600607687939-ce8a6c25118c"),
  modern: img("1600566753190-17f0baa2a6c3"),
};

export const siteVideo = site("site-video.mp4");

// Photos shown in the "On site" gallery.
export const gallery = [
  { src: site("formwork-structure.jpeg"), alt: "Beams, slab formwork and steel props on a building under construction" },
  { src: site("concrete-casting.jpeg"), alt: "Supervising a concrete slab cast over reinforcement" },
  { src: site("reviewing-drawings.jpeg"), alt: "Our team going through the building drawings on site" },
  { src: site("rebar-slab-work.jpeg"), alt: "Tying reinforcement bars for a suspended slab" },
  { src: site("rooftop-works.jpeg"), alt: "Crew working on the roof deck with a material hoist" },
  { src: site("steel-props-formwork.jpeg"), alt: "Steel props supporting formwork for the next floor" },
  { src: site("site-supervision.jpeg"), alt: "Checking finished concrete levels on the slab" },
  { src: site("team-drawings.jpeg"), alt: "Engineers and builders reviewing structural drawings" },
  { src: site("engineers-on-slab.jpeg"), alt: "Site engineer and builder on the reinforcement deck" },
  { src: site("material-hoist.jpeg"), alt: "Material hoist set up for lifting concrete to upper floors" },
];

export const company = {
  name: "Eagles Construction Company",
  legalName: "Eagles Construction Company",
  rcNumber: "",
  tagline: "Experts in building work, drawing, interior and general work.",
  description:
    "Eagles Construction Company is a Nigerian construction firm — experts in building work, architectural and structural drawings, interior finishing and general work. On time, on budget and built to last.",
  phone: "0906 205 1753",
  phoneHref: "tel:+2349062051753",
  phones: [
    { display: "0906 205 1753", href: "tel:+2349062051753" },
    { display: "0916 884 8482", href: "tel:+2349168848482" },
  ],
  whatsapp: "2349062051753",
  email: "",
  address: "Lagos, Nigeria",
  hours: "Mon – Sat, 8:00am – 6:00pm",
  mapQuery: "Lagos, Nigeria",
  socials: [],
};

export const whatsappLink = (text = "Hello Eagles Construction Company, I'd like to discuss a project.") =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: 150, suffix: "+", label: "Homes delivered" },
  { value: 12, suffix: "", label: "Years building" },
  { value: 98, suffix: "%", label: "Handed over on schedule" },
  { value: 6, suffix: "", label: "States covered" },
];

export const locations = [
  "Lekki",
  "Ikoyi",
  "Ajah",
  "Magodo",
  "Ikeja GRA",
  "Abuja",
  "Maitama",
  "Gwarinpa",
  "Ibadan",
  "Port Harcourt",
  "Enugu",
  "Asaba",
];

export const services = [
  {
    slug: "building",
    icon: "home",
    title: "Building Work",
    summary:
      "Foundations, blockwork, columns, beams, slabs and roofing — complete building construction by our experienced site team.",
    points: ["Foundations & blockwork", "Reinforcement, formwork & concrete casting", "Roofing & structural works"],
    image: images.onSite,
  },
  {
    slug: "drawing",
    icon: "design",
    title: "Drawings & Design",
    summary:
      "Architectural and structural drawings, floor plans and 3D views prepared for your plot, your budget and your building approval.",
    points: ["Architectural floor plans", "Structural & MEP drawings", "Building plan approval support"],
    image: images.plans,
  },
  {
    slug: "interior",
    icon: "interior",
    title: "Interior Work",
    summary:
      "Tiling, POP ceilings, wardrobes, kitchens, lighting and painting — finished to a standard you can move straight into.",
    points: ["Tiling & flooring", "POP ceilings & painting", "Kitchens, wardrobes & lighting"],
    image: images.interior,
  },
  {
    slug: "general",
    icon: "renovate",
    title: "General Work",
    summary:
      "Renovations, extensions, repairs and maintenance on homes and commercial buildings — no job too big or too small.",
    points: ["Renovation & extensions", "Repairs & maintenance", "Plumbing & electrical works"],
    image: images.supervision,
  },
];

export const packages = [
  {
    name: "Bungalow",
    from: "₦45M",
    detail: "3 – 4 bedrooms",
    features: ["Architectural & structural drawings", "Full construction to finishing", "Standard fittings"],
  },
  {
    name: "Duplex",
    from: "₦95M",
    detail: "4 – 5 bedrooms",
    features: ["Custom design & 3D renders", "Full construction to finishing", "Premium tiles & fittings", "Boys' quarters option"],
    featured: true,
  },
  {
    name: "Luxury Villa",
    from: "₦250M",
    detail: "5+ bedrooms",
    features: ["Bespoke architecture", "Smart home & solar ready", "Pool & landscaping", "Interior design included"],
  },
];

export const process = [
  {
    title: "Consultation",
    text: "We visit your land, listen to what you want and agree on a realistic budget and timeline.",
  },
  {
    title: "Design & Costing",
    text: "You get floor plans, 3D views and a detailed bill of quantities — no hidden costs later.",
  },
  {
    title: "Approvals",
    text: "We prepare and submit your building plan for approval so work can start legally.",
  },
  {
    title: "Construction",
    text: "Foundation, blockwork, roofing, plumbing and electrical — with weekly progress updates.",
  },
  {
    title: "Finishing & Handover",
    text: "Final finishing, a joint inspection, then we hand you the keys with a 12-month defects warranty.",
  },
];

export const projects = [
  {
    slug: "lagos-residential-build",
    title: "Residential Building Works",
    location: "Lagos",
    category: "Building Work",
    year: 2026,
    status: "Ongoing",
    image: images.hero,
    gallery: [images.concrete, images.onSite, images.props, images.rooftop],
    summary:
      "Multi-storey residential construction — reinforcement, formwork, concrete casting and slab works, supervised daily by our site team.",
  },
  {
    slug: "admiralty-duplex",
    title: "The Admiralty Duplex",
    location: "Lekki Phase 1, Lagos",
    category: "Duplex",
    bedrooms: 5,
    size: "520 sqm",
    year: 2025,
    status: "Completed",
    duration: "14 months",
    image: img("1600585154340-be6161a56a0c"),
    gallery: [images.interior, images.modern],
    summary:
      "A contemporary 5-bedroom detached duplex with a double-height living room, rooftop terrace and boys' quarters.",
  },
  {
    slug: "bourdillon-villa",
    title: "Bourdillon Villa",
    location: "Ikoyi, Lagos",
    category: "Luxury Villa",
    bedrooms: 6,
    size: "890 sqm",
    year: 2025,
    status: "Completed",
    duration: "20 months",
    image: img("1613490493576-7fde63acd811"),
    gallery: [images.interior, images.modern],
    summary:
      "A six-bedroom luxury villa with a pool deck, cinema room and fully automated lighting and security.",
  },
  {
    slug: "maitama-terrace",
    title: "Maitama Terrace",
    location: "Maitama, Abuja",
    category: "Terrace",
    bedrooms: 4,
    size: "380 sqm",
    year: 2024,
    status: "Completed",
    duration: "12 months",
    image: img("1600596542815-ffad4c1539a9"),
    gallery: [images.interior, images.modern],
    summary:
      "A row of four-bedroom terrace homes with private gardens, solar-ready roofs and shared green space.",
  },
  {
    slug: "jericho-bungalow",
    title: "Jericho Bungalow",
    location: "Jericho GRA, Ibadan",
    category: "Bungalow",
    bedrooms: 3,
    size: "240 sqm",
    year: 2024,
    status: "Completed",
    duration: "8 months",
    image: img("1564013799919-ab600027ffc6"),
    gallery: [images.interior, images.modern],
    summary:
      "A bright three-bedroom family bungalow with an open-plan kitchen and generous outdoor living space.",
  },
  {
    slug: "sangotedo-gardens",
    title: "Sangotedo Gardens Estate",
    location: "Ajah, Lagos",
    category: "Estate",
    bedrooms: 4,
    size: "24 units",
    year: 2026,
    status: "Ongoing",
    duration: "30 months",
    image: img("1580587771525-78b9dba3b914"),
    gallery: [images.siteTeam, images.onSite],
    summary:
      "A gated estate of 24 four-bedroom semi-detached duplexes with paved roads, drainage and 24-hour security.",
  },
  {
    slug: "gra-family-duplex",
    title: "GRA Family Duplex",
    location: "Old GRA, Port Harcourt",
    category: "Duplex",
    bedrooms: 4,
    size: "420 sqm",
    year: 2023,
    status: "Completed",
    duration: "13 months",
    image: img("1512917774080-9991f1c4c750"),
    gallery: [images.interior, images.modern],
    summary:
      "A four-bedroom family duplex with a home office, family lounge upstairs and a covered two-car carport.",
  },
];

// Placeholder testimonials — replace with real client reviews before launch.
export const testimonials = [
  {
    quote:
      "I was in London the whole time and still felt like I was on site. The weekly videos and honest costing made all the difference. Our duplex was ready a month early.",
    name: "Client name",
    role: "Duplex owner, Lekki",
  },
  {
    quote:
      "They handled the approvals, the design and the build. No stories, no surprise bills. The finishing is better than houses I've seen at twice the price.",
    name: "Client name",
    role: "Bungalow owner, Ibadan",
  },
  {
    quote:
      "Professional from the first site visit to handover. The project manager answered every call and every WhatsApp message.",
    name: "Client name",
    role: "Terrace owner, Abuja",
  },
];

export const values = [
  {
    icon: "shield",
    title: "Built to last",
    text: "Tested materials, proper reinforcement and supervision at every stage — no shortcuts on structure.",
  },
  {
    icon: "check",
    title: "Transparent pricing",
    text: "A detailed bill of quantities up front and milestone payments, so you always know where your money is.",
  },
  {
    icon: "clock",
    title: "On schedule",
    text: "Realistic timelines agreed at the start, tracked weekly and shared with you.",
  },
];
