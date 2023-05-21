import { Link } from 'react-router-dom';
import '../styles/BookForm.css';

function BookForm() {
    return (
        <div className="bookform">
            <h1> Booking Form </h1>
            <form id="contact-form" method="POST">
                <label htmlFor='name'>Full Name</label>
                <input name="name" placeholder='Enter full name...' type="text" required />
                <label htmlFor='nemailame'>Email</label>
                <input name="email" placeholder='Enter email...' type="email" required />
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