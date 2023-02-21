import { Book } from "../Interfaces/bookInterface";
import { InitialBookState } from "./initialStateInterface";
import { createReducer, createAction } from "@reduxjs/toolkit";

const addBooks = createAction<Book[]>('ADD_BOOKS');
const initialState: InitialBookState = { books: [] }

const bookReducer = createReducer(initialState, (builder) => {
    builder.addCase(addBooks, (state, action) => {
      state.books = action.payload
    });
});

export default bookReducer;