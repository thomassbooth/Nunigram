import { createSlice } from '@reduxjs/toolkit'


export const navSlice = createSlice({
    name: 'nav',
    initialState: { value: { open: 'Home'}},
    reducers: {
        navigate: (state, action) => {
            state.value = action.payload
        }
    }
});

export default navSlice.reducer