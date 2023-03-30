import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: {open: 'Home'} }

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        navigate: (state, action) => {
            state.value = action.payload
        }
    }
});

export const {navigate} = navSlice.actions;

export default navSlice.reducer