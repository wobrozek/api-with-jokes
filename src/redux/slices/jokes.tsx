import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://dad-jokes.p.rapidapi.com/joke/type/general",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
    "X-RapidAPI-Host": process.env.REACT_APP_X_RapidAPI_Host,
  },
};

export type Jokes = {
  jokes: Joke[];
  status: string;
  error: null | string;
};

export type Joke = {
  id?: string;
  punchline: string;
  setup: string;
  type: string;
};

const initialState: Jokes = {
  jokes: [],
  status: "idle", //idle sucesed loading failure
  error: null,
};

export const fetchGet = createAsyncThunk("get/fetchPosts", async () => {
  try {
    const response = await axios.request(options);
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
    // remove: (state, id: PayloadAction<string>) => {
    //   state.jokes = state.jokes.filter((element) => {
    //     return element.id !== id.payload;
    //   });
    // },
    // edit: (state, data: PayloadAction<Joke>) => {
    //   state.jokes = state.jokes.map((element) => {
    //     if (element.id === data.payload.id) {
    //       return data.payload;
    //     }
    //     return element;
    //   });
    // },
  },
});

export const { add } = jokeSlice.actions;

export default jokeSlice.reducer;
