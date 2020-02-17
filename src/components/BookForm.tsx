import React, { useContext, useState, ReactEventHandler } from 'react';
import { BookContext } from '../contexts/BookContext';

interface Props {}
const BookForm: React.FC<Props> = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit: ReactEventHandler = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }});
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={title}
                onChange={e => setTitle(e.target.value)} required />
            <input type="text" placeholder="author" value={author}
                onChange={e => setAuthor(e.target.value)} required />
            <input type="submit" value="add book" />
        </form>
    )
}

export default BookForm
