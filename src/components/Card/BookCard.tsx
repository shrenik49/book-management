import React, { useState, useEffect } from 'react';
import { BookCardContainer, BookInfo, BookTitle, ButtonContainer } from './bookCardStyle';
import { Book } from '../Dashboard/Booklist';
import { StyledButton } from '../Dashboard/DashboardStyle';
import { Input } from '../popup/popupStyle';

interface BookCardProps {
  book: Book;
  onUpdate: (updatedBook: Book) => void;
  onDelete: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState<Book>({ ...book });

  useEffect(() => {
    setEditedBook({ ...book });
  }, [book]);

  const { title, author, publicationYear, genre } = editedBook;

  const handleUpdate = () => {
    onUpdate(editedBook);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(book);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  return (
    <BookCardContainer>
      <BookTitle>Title:{title}</BookTitle>
      {isEditing ? (
        <>
          <BookInfo>
            <strong>Author:</strong>{' '}
            <Input type="text" name="author" value={author} onChange={handleInputChange} />
          </BookInfo>
          <BookInfo>
            <strong>Publication Year:</strong>{' '}
            <Input
              type="number"
              name="publicationYear"
              value={publicationYear}
              onChange={handleInputChange}
            />
          </BookInfo>
          <BookInfo>
            <strong>Genre:</strong>{' '}
            <Input type="text" name="genre" value={genre} onChange={handleInputChange} />
          </BookInfo>
        </>
      ) : (
        <>
          <BookInfo>
            <strong>Author:</strong> {author}
          </BookInfo>
          <BookInfo>
            <strong>Publication Year:</strong> {publicationYear}
          </BookInfo>
          <BookInfo>
            <strong>Genre:</strong> {genre}
          </BookInfo>
        </>
      )}
      <ButtonContainer>
        {isEditing ? (
          <>
            <StyledButton onClick={handleUpdate}>Save</StyledButton>
            <StyledButton onClick={() => setIsEditing(false)}>Cancel</StyledButton>
          </>
        ) : (
          <>
            <StyledButton onClick={() => setIsEditing(true)}>Edit</StyledButton>
            <StyledButton onClick={handleDelete}>Delete</StyledButton>
          </>
        )}
      </ButtonContainer>
    </BookCardContainer>
  );
};

export default BookCard;
