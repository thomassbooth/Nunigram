import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    value : {
        profile: {},
        posts: [],
        saved: [],
        tagged: []
    }
}

const postsSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        add: (state, action) => {
            state.value[action.payload.type].push(...action.payload.add)
        },
        like: (state, action) => {
            if (action.payload.type === 'feed'){
                state.value.feed[action.payload.index].liked = !state.value.feed[action.payload.index].liked
            }
        },
        profile: (state, action) => {
            state.value.profile = action.payload
        }
        
    }
});

export const {profile, add, like} = postsSlice.actions;

export default postsSlice.reducer