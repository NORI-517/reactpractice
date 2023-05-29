import { Link } from 'react-router-dom';
import '../styles/BookForm.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function BookForm() {
    return (
        <div className="bookform">
            <h1> Booking Form </h1>
            <form id="book-form" method="POST">
                <label htmlFor='name'>Full Name</label>
                <input name="name" placeholder='Enter full name...' type="text" required />
                <label htmlFor='mail'>Email</label>
                <input name="email" placeholder='Enter email...' type="email" required />
                <label id="date" htmlFor='date' type="date" required>Date</label>
                <DatePicker/>
                <label htmlFor='message'>Message</label>
                <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
                <Link to='/'>
                    <button type="submit"> Book </button>
                </Link>
            </form>
        </div>
    )
}

export default BookForm;