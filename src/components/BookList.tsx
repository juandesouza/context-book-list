import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import styles from '../index.module.css';
import BookDetails from './BookDetails';

interface Props {}

const BookList: React.FC<Props> = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className={styles.booklist}>
            <ul>
                {books.map(book => {
                    return <BookDetails book={book} key={book.id} />
                })}
            </ul>
        </div>
    ) : (
        <div className={styles.empty}>No books to read.</div>
    );
}

export default BookList

