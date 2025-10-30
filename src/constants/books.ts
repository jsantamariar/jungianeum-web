export interface Review {
  text: string;
  author: string;
  authorTitle: string;
}

export interface Book {
  id: number;
  title: string;
  image: string;
  author: string;
  year: number;
  description: string;
  pages: number;
  language: string;
  category?: string;
  amazonLink?: string;
  // Campos opcionales para detalles extendidos
  subtitle?: string;
  format?: string;
  isbn?: string;
  price?: string;
  reviews?: Review[];
  openingQuote?: string;
  extendedDescription?: string[];
  authorBio?: string;
}

export const booksData: Book[] = [
  {
    id: 1,
    title: "Women and Desire",
    image: "/books/women-and-desire.png",
    author: "Edith Kramer",
    year: 2021,
    description:
      "A profound exploration of the feminine psyche and the complexities of desire through the lens of Jungian analytical psychology. This groundbreaking work examines the archetypal patterns that shape women's experiences and relationships, offering insights into the integration of the shadow feminine and the reclamation of personal power.",
    pages: 256,
    language: "English",
    category: "Feminine Psychology",
    amazonLink: "https://www.amazon.de/dp/B0BW7136KM",
    openingQuote:
      "These trees, these plants I have written to you about have taught me all I needed to know about your death.",
    extendedDescription: [
      "B loves M, her favorite sister. Then M is gone—taken too young, too suddenly, under the strange and quiet shroud of the pandemic. In the absence that follows, B sets out each day into the vast wilds of Griffith Park with her dog, walking uphill and down in search of understanding, of peace, of reconciliation.",
      "She talks to her sister in the language of the landscape, sports with her in the shape-shifting form of the wild animals and plants of the park—rabbits, coyotes, snakes, owls, oleander, dodder, nettle, walnut. She leaves gifts—shells, stones, tokens of memory—and finds them answered in unexpected ways.",
      "B now finds herself open to the mystery of change—willing to release old habits, weary truths, impossible expectations, and the comforting fictions of family. She revisits her life as an anxious and dutiful daughter, sister, wife, mother, and artist, pausing to linger, to glance sideways, to laugh. She walks onward, guiding us gently toward a place we all must reach—where much can be left behind and a new wisdom awaits. And then she writes.",
      "Wild Things is the result: 59 letters to her sister, one for each year of her life, alive with grief, wonder, and transformation. A book about loss and about the radical clarity that comes when everything falls away—a luminous, unforgettable work.",
    ],
  },
  {
    id: 2,
    title: "Witches & Ogres",
    image: "/books/witches-ogres.png",
    author: "Marion Woodman",
    year: 2020,
    description:
      "An enchanting journey through fairytale archetypes and their psychological significance. This work illuminates how ancient stories serve as mirrors to our inner worlds, revealing the transformative power of engaging with mythological symbols and their presence in contemporary life.",
    pages: 312,
    language: "English",
    category: "Archetypal Psychology",
    amazonLink:
      "https://www.amazon.com/-/es/Witches-Ogres-Devils-Daughter-Encounters/dp/B0F7DPJRCC/",
  },
  {
    id: 3,
    title: "Waxing Femininity",
    image: "/books/waxing-femininity.png",
    author: "Clarissa Pinkola Estés",
    year: 2022,
    description:
      "A celebration of the evolving nature of feminine consciousness and its continuous transformation. Through case studies and theoretical frameworks, this book explores how women navigate their authentic selves within a constantly changing world.",
    pages: 288,
    language: "English",
    category: "Feminine Psychology",
    amazonLink:
      "https://www.amazon.com/-/es/Waxing-Femininity-Development-Perspective-Psychology/dp/B0DJKPFGPC/",
  },
  {
    id: 4,
    title: "Therapeutic Relationship",
    image: "/books/therapeutic-relationship.png",
    author: "Donald Winnicott",
    year: 2019,
    description:
      "A definitive exploration of the dynamics between therapist and patient. This essential text examines the healing potential of genuine human connection and the psychological processes that facilitate transformation through the therapeutic alliance.",
    pages: 334,
    language: "English",
    category: "Clinical Practice",
    amazonLink:
      "https://www.amazon.com/-/es/THERAPEUTIC-RELATIONSHIP-Countertransference-Relationship-Transference/dp/B0DZNPLXVJ/",
  },
  {
    id: 5,
    title: "The Father",
    image: "/books/the-father.png",
    author: "Robert Moore",
    year: 2021,
    description:
      "An in-depth analysis of the paternal archetype and its influence on psychological development. This work explores how the father complex shapes identity formation, power dynamics, and the search for masculine authority and wisdom.",
    pages: 298,
    language: "English",
    category: "Masculine Psychology",
    amazonLink:
      "https://www.amazon.com/-/es/FATHER-Contemporary-Jungian-Perspectives-Samuels/dp/B0FBWDCS4N/",
    openingQuote:
      "These trees, these plants I have written to you about have taught me all I needed to know about your death.",
    extendedDescription: [
      "B loves M, her favorite sister. Then M is gone—taken too young, too suddenly, under the strange and quiet shroud of the pandemic. In the absence that follows, B sets out each day into the vast wilds of Griffith Park with her dog, walking uphill and down in search of understanding, of peace, of reconciliation.",
      "She talks to her sister in the language of the landscape, sports with her in the shape-shifting form of the wild animals and plants of the park—rabbits, coyotes, snakes, owls, oleander, dodder, nettle, walnut. She leaves gifts—shells, stones, tokens of memory—and finds them answered in unexpected ways.",
      "B now finds herself open to the mystery of change—willing to release old habits, weary truths, impossible expectations, and the comforting fictions of family. She revisits her life as an anxious and dutiful daughter, sister, wife, mother, and artist, pausing to linger, to glance sideways, to laugh. She walks onward, guiding us gently toward a place we all must reach—where much can be left behind and a new wisdom awaits. And then she writes.",
      "Wild Things is the result: 59 letters to her sister, one for each year of her life, alive with grief, wonder, and transformation. A book about loss and about the radical clarity that comes when everything falls away—a luminous, unforgettable work.",
    ],
  },
  {
    id: 6,
    title: "Psychosocial Wednesdays Event",
    image: "/books/psychosocial-wednesdays-event.png",
    author: "Jungianeum Collective",
    year: 2023,
    description:
      "A compilation of presentations and discussions from our celebrated weekly psychosocial seminars. Featuring diverse perspectives on contemporary psychological issues and their cultural implications.",
    pages: 412,
    language: "English",
  },
  {
    id: 7,
    title: "Psicologia Psicosi",
    image: "/books/psicologia-psicosi.png",
    author: "Carlo Guglielmi",
    year: 2020,
    description:
      "Una esplorazione profonda dei processi psicotici dal punto di vista della psicologia analitica. Questo volume esamina i mondi interiori dei pazienti psicotici e i significati simbolici nascosti nel loro vissuto.",
    pages: 267,
    language: "Italian",
    amazonLink: "https://www.amazon.de/dp/B0F2SCQ39F",
  },
  {
    id: 8,
    title: "Opening Imaginal",
    image: "/books/opening-imaginal.png",
    author: "James Hillman",
    year: 2022,
    description:
      "An invitation to explore the realm of imagination and its vital role in psychological healing. This poetic and philosophical work celebrates the imaginal world as a legitimate dimension of reality and therapeutic practice.",
    pages: 276,
    language: "English",
    amazonLink:
      "https://www.amazon.com/-/es/Opening-Imaginal-Invisible-Watkins-Psychology/dp/B0CW6CW9BR/",
  },
  {
    id: 9,
    title: "New Myth Analysis",
    image: "/books/new-myth-analysis.png",
    author: "Joseph Campbell Institute",
    year: 2023,
    description:
      "Contemporary approaches to myth and meaning-making in the modern world. This collection explores how ancient mythological structures continue to inform our psychological patterns and cultural narratives.",
    pages: 356,
    language: "English",
    amazonLink:
      "https://www.amazon.com/-/es/MYTH-ANALYSIS-Neo-Jungian-Analytical-Psychology/dp/B0D77N269D/",
  },
  {
    id: 10,
    title: "Jungianeum Yearbook 2023",
    image: "/books/jungianeum-yearbook-2023.png",
    author: "Jungianeum Editorial",
    year: 2023,
    description:
      "The definitive annual publication showcasing the latest research, clinical insights, and scholarly contributions to analytical psychology. Features work from leading practitioners and theorists in the field worldwide.",
    pages: 524,
    language: "English",
    category: "Academic Journal",
    amazonLink: "https://www.amazon.de/dp/B0DCGGD76R",
  },
  {
    id: 11,
    title: "Jungianeum Yearbook 2022",
    image: "/books/jungianeum-yearbook-2022.png",
    author: "Jungianeum Editorial",
    year: 2022,
    description:
      "An essential archive of contemporary analytical psychology. This volume documents key developments in theory and practice throughout 2022, providing readers with comprehensive coverage of the field's evolution.",
    pages: 498,
    language: "English",
    amazonLink: "https://www.amazon.de/dp/B0CF62B1PS",
  },
  {
    id: 12,
    title: "Il Bambino Updated",
    image: "/books/il-bambino-updated.png",
    author: "Erich Neumann",
    year: 2021,
    description:
      "Una rivisitazione classica della figura archetica del bambino divino nella psicologia junghiana. Questa edizione aggiornata offre nuove prospettive sullo sviluppo psicologico e il potenziale trasformativo.",
    pages: 287,
    language: "Italian",
    amazonLink:
      "https://www.amazon.com/-/es/BAMBINO-CIOCCOLATO-ADOLESCENTI-ECO-ANSIA-Neo-Jungian/dp/B0D3LCP138/",
  },
  {
    id: 13,
    title: "Esperanza",
    image: "/books/esperanza.png",
    author: "María José Muñoz",
    year: 2023,
    description:
      "Una reflexión profunda sobre la esperanza como fuerza arquetípica y su papel en la sanación psicológica. Este trabajo examina cómo la esperanza se manifesta en diferentes culturas y tradiciones analíticas.",
    pages: 245,
    language: "Spanish",
    amazonLink: "https://www.amazon.de/dp/B0DVW1VL36",
  },
  {
    id: 14,
    title: "El Bambino",
    image: "/books/el-bambino.png",
    author: "Erich Neumann",
    year: 2020,
    description:
      "Una exploración clásica del arquetipo del niño en la psicología junghiana. Este volumen desvela los significados profundos del espíritu infantil y su importancia en el viaje de individuación.",
    pages: 267,
    language: "Spanish",
  },
  {
    id: 15,
    title: "Desayuno Kusnacht",
    image: "/books/desayuno-kusnacht.png",
    author: "Jungianeum Collective",
    year: 2022,
    description:
      "Conversaciones íntimas sobre psicología, filosofía y creatividad. Una colección de diálogos inspiradores que capturan la esencia del pensamiento analítico profundo.",
    pages: 312,
    language: "Spanish",
    amazonLink: "https://www.amazon.de/dp/B0DK3Z41ZS",
  },
  {
    id: 16,
    title: "Cultural Complexes Israel",
    image: "/books/cultural-complexes-israel.png",
    author: "Andrew Samuels",
    year: 2021,
    description:
      "An examination of how cultural and national complexes manifest in the Israeli psyche. This groundbreaking work explores the intersection of collective psychology, politics, and historical trauma through analytical psychology.",
    pages: 289,
    language: "English",
    amazonLink: "https://www.amazon.de/dp/B0DM6MHRDJ",
  },
  {
    id: 17,
    title: "Association Experiment",
    image: "/books/association-experiment.png",
    author: "C.G. Jung",
    year: 2020,
    description:
      "A comprehensive guide to Jung's revolutionary word association technique. This classic text documents the methodology and interpretive framework of one of psychology's most influential diagnostic tools.",
    pages: 341,
    language: "English",
    amazonLink:
      "https://www.amazon.com/-/es/ASSOCIATION-EXPERIMENT-THERAPEUTIC-PRACTICE-Groundbreaking/dp/B0DSFK7P6N/",
  },
  {
    id: 18,
    title: "Wild Things",
    image: "/books/wild-things.png",
    author: "Barbara Wansbrough",
    year: 2024,
    description:
      "B loves M, her favorite sister. Then M is gone—taken too young, too suddenly, under the strange and quiet shroud of the pandemic. In the absence that follows, B sets out each day into the vast wilds of Griffith Park with her dog, walking uphill and down in search of understanding, of peace, of reconciliation.",
    pages: 188,
    language: "English",
    category: "Grief & Loss",
    subtitle: "A Geography of Grief",
    format: "French Paperback",
    isbn: "9781967751044",
    price: "$22 / $10 (ebook)",
    amazonLink:
      "https://www.amazon.com/-/es/ASSOCIATION-EXPERIMENT-THERAPEUTIC-PRACTICE-Groundbreaking/dp/B0DSFK7P6N/",
    reviews: [
      {
        text: "A strange, beautiful, sorrowful book, which walks its way both into and partway through grief. A love-song to sisterhood, and a hymn to the curious forms of consolation and companionship that come from opening eyes and heart to the nearby wild world.",
        author: "Robert MacFarlane",
        authorTitle: "author of The Old Ways and The Wild Places",
      },
      {
        text: "Now that the romance and terror of grief feel so current and familiar, this book feels all the more remarkable. Wild Things makes abundantly clear that grief, and a curiosity about and passion for the natural world, are inextricable. It is not merely consoling, but a kind of inspiration.",
        author: "Adam Phillips",
        authorTitle: "author of On Giving Up and Missing Out",
      },
      {
        text: "Wild Things gripped me like a series of tender letters from a dearest friend. With grace and fierce resolve, Wansbrough tends to her grief over her beloved sister's death by immersing herself in the natural world on her daily walks. Her exquisite book gently lifts the reader's spirits, reminding us that our loved ones walk beside us as closely as sorrow does. It's unforgettable and life-changing.",
        author: "Naomi Shihab Nye",
        authorTitle:
          "Winner of the National Book Critics Circle Lifetime Achievement Award",
      },
    ],
    openingQuote:
      "These trees, these plants I have written to you about have taught me all I needed to know about your death.",
    extendedDescription: [
      "B loves M, her favorite sister. Then M is gone—taken too young, too suddenly, under the strange and quiet shroud of the pandemic. In the absence that follows, B sets out each day into the vast wilds of Griffith Park with her dog, walking uphill and down in search of understanding, of peace, of reconciliation.",
      "She talks to her sister in the language of the landscape, sports with her in the shape-shifting form of the wild animals and plants of the park—rabbits, coyotes, snakes, owls, oleander, dodder, nettle, walnut. She leaves gifts—shells, stones, tokens of memory—and finds them answered in unexpected ways.",
      "B now finds herself open to the mystery of change—willing to release old habits, weary truths, impossible expectations, and the comforting fictions of family. She revisits her life as an anxious and dutiful daughter, sister, wife, mother, and artist, pausing to linger, to glance sideways, to laugh. She walks onward, guiding us gently toward a place we all must reach—where much can be left behind and a new wisdom awaits. And then she writes.",
      "Wild Things is the result: 59 letters to her sister, one for each year of her life, alive with grief, wonder, and transformation. A book about loss and about the radical clarity that comes when everything falls away—a luminous, unforgettable work.",
    ],
    authorBio:
      "BARBARA WANSBROUGH was born in England and lives in California. Wild Things is her first book. Her work has been published in various literary journals and she holds a degree in literature from Oxford University. She continues to explore themes of grief, nature, and transformation through her writing and daily walks in the California wilderness.",
  },
];

// First section: 1 book
export const heroBook = booksData[9]; // Jungianeum Yearbook 2023

// Second section: 6 books (3 columns)
export const secondSectionBooks = booksData.slice(0, 6);

// Third section: 4 books (2 columns)
export const thirdSectionBooks = booksData.slice(6, 10);
