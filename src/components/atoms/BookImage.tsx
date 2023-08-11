import React from 'react';
import "./BookImage.css"
interface BookImageProps {
  src: string;
  alt: string;
}

const BookImage: React.FC<BookImageProps> = ({ src, alt }) => (
  <img className="book-image" src={src} alt={alt} />
);

export default BookImage;