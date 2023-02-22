import { InitialBookState } from "./initialStateInterface";
import { createReducer, createAction } from "@reduxjs/toolkit";

// For the reference: 
// 1. CreateAction Hook => https://redux-toolkit.js.org/api/createAction
// 2. CreateReducer Hook => https://redux-toolkit.js.org/api/createReducer
const addBooks = createAction<InitialBookState>('ADD_BOOKS');
const initialState: InitialBookState = { books: [], count: 0 }

const bookReducer = createReducer(initialState, (builder) => {
    builder.addCase(addBooks, (state, action) => {
      state.books = action.payload.books
      state.count = action.payload.count
    });
});

export default bookReducer;