import React, { useState, useEffect } from 'react';
import BookCard from '../Card/BookCard';
import { BookListContainer,Pegination } from './booktlistStyle';

export interface Book {
  title: string;
  author: string;
  publicationYear: string;
  genre: string;
}

interface BookListProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  selectedGenre: string;
}

const BookList: React.FC<BookListProps> = ({ books, setBooks, selectedGenre }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 4;
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    let filtered = books;

    if (selectedGenre) {
      filtered = books.filter(book => book.genre === selectedGenre);
    }

    setFilteredBooks(filtered);
    setTotalPages(Math.ceil(filtered.length / booksPerPage));
    setCurrentPage(1);
  }, [selectedGenre, books]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const handleUpdateBook = (updatedBook: Book) => {
    const updatedList = filteredBooks.map(book =>
      book.title === updatedBook.title ? updatedBook : book
    );
    setFilteredBooks(updatedList);
    setBooks(updatedList); // Update the main books list
  };

  const handleDeleteBook = (bookToDelete: Book) => {
    const updatedList = filteredBooks.filter(book => book.title !== bookToDelete.title);
    setFilteredBooks(updatedList);
    setBooks(updatedList); // Update the main books list
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <BookListContainer>
      {currentBooks.map((book, index) => (
        <BookCard
          key={index}
          book={book}
          onUpdate={handleUpdateBook}
          onDelete={handleDeleteBook}
        />
      ))}
      </BookListContainer>
      <Pegination>
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i + 1} onClick={() => paginate(i + 1)}>
          {i + 1}
        </button>
      ))}
    </Pegination>
    </>
  );
};

export default BookList;
