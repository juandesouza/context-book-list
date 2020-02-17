import React, { createContext, useReducer, Dispatch, useEffect} from 'react';
import { bookReducer } from '../reducers/bookReducer';

interface ContextProps {
    books: {title: string, author: string, id: string}[],
    dispatch: Dispatch<any>
}

const defaultContextState: ContextProps = {
    books: [
        {title: '', author: '', id: ''}
    ],
    dispatch: () => {}
};

export const BookContext = createContext<ContextProps>(defaultContextState);

interface Props {}
const BookContextProvider: React.FC<Props> = ({ children }) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => localStorage.setItem('books', JSON.stringify(books)), [books])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;