import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const  BASE_URL = process.env.REACT_APP_API_BASE_URL;
const  INBOUND = process.env.REACT_APP_API_INBOUND;

export const getInbound = createAsyncThunk(
  "inbound/inbounds",
  async ({id,start,end},thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}/${INBOUND}/`, {
          params:{
            client: id,
            local_updated__date__gte: start,
            local_updated__date__lte: end,
          },
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



  
export const InboundSlice = createSlice({
  name: "inbound",
  initialState: {
    inbound:{},
    status:null
  },
  extraReducers: {
     [getInbound.pending]: (state, action) => {
      state.status= 'loading'
    },
    [getInbound.fulfilled]: (state, {payload}) => {
      state.inbound = payload.data.results;
      state.status= 'success'
    },
    [getInbound.rejected]: (state, action) => {
      state.inbound = null;
      state.status = 'failed'
    },
  },
});

export default InboundSlice.reducer;
