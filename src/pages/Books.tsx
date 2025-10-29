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
          <img
            src={heroBook.image}
            alt={heroBook.title}
            className="book-hero-image"
          />
        </div>
      </section>

      {/* Second Section - 6 books in 3 columns */}
      <section className="books-page-section books-section-two">
        <div className="books-grid-3col">
          {secondSectionBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-image" />
            </div>
          ))}
        </div>
      </section>

      {/* Third Section - 4 books in 2 columns */}
      <section className="books-page-section books-section-three">
        <div className="books-grid-2col">
          {thirdSectionBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-image" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Books;
