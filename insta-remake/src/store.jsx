import { configureStore } from "@reduxjs/toolkit";
import navReducer from './features/nav/navSlice'
import postsReducer from './features/posts/postsSlice'

export const store = configureStore({
    reducer: {
        nav: navReducer,
        posts: postsReducer,
    }
});