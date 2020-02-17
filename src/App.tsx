import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import styles from './index.module.css';
import BookList from './components/BookList';
import BookForm from './components/BookForm';


const App = () => {
  return (
    <div className={styles.App}>          
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider> 
    </div>
  );
}

export default App;
