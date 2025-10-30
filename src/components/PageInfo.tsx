import { useLocation } from "react-router-dom";
import { booksData } from "../constants/books";

function PageInfo() {
  const location = useLocation();

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
      <div className="page-info-left">{pageName.toUpperCase()}</div>
      <div className="page-info-right">JUNGIANEUM</div>
    </div>
  );
}

export default PageInfo;
