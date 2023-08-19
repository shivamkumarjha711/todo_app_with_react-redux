// import { createStore, combineReducers } from "redux";

// Reducer imports
import todoReducers from "./slices/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

// const reducers = combineReducers({todo: todoReducers});


// const store = createStore(reducers);
const store = configureStore({
    reducer: {
        todo: todoReducers
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;