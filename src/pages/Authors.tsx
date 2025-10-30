import { Fragment } from "react";
import { authorsByLetter } from "../constants/authors";

function Authors() {
  return (
    <div className="authors-page">
      <div className="authors-container">
        <div className="authors-grid">
          <div className="authors-grid-divider" />
          {Object.entries(authorsByLetter).map(([letter, authors], idx) => (
            <Fragment key={letter}>
              <div className="authors-letter-section">
                <h2 className="authors-letter">{letter}</h2>
                {authors.length > 0 ? (
                  <ul className="authors-list">
                    {authors.map((author) => (
                      <li key={author} className="author-name">
                        {author}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="authors-empty"></div>
                )}
              </div>
              {(idx + 1) % 3 === 0 && <div className="authors-grid-divider" />}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Authors;
