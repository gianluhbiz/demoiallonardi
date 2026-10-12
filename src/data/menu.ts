export type MenuItem = {
  name: string;
  description: string;
  tags?: string[];
  image?: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  icon: string;
  title: string;
  intro: string;
  cover: string;
  coverAlt: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "burger",
    label: "Burger",
    icon: "ri-restaurant-2-line",
    title: "Burger di scottona",
    intro: "Macinata ogni mattina in macelleria, servita nel pane morbido artigianale.",
    cover: "/images/burger-marios.webp",
    coverAlt: "Burger Mario's con uovo e patata spaghetto",
    items: [
      {
        name: "Mario's",
        description:
          "Hamburger di scottona locale, lattuga, pomodorino piastrato, maionese, salsa yogurt, scamorza piastrata, uovo all'occhio di bue, patata spaghetto fritta.",
        tags: ["Firma dello chef"],
        image: "/images/burger-marios.webp",
      },
      {
        name: "Don Raffaè",
        description:
          "Hamburger di scottona locale, lattuga, datterino, mozzarella di bufala campana DOP, olio extravergine molisano, basilico.",
        tags: ["Bufala DOP"],
        image: "/images/burger-don-raffae.webp",
      },
      {
        name: "Cheese Burger",
        description:
          "Hamburger di scottona locale, lattuga, pomodoro, provola affumicata, bacon croccante fatto da noi, maionese, ketchup, salsa barbecue.",
        tags: ["Bacon home made"],
        image: "/images/burger-cheese.webp",
      },
      {
        name: "Classico Burger",
        description: "Hamburger di scottona locale, lattuga, pomodoro, maionese, ketchup, salsa barbecue.",
        image: "/images/burger-classico.webp",
      },
      {
        name: "Classico di pollo",
        description: "Hamburger di pollo, lattuga, pomodoro, maionese, ketchup, salsa barbecue.",
        image: "/images/burger-pollo.webp",
      },
    ],
  },
  {
    id: "panini",
    label: "Panini",
    icon: "ri-cake-3-line",
    title: "Panini e ciabatte",
    intro: "Ciabatta artigianale riempita con quello che lavoriamo al banco.",
    cover: "/images/panino-bis-steack.webp",
    coverAlt: "Panino Bis-Steack con entrecôte e cipolla caramellata",
    items: [
      {
        name: "Bis-Steack",
        description:
          "Ciabatta artigianale, entrecôte di scottona locale, caciocavallo molisano, cipolla caramellata, ketchup.",
        tags: ["Scottona locale"],
        image: "/images/panino-bis-steack.webp",
      },
      {
        name: "Hot Dog",
        description: "Ciabattina artigianale, wurstel di maiale fatto da noi, patatine fritte, ketchup, maionese.",
        tags: ["Wurstel home made"],
        image: "/images/hot-dog.webp",
      },
      {
        name: "Panino del banco",
        description:
          "Scegli tu cosa metterci: porchetta della casa, salumi stagionati, formaggi molisani. Lo componiamo al momento.",
        image: "/images/panino-ciabatta.webp",
      },
    ],
  },
  {
    id: "griglia",
    label: "Griglia",
    icon: "ri-fire-line",
    title: "Dalla griglia",
    intro: "La carne la scegli con noi al banco. Al resto pensa la brace.",
    cover: "/images/hero-bistecca.webp",
    coverAlt: "Bistecca alla griglia tagliata, cottura al sangue",
    items: [
      {
        name: "Bistecche",
        description:
          "Tagli locali, italiani e internazionali. Scegli il pezzo e la cottura, lo serviamo tagliato sulla pietra.",
        tags: ["Al peso"],
        image: "/images/bistecca-servita.webp",
      },
      {
        name: "Ribs Pork",
        description: "Costine di maiale cotte a bassa temperatura, salsa barbecue fatta da noi.",
        tags: ["Bassa temperatura"],
        image: "/images/ribs.webp",
      },
      {
        name: "Arrosticini",
        description: "Spiedini di carne cotti alla brace, serviti a mazzetto.",
        image: "/images/arrosticini.webp",
      },
    ],
  },
  {
    id: "crudi",
    label: "Crudi",
    icon: "ri-knife-line",
    title: "Tartare e carpacci",
    intro: "Carne cruda scelta al banco e condita al momento. Chiedi i tagli del giorno.",
    cover: "/images/banco.webp",
    coverAlt: "Il banco della macelleria con preparati del giorno",
    items: [
      {
        name: "Tartare",
        description: "Carne selezionata al banco, condita al momento secondo la ricetta della casa.",
      },
      {
        name: "Carpaccio",
        description: "Fettine sottili di carne scelta, condimento a crudo.",
      },
    ],
  },
  {
    id: "taglieri",
    label: "Taglieri",
    icon: "ri-layout-grid-line",
    title: "Taglieri",
    intro: "Quello che stagioniamo in laboratorio, affettato al momento.",
    cover: "/images/tagliere.webp",
    coverAlt: "Tagliere di salumi e formaggi con fonduta e tartufo",
    items: [
      {
        name: "Tagliere Iallonardi",
        description:
          "Prosciutto, soppressata, lonza, pancetta e salsicce stagionate nel nostro laboratorio, con formaggi del territorio.",
        tags: ["Salumi della casa"],
        image: "/images/tagliere-ardesia.webp",
      },
      {
        name: "Antipasti del banco",
        description: "Lasciati consigliare dallo chef Mario su cosa assaggiare oggi.",
      },
    ],
  },
  {
    id: "fritti",
    label: "Fritti",
    icon: "ri-bowl-line",
    title: "Friggitoria",
    intro: "Tutto preparato in casa, fritto al momento.",
    cover: "/images/patatine.webp",
    coverAlt: "Patatine fritte con maionese nella vaschetta Iallonardi",
    items: [
      {
        name: "Patatine fritte",
        description: "Croccanti, con le salse della casa.",
        image: "/images/patatine.webp",
      },
      {
        name: "Patata spaghetto",
        description: "Patate tagliate a filo e fritte, la stessa che trovi sul Mario's.",
      },
      {
        name: "Fritti del giorno",
        description: "La friggitoria cambia con il banco: chiedi cosa c'è oggi.",
      },
    ],
  },
  {
    id: "bere",
    label: "Da bere",
    icon: "ri-goblet-line",
    title: "Da bere",
    intro: "Birra molisana alla spina e una cantina pensata per la carne.",
    cover: "/images/interni-bar.webp",
    coverAlt: "Il bancone con le spine di birra artigianale",
    items: [
      {
        name: "Birre artigianali molisane",
        description: "Alla spina, a rotazione. Le trovi scritte sulla lavagna.",
        tags: ["Alla spina"],
        image: "/images/interni-lavagna.webp",
      },
      {
        name: "Vini",
        description: "Ampia scelta di rossi molisani e italiani da abbinare alla carne.",
      },
      {
        name: "Bibite e acqua",
        description: "Classiche, in lattina e in bottiglia.",
      },
    ],
  },
  {
    id: "bottega",
    label: "Da portare a casa",
    icon: "ri-shopping-basket-2-line",
    title: "Dalla bottega",
    intro: "Prima di andare via passa dal banco: i nostri salumi viaggiano anche sottovuoto.",
    cover: "/images/salsicce-sottovuoto.webp",
    coverAlt: "Salsicce Iallonardi confezionate sottovuoto",
    items: [
      { name: "Prosciutto crudo", description: "Stagionato 24–28 mesi. Al taglio o intero.", tags: ["24–28 mesi"] },
      { name: "Culatello molisano", description: "Stagionato 12–16 mesi. Anche in vaschette da 100 g.", tags: ["12–16 mesi"] },
      { name: "Lonza dolce o piccante", description: "Circa quattro mesi di stagionatura." },
      { name: "Pancetta tesa e arrotolata", description: "Pezzi sottovuoto da 200 a 500 g." },
      { name: "Soppressata casereccia molisana", description: "Da 250 a 300 g, dolce o piccante." },
      {
        name: "Salsicce stagionate",
        description: "Boscaiola ai porcini, Molisella al finocchietto, sale e pepe, di fegato.",
      },
      { name: "Carne al taglio", description: "Tagli locali, italiani ed esteri. Preparati pronti da cuocere." },
    ],
  },
];
