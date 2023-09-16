import { createSlice } from '@reduxjs/toolkit';

export const GiphySlice = createSlice({
    name: 'Giphy',
    initialState: {
        gif: [],
        gifErrorMessage: undefined
    },
    reducers: {
        setGif: (state, /* action */ ) => {
            state.gif = [];
        },
        onSaveGif: (state, {payload} ) => {
          state.gif.unshift(payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const { setGif, onSaveGif } = GiphySlice.actions;