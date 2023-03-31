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
    {
        feed: [],
        profile: [],
    }
    
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPosts: (state, action) => {
            console.log(action.payload)
            if (action.payload.type === 'feed'){
                console.log(action.payload)
                state.value.feed.push(...action.payload.posts)
            }
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