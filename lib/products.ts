export interface Product {
  name: string;
  scientificName?: string;
  packaging?: string;
  grading?: string;
  notes?: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: "large-pelagics",
    name: "Large pelagics",
    description: "Offshore migratory species including tuna, swordfish, and marlin. Available whole round, H&G, and as loins or portions. Contact sales for current availability and grading.",
    icon: "fish-large",
    products: [
      { name: "Swordfish", scientificName: "Xiphias gladius", packaging: "H&G, Loins, Portions", grading: "3–5kg, 5–10kg, 10kg+" },
      { name: "Bigeye tuna", scientificName: "Thunnus obesus", packaging: "WR, H&G, Loins", grading: "10–20kg, 20–40kg, 40kg+" },
      { name: "Yellowfin tuna", scientificName: "Thunnus albacares", packaging: "WR, H&G, Loins, Portions", grading: "10–20kg, 20–40kg" },
      { name: "Albacore tuna", scientificName: "Thunnus alalunga", packaging: "WR, H&G, Loins", grading: "8–15kg" },
      { name: "Skipjack tuna", scientificName: "Katsuwonus pelamis", packaging: "WR, H&G", grading: "1–4kg" },
      { name: "Striped marlin", scientificName: "Kajikia audax", packaging: "H&G, Loins", grading: "5–15kg" },
    ],
  },
  {
    slug: "cephalopods",
    name: "Cephalopods",
    description: "Squid, octopus, and cuttlefish sourced locally and internationally. Available whole round, cleaned, tubes and tentacles, rings, or as IQF product. Pack sizes and grading on request.",
    icon: "squid",
    products: [
      { name: "Chokka squid (Cape Hope squid)", scientificName: "Loligo reynaudii", packaging: "WR, Cleaned, Tubes & Tentacles, Rings", grading: "U/10, 10–20, 20–30, 30–50, 50+" },
      { name: "Longfin inshore squid", scientificName: "Doryteuthis pealeii", packaging: "WR, Tubes & Tentacles", grading: "Various" },
      { name: "Octopus", scientificName: "Octopus vulgaris", packaging: "WR, Cleaned", grading: "U/1kg, 1–2kg, 2–4kg, 4kg+" },
      { name: "Cuttlefish", scientificName: "Sepia officinalis", packaging: "WR, Cleaned", grading: "U/200g, 200–500g, 500g+" },
    ],
  },
  {
    slug: "crustaceans",
    name: "Crustaceans",
    description: "Rock lobster, langoustines, and prawns sourced locally and internationally. Supplied fresh, frozen, or cooked depending on species and availability.",
    icon: "lobster",
    products: [
      { name: "Cape rock lobster", scientificName: "Jasus lalandii", packaging: "WR, Tails, Cooked", grading: "U/300g, 300–600g, 600g–1kg, 1kg+" },
      { name: "East Coast rock lobster", scientificName: "Panulirus homarus", packaging: "WR, Tails", grading: "U/300g, 300–600g, 600g+" },
      { name: "Langoustine (Norway lobster)", scientificName: "Nephrops norvegicus", packaging: "WR, Tails", grading: "Various count sizes" },
      { name: "Deepwater prawn", scientificName: "Aristeus varidens", packaging: "Block frozen, IQF", grading: "Count: 30/50, 50/70, 70/90" },
      { name: "Tiger prawn", scientificName: "Penaeus monodon", packaging: "IQF, Block", grading: "Count: 20/30, 30/40, 40/50" },
      { name: "Vannamei prawn", scientificName: "Litopenaeus vannamei", packaging: "IQF, Block", grading: "Count: 30/50, 50/70" },
    ],
  },
  {
    slug: "soles",
    name: "Soles",
    description: "Cape and Agulhas soles processed at our Cape Town facility. Supplied whole round, H&G, or as skinless fillets. Contact sales for current grading and pack sizes.",
    icon: "flatfish",
    products: [
      { name: "Cape sole", scientificName: "Austroglossus microlepis", packaging: "WR, H&G, Fillets", grading: "U/200g, 200–400g, 400–600g, 600g+" },
      { name: "Agulhas sole", scientificName: "Austroglossus pectoralis", packaging: "WR, H&G, Fillets", grading: "U/200g, 200–400g, 400–600g" },
      { name: "Tonguefish", scientificName: "Cynoglossus capensis", packaging: "WR, H&G", grading: "Various" },
    ],
  },
  {
    slug: "game-fish",
    name: "Game fish",
    description: "Yellowtail, kob, dorado, barracuda, and king mackerel. Supplied fresh or frozen to restaurant, hotel, and specialty retail buyers.",
    icon: "gamefish",
    products: [
      { name: "Yellowtail", scientificName: "Seriola lalandi", packaging: "WR, H&G, Fillets, Portions", grading: "1–3kg, 3–6kg, 6kg+" },
      { name: "Kob (kabeljou)", scientificName: "Argyrosomus japonicus", packaging: "WR, H&G, Fillets", grading: "0.5–1kg, 1–3kg, 3–6kg" },
      { name: "Dorado (mahi-mahi)", scientificName: "Coryphaena hippurus", packaging: "H&G, Fillets", grading: "1–3kg, 3–6kg" },
      { name: "Barracuda", scientificName: "Sphyraena barracuda", packaging: "H&G, Steaks", grading: "Various" },
      { name: "King mackerel", scientificName: "Scomberomorus commerson", packaging: "H&G, Steaks, Fillets", grading: "2–5kg, 5kg+" },
    ],
  },
  {
    slug: "mussels",
    name: "Mussels",
    description: "Black mussels and green-lipped mussels from farmed and wild-caught sources. Available fresh, IQF, half-shell, or as meat, depending on availability.",
    icon: "mussel",
    products: [
      { name: "Black mussel", scientificName: "Choromytilus meridionalis", packaging: "Fresh, IQF, Cooked, Meat", grading: "30–50mm, 50–70mm, 70mm+" },
      { name: "Green-lipped mussel", scientificName: "Perna canaliculus", packaging: "Half-shell, Meat, IQF", grading: "70–90mm, 90mm+" },
    ],
  },
  {
    slug: "small-pelagics",
    name: "Small pelagics",
    description: "Pilchards, anchovies, horse mackerel, and herring. Supplied whole round, H&G, or as fillets depending on species and intended use.",
    icon: "sardine",
    products: [
      { name: "Pilchard (sardine)", scientificName: "Sardinops sagax", packaging: "WR, H&G, Fillets, Canned", grading: "20–30g, 30–50g" },
      { name: "Southern African anchovy", scientificName: "Engraulis encrasicolus", packaging: "WR, Salted, Fillets", grading: "Various" },
      { name: "Maasbanker (horse mackerel)", scientificName: "Trachurus capensis", packaging: "WR, H&G, Fillets", grading: "100–200g, 200–400g, 400g+" },
      { name: "Round herring", scientificName: "Etrumeus whiteheadi", packaging: "WR, H&G", grading: "Various" },
      { name: "Red-eye herring", scientificName: "Etrumeus teres", packaging: "WR, H&G", grading: "Various" },
    ],
  },
  {
    slug: "white-fish",
    name: "White fish",
    description: "Cape hake and kingklip, South Africa's primary commercial white fish species. Available in a range of cuts, portions, and frozen formats. Current stock and grading on request.",
    icon: "whitefish",
    products: [
      { name: "Cape hake (deep-water)", scientificName: "Merluccius paradoxus", packaging: "WR, H&G, Fillets, Portions, Blocks", grading: "U/500g, 500g–1kg, 1–2kg, 2kg+" },
      { name: "Cape hake (shallow-water)", scientificName: "Merluccius capensis", packaging: "WR, H&G, Fillets, Portions", grading: "U/500g, 500g–1kg, 1–2kg" },
      { name: "Kingklip", scientificName: "Genypterus capensis", packaging: "WR, H&G, Fillets, Portions", grading: "U/1kg, 1–2kg, 2–4kg, 4kg+" },
      { name: "Monkfish (anglerfish)", scientificName: "Lophius species", packaging: "Tails, Fillets", grading: "U/500g, 500g–1kg, 1kg+" },
    ],
  },
  {
    slug: "other-fish",
    name: "Other fish",
    description: "Snoek, kob, red roman, steenbras, geelbek, and other linefish species. Availability is seasonal and catch-dependent. Contact sales for current stock.",
    icon: "otherfish",
    products: [
      { name: "Snoek", scientificName: "Thyrsites atun", packaging: "WR, H&G, Fillets, Smoked", grading: "0.5–1kg, 1–2kg, 2kg+" },
      { name: "Butterfish (baardman)", scientificName: "Poroderma africanum", packaging: "WR, Fillets", grading: "Various" },
      { name: "Red roman", scientificName: "Chrysoblephus laticeps", packaging: "WR, H&G", grading: "U/500g, 500g–1kg, 1kg+" },
      { name: "Steenbras", scientificName: "Lithognathus lithognathus", packaging: "WR, H&G, Fillets", grading: "500g–1kg, 1–2kg" },
      { name: "Hottentot", scientificName: "Pachymetopon blochii", packaging: "WR, H&G", grading: "200–400g, 400g+" },
      { name: "Geelbek (Cape salmon)", scientificName: "Atractoscion aequidens", packaging: "WR, H&G, Fillets", grading: "0.5–2kg, 2kg+" },
    ],
  },
  {
    slug: "freshwater-fish",
    name: "Freshwater fish",
    description: "Tilapia, rainbow trout, catfish, and other farmed freshwater species. Supplied whole round, H&G, or as fillets depending on species and order volume.",
    icon: "freshwater",
    products: [
      { name: "Nile tilapia", scientificName: "Oreochromis niloticus", packaging: "WR, H&G, Fillets, IQF", grading: "200–400g, 400–600g, 600g+" },
      { name: "Mozambique tilapia", scientificName: "Oreochromis mossambicus", packaging: "WR, H&G, Fillets", grading: "200–500g, 500g+" },
      { name: "Rainbow trout", scientificName: "Oncorhynchus mykiss", packaging: "WR, H&G, Fillets, Portions, Smoked", grading: "200–400g, 400–600g, 600g–1kg" },
      { name: "African catfish", scientificName: "Clarias gariepinus", packaging: "WR, H&G, Fillets", grading: "300–600g, 600g+" },
      { name: "Yellowfish", scientificName: "Labeobarbus kimberleyensis", packaging: "WR, H&G", grading: "Various" },
    ],
  },
];
