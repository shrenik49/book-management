import { useState } from "react";
import {
  DashboardContainer,
  MainContent,
  Sidebar,
  StyledButton,
} from "./DashboardStyle";
import { useAuth } from "../../Context/authContext";
import Popup from "../popup/index.";
import BookList, { Book } from "./Booklist";
import { booksDetails, genres } from "../../Data/Data";

const Dashboard = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [books, setBooks] = useState<Book[]>(booksDetails);
    const [showPopup, setShowPopup] = useState(false);
    let [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    let [selectedGenre, setselectedGenre] = useState<string>('');
    const { logout } = useAuth();

    const [newBook, setNewBook] = useState<Book>({
        title: '',
        author: '',
        publicationYear: '',
        genre: '',
      });

      const addNewBook = () => {
        if (newBook.title && newBook.author && newBook.publicationYear && newBook.genre) {
          setBooks([...books, newBook]); 
          setNewBook({ title: '', author: '', publicationYear:'', genre: '' });
          setShowPopup(false);
        } else {
        }
      };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleLogout = () => {
    logout();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setselectedGenre(value);
    if (value !== "") {
      const filtered = books.filter((book) => book.genre === value);
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks([]);
    }
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <StyledButton onClick={togglePopup}>Add Book</StyledButton>
        <StyledButton onClick={toggleDropdown}>Sort Book</StyledButton>
        {showDropdown && (
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
      )}
        <StyledButton onClick={handleLogout}>Log out</StyledButton>
      </Sidebar>
      <MainContent>
      <BookList books={selectedGenre ? filteredBooks : books} setBooks={setBooks} selectedGenre={selectedGenre} />
      </MainContent>
      {showPopup ? <Popup
          closePopup={togglePopup}
          newBook={newBook}
          setNewBook={setNewBook}
          addNewBook={addNewBook}
        /> : null}
    </DashboardContainer>
  );
};

export default Dashboard;
