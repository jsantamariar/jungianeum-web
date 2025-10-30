import type { Book } from "../constants/books";

interface BookHeroProps {
  book: Book;
}

function BookHero({ book }: BookHeroProps) {
  const { image, title } = book;
  return (
    <section className="book-detail-hero">
      <div className="book-detail-image-container">
        <img src={image} alt={title} className="book-detail-image" />
      </div>
    </section>
  );
}

export default BookHero;
