import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: {},
    posts: [],
    saved: [],
    tagged: []
}

const postsSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPosts: (state, action) => {
            console.log(action.payload)
            if (action.payload.type === 'feed'){
                console.log(action.payload)
                state.value.feed.push(...action.payload.posts)
            }
        },
        addSaved: (state, action) => {

        },
        addTagged: (state, action) => {

        },
        like: (state, action) => {
            if (action.payload.type === 'feed'){
                state.value.feed[action.payload.index].liked = !state.value.feed[action.payload.index].liked
            }
        }
        
    }
});

export const {addPosts, like} = postsSlice.actions;

export default postsSlice.reducer