import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import swal from 'sweetalert';

const  BASE_URL = process.env.REACT_APP_API_BASE_URL;
const  LOGIN = process.env.REACT_APP_API_AUTH_LOGIN;

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {      
      const data = await axios.post(`${BASE_URL}/${LOGIN}/`, {email, password});
      localStorage.setItem("token", data.data.token);
      return data;
    } catch (error) {
      console.log(error)
      swal("Datos incorrectos", 'ERROR',"error");
    }
  }
);
export const logout = createAsyncThunk("auth/logout", () => {
   localStorage.removeItem("token");
});
  
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:{},
    isLoggedIn: false,
    status:null

  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = 'loading'
    },
     [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.status = 'success';
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.status= 'failed'
    },
    [logout.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = false;
      state.status = null;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.status= 'failed'
    },
  },
});

export default authSlice.reducer;
