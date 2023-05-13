import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10",
};

export type Jokes = {
  jokes: Joke[];
  isLoading: boolean;
  isError: boolean;
};

export type Joke = {
  id?: string;
  setu: string;
  delivery: string;
  category: string;
};

const initialState: Jokes = {
  jokes: [],
  isLoading: false,
  isError: false,
};

//Acion
export const fetchGet = createAsyncThunk("fetchGet", async () => {
  try {
    const response = await axios.request(options);
    console.log("Working");
    return { ...response.data };
  } catch (err: any) {
    return err.message;
  }
});

const jokeSlice = createSlice({
  name: "jokes",
  initialState: initialState,
  reducers: {
    add: (state, data: PayloadAction<Joke>) => {
      const id = nanoid();
      data.payload.id = id;
      return {
        ...state,
        jokes: [...state.jokes, data.payload],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGet.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGet.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jokes = action.payload.jokes;
    });
    builder.addCase(fetchGet.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export const { add } = jokeSlice.actions;

export default jokeSlice.reducer;
