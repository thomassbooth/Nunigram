import { configureStore } from "@reduxjs/toolkit";
import navReducer from './features/nav/navSlice'
import postsReducer from './features/posts/postsSlice'
import profileReducer from './features/profile/profileSlice'

export const store = configureStore({
    reducer: {
        nav: navReducer,
        posts: postsReducer,
        profile: profileReducer,
    }
});