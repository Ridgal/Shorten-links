import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "utils/constant";
import axios from "axios";


export const registration = createAsyncThunk(
  'user/registration',
  async ({username, password}) => {
    await axios.post(API_URL + `register?username=${username}&password=${password}` , {
      /// Query String Parameters (Request).
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }
);

export const login = createAsyncThunk(
  'user/login',
  async ({username, password}) => {
    const form = new FormData();
      form.append('username', username);
      form.append('password', password);
    await axios.post(API_URL + `login`, form)
    /// Form Data (Request)  
    .then((response) => {
      sessionStorage.setItem('user', response.data.access_token)
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }
);

const initialState = {
  user: null,
  loading: false,
  token: '',
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    ////////////////
  },
  extraReducers: {
    [registration.pending]: (state) => {
      state.loading = 'loading';
      state.error = null;
    },
    [registration.fulfilled]: (state, action) => {
      state.loading = 'success';
      state.user = action.payload
      state.error = action.payload
    },
    [registration.rejected]: (state, action) => {
      state.loading = 'rejected';
      state.error = action.payload;
    },
    // //////////////////////////////////////////////
    [login.pending]: (state) => {
      state.loading = 'loading';
      state.error = null;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = 'success';
    },
    [login.rejected]: (state, action) => {
      state.loading = 'rejected';
      state.error = action.payload;
    }
  }
});

export default userSlice.reducer;