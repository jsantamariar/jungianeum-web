/**
 * ARCHIVO DE EJEMPLO - NO USAR EN PRODUCCIÓN
 *
 * Este archivo muestra cómo usar los libros con información completa
 * con los componentes BookHero y BookContent
 */

import { booksData } from "../constants/books";
import { BookHero, BookContent } from "../components";

function BookDetailExample() {
  // Libro con información completa (id: 18 - Wild Things)
  const book = booksData.find((b) => b.id === 18);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-detail-page">
      {/* Componente Hero con el libro */}
      <BookHero book={book} />

      {/* Componente Content con el libro */}
      <BookContent book={book} />
    </div>
  );
}

export default BookDetailExample;

/**
 * ESTRUCTURA DE DATOS:
 *
 * Cada libro en booksData puede contener:
 * {
 *   // Campos requeridos
 *   id: number,
 *   title: string,
 *   image: string,
 *   author: string,
 *   year: number,
 *   description: string,
 *   pages: number,
 *   language: string,
 *
 *   // Campos opcionales para detalles extendidos
 *   subtitle?: string,              // "A Geography of Grief"
 *   format?: string,                // "French Paperback"
 *   isbn?: string,                  // "9781967751044"
 *   price?: string,                 // "$22 / $10 (ebook)"
 *   reviews?: Array<{               // Array de reseñas
 *     text: string,
 *     author: string,
 *     authorTitle: string
 *   }>,
 *   openingQuote?: string,          // Cita destacada
 *   extendedDescription?: string[], // Array de párrafos detallados
 *   authorBio?: string              // Biografía del autor
 * }
 *
 * COMPONENTES:
 * - BookHero: Recibe el objeto Book
 * - BookContent: Recibe el objeto Book (muestra todos los campos disponibles)
 *
 * NOTA: El libro con id: 18 (Wild Things) tiene todos los campos completos como ejemplo.
 */
