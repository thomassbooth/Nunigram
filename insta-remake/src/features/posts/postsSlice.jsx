import { createSlice } from "@reduxjs/toolkit";

/*
{
        "src": "",
        "likes": '',
        "liked": false,
        "caption": "",
        "profile": {
            "name": "",
            "src": "",
            "location": ""
        },
        "comments": {
            "count": ''
        }
    }

*/
const initialState = {value: 
    []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPosts: (state, action) => {
            console.log(action.payload)
            state.value.push(...action.payload)
        },
        like: (state, action) => {
            state.value[action.payload].liked = !state.value[action.payload].liked
        }
        
    }
});

export const {addPosts, like} = postsSlice.actions;

export default postsSlice.reducer