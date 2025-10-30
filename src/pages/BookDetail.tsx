import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { booksData } from "../constants/books";
import { BookContent, BookHero } from "../components";

function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const book = booksData.find((b) => b.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!book) {
    return (
      <div className="book-detail-page">
        <div className="book-not-found">
          <h1>Book not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="book-detail-page">
      <BookHero book={book} />
      <BookContent book={book} />
    </div>
  );
}

export default BookDetail;
