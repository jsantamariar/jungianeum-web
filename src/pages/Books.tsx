import { Link } from "react-router-dom";
import {
  heroBook,
  secondSectionBooks,
  thirdSectionBooks,
} from "../constants/books";

function Books() {
  return (
    <>
      {/* Hero Section - Full viewport with single book */}
      <section className="books-page-section books-hero-section">
        <div className="book-hero-container">
          <Link to={`/books/${heroBook.id}`} className="book-hero-link">
            <img
              src={heroBook.image}
              alt={heroBook.title}
              className="book-hero-image"
              loading="lazy"
            />
          </Link>
        </div>
      </section>

      {/* Second Section - 6 books in 3 columns */}
      <section className="books-page-section books-section-two">
        <div className="books-grid-3col">
          {secondSectionBooks.map((book) => (
            <Link
              key={book.id}
              to={`/books/${book.id}`}
              className="book-card-link"
            >
              <div className="book-card">
                <img
                  src={book.image}
                  alt={book.title}
                  className="book-image"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Third Section - 4 books in 2 columns */}
      <section className="books-page-section books-section-three">
        <div className="books-grid-2col">
          {thirdSectionBooks.map((book) => (
            <Link
              key={book.id}
              to={`/books/${book.id}`}
              className="book-card-link"
            >
              <div className="book-card">
                <img
                  src={book.image}
                  alt={book.title}
                  className="book-image"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Books;
