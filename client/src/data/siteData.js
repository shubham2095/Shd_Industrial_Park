const img1 = "/images/gallery/site-1.jpeg";
const img2 = "/images/gallery/site-2.jpeg";
const img3 = "/images/gallery/site-3.jpeg";
const vrindaImage = "/images/projects/vrinda.jpeg";
const topiaImage = "/images/projects/topia.jpeg";
const galleryImage = "/images/gallery/site-4.jpeg";
const aboutImage = "/images/home/about.jpeg";
const amenitiesImage = "/images/home/amenities.jpeg";

// Central content file — edit here, components just read from this.
// Keeping data separate from JSX makes it easy to update text/numbers later.

export const projectInfo = {
  name: "SHD Industrial Park",
  nameHindi: "श्री हरिदास इंडस्ट्रियल पार्क",
  location: "Ishapur, Bhojpur, Modinagar-Hapur Highway (UP)",
  totalArea: "400 Acre",
  startingPrice: "₹20,000 / sq. ft.",
  phone: "+91 9711234211",
};

export const highlights = [
  {
    title: "400 Acre Mega Project",
    desc: "A large-scale integrated industrial township. Master-planned with wide roads and dedicated utility corridors.",
  },
  {
    title: "₹20,000/sq.ft Starting Rate",
    desc: "Competitive entry pricing for investors. Rates rise as phases sell out, rewarding early bookings.",
  },
  {
    title: "Government Approved Belt",
    desc: "Falls under an officially approved industrial belt. Clear land title under U.P. Revenue Code, Sec. 80.",
  },
  {
    title: "Construction Facility Available",
    desc: "On-site construction support for plot owners. In-house teams handle design through handover.",
  },
  {
    title: "100% Lease Guaranty",
    desc: "Assured lease and rental backing for investors. Capital starts working from the day you book.",
  },
];

export const nearbyLandmarks = [
  { name: "Amul", category: "Dairy & FMCG", logoKey: "amul" },
  { name: "Inox", category: "Industrial Gases", logoKey: "inox" },
  { name: "Mother Dairy", category: "Dairy & Retail", logoKey: "motherdairy" },
  { name: "Namaste India", category: "Restaurant Chain", logoKey: "namaste" },
];

export const previousProjects = [
  {
    name: "Vrinda 1",
    category: "Commercial Mall",
    year: "2021",
    desc: "A commercial mall and retail destination, fully leased with anchor stores and steady footfall.",
    tag: "Successfully Delivered",
    src: vrindaImage,
  },
  {
    name: "Topia - SRIDA Home",
    category: "Residential Apartments",
    year: "2019",
    desc: "Mid-rise apartment complex built in partnership with SRIDA Group, fully sold and occupied.",
    tag: "Successfully Delivered",
    src: topiaImage,
  },
];

export const amenities = [
  { label: "24 Hours Electricity", desc: "Uninterrupted power for round-the-clock operations." },
  { label: "24 Hours Security", desc: "Trained guards stationed at every entry point." },
  { label: "24 Hours CCTV Camera", desc: "Full-perimeter monitoring, recorded and stored." },
  { label: "70 Feet Wide Road", desc: "Divider entry road built for heavy vehicle movement." },
  { label: "24 Hours Water Supply", desc: "Dedicated supply line for industrial and staff use." },
  { label: "Internet Connectivity", desc: "Fibre-ready layout for offices and control rooms." },
];

// Replace `src` with real photo paths (files in client/public/images/gallery/)
// once site photography is available. Labels are kept so the grid/lightbox
// structure doesn't need to change later.
export const galleryImages = [
  { id: "g1", src: img1 },
  { id: "g2", src: img2 },
  { id: "g3", src: img3 },
  { id: "g4", src: galleryImage },
  { id: "g5", src: aboutImage },
  { id: "g6", src: amenitiesImage },
];