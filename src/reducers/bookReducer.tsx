import uuid from "uuid/v1";

// interface BookInterface {
//     title: string, author: string, id: string, type: object
// }

// interface BookListInterface {
//     state: BookInterface[]
// }

export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }];
        case 'REMOVE_BOOK':
            return state.filter((book) => book.id !== action.id);
        default:
            return state;
    }
};