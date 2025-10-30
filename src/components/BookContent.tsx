import type { Book } from "../constants/books";

interface BookContentProps {
  book: Book;
}

function BookContent({ book }: BookContentProps) {
  const {
    author,
    title,
    pages,
    language,
    year,
    subtitle,
    format,
    reviews,
    openingQuote,
    extendedDescription,
    authorBio,
    description,
    amazonLink,
  } = book;

  return (
    <section className="book-detail-content">
      <div className="book-detail-wrapper">
        {/* Author Name */}
        <div className="book-author-name">{author.toUpperCase()}</div>

        {/* Book Title */}
        <h1 className="book-detail-title">{title}</h1>

        {/* Subtitle */}
        {subtitle && <p className="book-subtitle">{subtitle}</p>}

        {/* Book Details */}
        <div className="book-details-grid">
          {format && (
            <div className="detail-row">
              <span className="detail-label">Format:</span>
              <span className="detail-value">{format}</span>
            </div>
          )}
          <div className="detail-row">
            <span className="detail-label">Pages:</span>
            <span className="detail-value">{pages}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Language:</span>
            <span className="detail-value">{language}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Year:</span>
            <span className="detail-value">{year}</span>
          </div>
          {amazonLink && (
            <div className="detail-row">
              <a
                className="book-order-button"
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Order</span>
              </a>
            </div>
          )}
        </div>

        <div className="book-detail-divider"></div>

        {/* Reviews Section */}
        {reviews && reviews.length > 0 && (
          <div className="book-reviews">
            {reviews.map((review, index) => (
              <blockquote key={index} className="book-review">
                <p className="review-text">"{review.text}"</p>
                <footer className="review-author">
                  — {review.author}, {review.authorTitle}
                </footer>
              </blockquote>
            ))}
          </div>
        )}

        <div className="book-detail-divider"></div>

        {/* Description */}
        <div className="book-detail-description">
          <h2>About the book</h2>
          {openingQuote && <p className="opening-quote">"{openingQuote}"</p>}
          {extendedDescription && extendedDescription.length > 0 ? (
            extendedDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{description}</p>
          )}
        </div>

        <div className="book-detail-divider"></div>

        {/* Author Bio */}
        <div className="book-author-bio">
          <h2>About the Author</h2>
          <p>
            <strong>{author.toUpperCase()}</strong>{" "}
            {authorBio ||
              `is a distinguished author and scholar in the field of analytical psychology. Their work explores the depths of the human psyche through the lens of Jungian theory, offering profound insights into the nature of consciousness and the collective unconscious.`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default BookContent;
