import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import styles from '../index.module.css';

interface Props {
    book: {title: string, author: string, id: string}
}

const BookDetails: React.FC<Props> = ({ book }) => {
    const { dispatch } = useContext(BookContext);

    return (
        <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <div className={styles.title}>{book.title}</div>
            <div className={styles.author}>{book.author}</div>
        </li>
    )
}

export default BookDetails;