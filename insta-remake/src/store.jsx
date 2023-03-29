import { configureStore, createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: {value: {open: 'Home'} },
    reducers: {
        navigate: (state, action) => {
            state.value = action.payload
        }
    }
});

export const {navigate} = navSlice.actions;

export const store = configureStore({
    reducer: {
        nav: navSlice.reducer
    }
});