import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from '../../Utils/constant';
import axios from "../../Services/apiService";

export const createShortLink = createAsyncThunk(
  'links/createShortLink',
  async (link) => {
    const response = await axios.post(API_URL + `squeeze?link=${link}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
    })
    return await response
  }
);

const initialState = {
  items: [],
  loading: false,
  button: {},
};

const linkSlice = createSlice({
  name: 'links',
  initialState,
  extraReducers: {
    [createShortLink.pending]: (state) => {
      state.loading = 'loading';
    },
    [createShortLink.fulfilled]: (state, action) => {
      const result = Object.values(action.payload); 
      state.items = [...state.items, result];
      state.loading = 'success';
      console.log('Items:', state.items)
    },
    [createShortLink.rejected]: (state) => {
      state.loading = 'rejected';
    },
  }
});

export const selectLinks = state => state.links.items;
export default linkSlice.reducer;