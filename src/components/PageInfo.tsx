import { memo } from "react";
import { useLocation, Link } from "react-router-dom";
import { booksData } from "../constants/books";

const PageInfoRight = memo(() => (
  <div className="page-info-right">JUNGIANEUM</div>
));

PageInfoRight.displayName = "PageInfoRight";

function PageInfo() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getPageName = (pathname: string) => {
    if (pathname === "/") return "Home";

    // Detectar si estamos en una ruta de detalle de libro (/books/:id)
    const bookDetailMatch = pathname.match(/^\/books\/(\d+)$/);
    if (bookDetailMatch) {
      const bookId = parseInt(bookDetailMatch[1], 10);
      const book = booksData.find((b) => b.id === bookId);

      if (book && book.category) {
        return book.category;
      }
      return "Book Detail";
    }

    // Para otras rutas, capitalizar la primera letra
    const pathWithoutSlash = pathname.split("/")[1];
    return pathWithoutSlash.charAt(0).toUpperCase() + pathWithoutSlash.slice(1);
  };

  const pageName = getPageName(location.pathname);

  return (
    <div className="page-info">
      <div className="page-info-left">
        {isHomePage ? (
          <Link to="/books" className="see-more-link">
            SEE MORE
          </Link>
        ) : (
          <span>{pageName.toUpperCase()}</span>
        )}
      </div>
      <PageInfoRight />
    </div>
  );
}

export default memo(PageInfo);
