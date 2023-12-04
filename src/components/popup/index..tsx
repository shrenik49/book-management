import React, { FC, useState } from "react";
import { Input, PopupContainer, PopupHeading, PopupInner } from "./popupStyle";
import { StyledButton } from "../Dashboard/DashboardStyle";
import { Book } from "../Dashboard/Booklist";
import { genres } from "../../Data/Data";
import { ErrorMessageContainer } from "../auth/Login/loginStyle";

interface PopupProps {
  closePopup: () => void;
  newBook: Book;
  setNewBook: React.Dispatch<React.SetStateAction<Book>>;
  addNewBook: () => void;
}

const Popup: FC<PopupProps> = ({
  closePopup,
  newBook,
  setNewBook,
  addNewBook,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleAddBook = () => {
    if (!newBook.title || !newBook.author || !newBook.publicationYear || !newBook.genre) {
      setErrorMessage("Error: Please fill in all fields.");
    } else {
      addNewBook();
      closePopup();
    }
  };

  return (
    <PopupContainer>
      <PopupInner className="popup_inner">
        <PopupHeading>Add Book</PopupHeading>
        <Input
          type="text"
          placeholder="Book Name"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Book Author"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Publish Year"
          name="publicationYear"
          value={newBook.publicationYear.toString()}
          onChange={handleInputChange}
        />
        <select
          placeholder="Select Book genre"
          name="genre"
          value={newBook.genre}
          onChange={handleInputChange}
        >
          <option value="">Select a genre</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        {errorMessage && (
                <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
              )}
        <StyledButton onClick={handleAddBook}>Add Book</StyledButton>
        <StyledButton onClick={closePopup}>Close</StyledButton>
      </PopupInner>
    </PopupContainer>
  );
};

export default Popup;
