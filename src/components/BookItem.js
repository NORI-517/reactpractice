import React from 'react'
import { Link } from 'react-router-dom';
function BookItem({ image, date, time }) {
    return (
        <div className='bookItem'>
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {date} </h1>
            <p> {time} </p>
            <Link to='/BookForm'>
                <button> BOOK NOW </button>
            </Link>
        </div>
    )
}

export default BookItem;