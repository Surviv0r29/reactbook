import React from 'react';
import BookImage from '../atoms/BookImage';
import Price from '../atoms/Price';
import "./BookCard.css"
interface BookCardProps {
    book: {
        coverImage: string;
        title: string;
        price: number;
        discountRate: number;
    };

    isMobile: Boolean
}

const BookCard: React.FC<BookCardProps> = ({ book, isMobile }) => (
    // (isMobile ?
        <div className="product-card" >
            <div className="product-card-image">
             <BookImage src={book.coverImage} alt={book.title} />
            </div>
            <div className="product-card-sub">
                <div className='book-title'>
                    {book.title}
                </div>
                <div className='book-price'>
                    <p className="discount">{book.discountRate}%</p>
                    <Price value={book.price} />
                </div>
            </div>
        </div>
        // : <div className="book-card">
        //     <div className="book-image-container">
        //         <BookImage src={book.coverImage} alt={book.title} />
        //     </div>
        //     <h3>{book.title}</h3>
        //     <p className="discount">{book.discountRate}%</p>
        //     <Price value={book.price} />
            
        // </div>
        
);

export default BookCard;