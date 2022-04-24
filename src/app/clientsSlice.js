import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const  BASE_URL = process.env.REACT_APP_API_BASE_URL;
const  CLIENTS = process.env.REACT_APP_API_CLIENTS;

export const getClients = createAsyncThunk(
  "client/clients",
  async () => {
    try {
        const response = await axios.get(`${BASE_URL}/${CLIENTS}/`, {
           headers: {
             'Authorization': `jwt ${localStorage.getItem('token')}`
           }
         }) 
         return response; 
      } catch (error) {
        console.log(error)
      }
    }
);

export const clientSelected = createAsyncThunk(
  "client/selected",
  async (client) => {
    return client}
);

export const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    clients:{},
    select:{},
  },
  extraReducers: {
    [getClients.fulfilled]: (state, {payload}) => {
      state.clients = payload.data;      
    },
    [getClients.rejected]: (state, action) => {
      state.clients = null;
    },
    [clientSelected.fulfilled]: (state, {payload}) => {
      state.select= payload;      
    },
    [clientSelected.rejected]: (state, action) => {
      state.select = null;
    },
  },
});

export default clientsSlice.reducer;
