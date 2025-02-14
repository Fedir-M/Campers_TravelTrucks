import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//* GET /campers для <== отримання всіх оголошень (можна додати параметри для фільтрації)
//* GET /campers/:id <== для отримання деталей оголошення за його ID

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchTrucksData = createAsyncThunk(
  "trucks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/");
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTruckByID = createAsyncThunk(
  "trucks/fetchDetails",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/${id}`);
      // console.log("API Response ==>", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
