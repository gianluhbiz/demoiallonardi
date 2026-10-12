export const site = {
  name: "Iallonardi",
  tagline: "Sapori autentici",
  founded: 1965,
  legalName: "Carni & Salumi Iallonardi SAS",
  vat: "00898080940",
  phone: { label: "0865 221389", href: "tel:+390865221389" },
  phoneLab: { label: "0865 270014", href: "tel:+390865270014" },
  mobile: { label: "338 826 8932", href: "tel:+393388268932" },
  locations: [
    {
      id: "cucina",
      title: "Cucina e laboratorio",
      address: "Via Pietro Patriarca 26",
      city: "86170 Isernia (IS)",
      note: "Ristofast, macelleria e laboratorio di produzione",
      directions:
        "https://www.google.com/maps/dir/?api=1&destination=41.5977733,14.2341613",
    },
    {
      id: "negozio",
      title: "Punto vendita",
      address: "Via Belvedere 1",
      city: "86170 Isernia (IS)",
      note: "Salumi della casa da portare a casa",
      directions:
        "https://www.google.com/maps/dir/?api=1&destination=Via+Belvedere+1+86170+Isernia",
    },
  ],
  mapEmbed: "https://maps.google.com/maps?q=41.5977733,14.2341613&z=16&output=embed",
  ratings: {
    google: { score: "4,8", count: 166 },
    tripadvisor: { score: "4,9", count: 27, rank: "N. 7 di 90 ristoranti a Isernia" },
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/carniesalumiiallonardi", icon: "ri-instagram-line" },
    { label: "Facebook", href: "https://www.facebook.com/Salumi.Iallonardi", icon: "ri-facebook-circle-line" },
    { label: "TikTok", href: "https://www.tiktok.com/@sapori_autentici_", icon: "ri-tiktok-line" },
  ],
} as const;

/** Fasce orarie in minuti dalla mezzanotte, indice 0 = domenica (come Date.getDay). Fonte: Google Maps. */
export const openingHours: { day: string; slots: [number, number][] }[] = [
  { day: "Domenica", slots: [[17 * 60, 23 * 60]] },
  { day: "Lunedì", slots: [] },
  { day: "Martedì", slots: [[9 * 60, 14 * 60 + 30], [17 * 60, 23 * 60]] },
  { day: "Mercoledì", slots: [[9 * 60, 14 * 60 + 30], [17 * 60, 23 * 60]] },
  { day: "Giovedì", slots: [[9 * 60, 14 * 60 + 30], [17 * 60, 23 * 60]] },
  { day: "Venerdì", slots: [[9 * 60, 14 * 60 + 30], [17 * 60, 23 * 60]] },
  { day: "Sabato", slots: [[9 * 60, 14 * 60 + 30], [17 * 60, 23 * 60]] },
];

export const navLinks = [
  { label: "Storia", hash: "storia" },
  { label: "Laboratorio", hash: "laboratorio" },
  { label: "Bottega", hash: "bottega" },
  { label: "Cucina", hash: "cucina" },
  { label: "Recensioni", hash: "recensioni" },
  { label: "Dove siamo", hash: "visita" },
] as const;
