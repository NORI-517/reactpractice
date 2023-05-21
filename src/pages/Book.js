import React from 'react'
import { BookList } from '../helpers/BookList'
import BookItem from '../components/BookItem'
import '../styles/Book.css';


function Book() {
    return (
        <div className='book'>
            <h1 className='bookTitle'>Available time</h1>
            <div className='bookList'>
                {BookList.map((bookItem, key) => {
                    return (
                        <BookItem
                            key={key}
                            date={bookItem.date}
                            time={bookItem.time}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Book;