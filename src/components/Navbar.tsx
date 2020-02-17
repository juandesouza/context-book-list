import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import styles from '../index.module.css';

interface Props {}

const Navbar: React.FC<Props> = props => {
    const { books } = useContext(BookContext);
    const withBooks = <p>Currently you have {books.length}{' '} 
        book{books.length === 1 ? '' : 's'} to get through...</p>;
    const noBooks = <p>You don't have any book to get through</p>

    return (
        <div className={styles.navbar}>
            <h1>Reading List</h1>
            {books.length > 0 ? withBooks : noBooks}
        </div>
    )
}

export default Navbar;
