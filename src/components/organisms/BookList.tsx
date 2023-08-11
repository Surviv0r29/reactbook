import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../molecules/BookCard';
import "./BookList.css"
const BookList: React.FC = () => {
  const [books, setBooks] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750 && window.innerWidth >= 350);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 750 && window.innerWidth >= 350);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    !isMobile ? <div className="book-list-container">
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} book={book} isMobile={false} />
        ))}
      </div>
    </div> : <div className="grid-container">
      {books.map((book, index) => (
        <BookCard key={index} book={book} isMobile={true} />
      ))}
    </div>
  );
};

export default BookList;
