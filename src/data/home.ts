export const marqueeItems = [
  "Salumi stagionati in casa",
  "Scottona locale",
  "Bacon e wurstel fatti da noi",
  "Birre artigianali molisane alla spina",
  "Bistecche scelte al banco",
  "Friggitoria home made",
  "Dal 1965",
];

export const stats = [
  { value: 1965, label: "Nasce la norcineria di famiglia", format: "year" },
  { value: 3, label: "Generazioni di norcini in famiglia", format: "plain" },
  { value: 28, label: "Mesi massimi di stagionatura del prosciutto", format: "plain" },
  { value: 166, label: "Recensioni Google, media 4,8", format: "plain" },
] as const;

export const processSteps = [
  {
    id: "disossatura",
    title: "Disossatura",
    text: "Ogni pezzo arriva dai macelli della zona e lo disossiamo a mano, uno alla volta.",
    image: "/images/gallery-2.webp",
    alt: "Prosciutto crudo intero su tela di juta",
  },
  {
    id: "mondatura",
    title: "Mondatura",
    text: "Col coltello togliamo il superfluo. Qui si decide la qualità di un salume, quindi nessuno ha fretta.",
    image: "/images/gallery-4.webp",
    alt: "Pancette arrotolate e prosciutto affettato",
  },
  {
    id: "macinatura",
    title: "Macinatura",
    text: "Grana media, sale, pepe e aromi naturali. Per la Molisella aggiungiamo finocchietto selvatico e coriandolo.",
    image: "/images/salsicce.webp",
    alt: "Salsicce stagionate appese con vino rosso",
  },
  {
    id: "insaccatura",
    title: "Insaccatura",
    text: "Budello naturale per le salsicce, tela e pesi per la soppressata, che stagiona schiacciata come una volta.",
    image: "/images/soppressata.webp",
    alt: "Soppressata casereccia molisana affettata",
  },
  {
    id: "stagionatura",
    title: "Stagionatura e taglio",
    text: "Venticinque giorni per una salsiccia, fino a ventotto mesi per un prosciutto. Poi lo tagliamo davanti a te.",
    image: "/images/salumi-capocollo.webp",
    alt: "Capocollo e salumi stagionati su fondo scuro",
  },
];

export const products = [
  {
    name: "Prosciutto crudo",
    aging: "24–28 mesi",
    text: "Cosce magre di suini selezionati. Intero con osso, disossato o al taglio.",
    image: "/images/prosciutto.webp",
  },
  {
    name: "Culatello molisano",
    aging: "12–16 mesi",
    text: "La parte più nobile della coscia, spezie e aromi naturali. Anche in vaschette da 100 g.",
    image: "/images/culatello.webp",
  },
  {
    name: "Lonza",
    aging: "Circa 4 mesi",
    text: "Dolce oppure piccante, con peperoncino tritato nell'impasto.",
    image: "/images/lonza.webp",
  },
  {
    name: "Pancetta tesa saporita",
    aging: "2–3 mesi",
    text: "In pezzi sottovuoto da 200 a 500 g, oppure arrotolata. Esiste anche piccante.",
    image: "/images/pancetta.webp",
  },
  {
    name: "Soppressata casereccia",
    aging: "Pressata a mano",
    text: "Solo prosciutto e filetto, i tagli più magri. Asciuga due o tre giorni sotto i pesi.",
    image: "/images/soppressata.webp",
  },
  {
    name: "Salsiccia boscaiola",
    aging: "25–30 giorni",
    text: "Funghi porcini e bacche di ginepro, budello naturale.",
    image: "/images/salsicce.webp",
  },
  {
    name: "Salsiccia Molisella",
    aging: "25–30 giorni",
    text: "Finocchietto selvatico e coriandolo.",
    image: "/images/gallery-11.webp",
  },
  {
    name: "Salsiccia di fegato",
    aging: "Ricetta molisana",
    text: "Cuore, fegato, guanciale e spalla con aglio, peperoncino e pepe nero.",
    image: "/images/gallery-6.webp",
  },
];

export const kitchenTiles = [
  {
    title: "Mario's",
    text: "Scottona locale, scamorza piastrata, uovo all'occhio di bue, patata spaghetto.",
    image: "/images/burger-marios.webp",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Bistecche al banco",
    text: "Tagli locali, italiani ed esteri. Scegli il pezzo, lo cuociamo alla griglia.",
    image: "/images/bistecca-servita.webp",
    span: "lg:col-span-2",
  },
  {
    title: "Don Raffaè",
    text: "Bufala campana DOP, datterino, basilico, olio molisano.",
    image: "/images/burger-don-raffae.webp",
    span: "",
  },
  {
    title: "Tagliere della casa",
    text: "I nostri salumi con i formaggi del territorio.",
    image: "/images/tagliere.webp",
    span: "",
  },
  {
    title: "Bis-Steack",
    text: "Entrecôte di scottona, caciocavallo molisano, cipolla caramellata.",
    image: "/images/panino-bis-steack.webp",
    span: "lg:col-span-2",
  },
  {
    title: "Arrosticini",
    text: "Spiedini cotti alla brace, da mangiare con le mani.",
    image: "/images/arrosticini.webp",
    span: "lg:col-span-2",
  },
];

export const reviews = [
  {
    quote:
      "Siamo stati accolti con grande entusiasmo e professionalità dallo chef Mario. Ci ha guidato nella scelta della carne e degli antipasti.",
    author: "Rossana B.",
    source: "Tripadvisor",
  },
  {
    quote: "Mangiare la carne dove la conoscono. Grande qualità e competenza.",
    author: "Paolo M.",
    source: "Google",
  },
  {
    quote:
      "A distanza di giorni ripenso ancora alla bontà del panino e dei prodotti, come porchetta e bacon che fanno loro.",
    author: "Giuseppe D.",
    source: "Tripadvisor",
  },
  {
    quote: "Piccola premessa: se potessi lascerei 10 stelle.",
    author: "Letizia V.",
    source: "Tripadvisor",
  },
  {
    quote:
      "Prodotti locali direttamente dal produttore al consumatore. La carne che abbiamo preso si scioglieva in bocca.",
    author: "Stefania S.",
    source: "Google",
  },
  {
    quote: "Hamburger top, per non parlare del pane: morbido e soprattutto leggero.",
    author: "Jole G.",
    source: "Tripadvisor",
  },
  {
    quote:
      "Abbiamo pranzato con una buonissima birra artigianale molisana. E siamo tornati con la spesa dalla macelleria.",
    author: "Simona P.",
    source: "Tripadvisor",
  },
  {
    quote: "Il pane è morbido e fragrante, la carne è succosa e cotta alla perfezione.",
    author: "Giuseppe D. S.",
    source: "Google",
  },
  {
    quote: "Panini fantastici e personale super disponibile. Ampia selezione di carni e diversi tagli.",
    author: "Francesco L.",
    source: "Tripadvisor",
  },
  {
    quote: "Ogni volta un'esperienza unica, dai fritti ai panini alla carne.",
    author: "Cliente Google",
    source: "Google",
  },
];
