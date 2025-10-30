import type { Book } from "../constants/books";

// Interfaz extendida para toda la información del detalle del libro
export interface BookDetailData {
  book: Book;
  subtitle: string;
  format: string;
  isbn?: string;
  price?: string;
  reviews: {
    text: string;
    author: string;
    authorTitle: string;
  }[];
  openingQuote: string;
  extendedDescription: string[];
  authorBio: string;
}

// Mock completo con toda la información del libro
export const bookDetailMock: BookDetailData = {
  book: {
    id: 999,
    title: "Wild Things",
    image: "/books/wild-things.png",
    author: "Barbara Wansbrough",
    year: 2024,
    description:
      "B loves M, her favorite sister. Then M is gone—taken too young, too suddenly, under the strange and quiet shroud of the pandemic. In the absence that follows, B sets out each day into the vast wilds of Griffith Park with her dog, walking uphill and down in search of understanding, of peace, of reconciliation.",
    pages: 188,
    language: "English",
  },
  subtitle: "A Geography of Grief",
  format: "French Paperback",
  isbn: "9781967751044",
  price: "$22 / $10 (ebook)",
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
};

// Mock simplificado solo con el objeto Book
export const bookMock: Book = bookDetailMock.book;
