import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { Joke } from "./jokes";

type user = {
  watchlist: Joke[];
  ownJokes: Joke[];
};

const initialState: user = {
  watchlist: [],
  ownJokes: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    toggleWatchList: (state, id: PayloadAction<string>) => {
      console.log("hej");
    },
    addJoke: (state, data: PayloadAction<Joke>) => {
      const id = nanoid();
      data.payload.id = id;

      return {
        ...state,
        ownJokes: [...state.ownJokes, data.payload],
      };
    },
    removeJoke: (state, id: PayloadAction<string>) => {
      state.ownJokes = state.ownJokes.filter((element) => {
        return element.id !== id.payload;
      });
    },
    editJoke: (state, data: PayloadAction<Joke>) => {
      state.ownJokes = state.ownJokes.map((element) => {
        if (element.id === data.payload.id) {
          return data.payload;
        }
        return element;
      });
    },
  },
});

export const { toggleWatchList, editJoke, addJoke, removeJoke } =
  userSlice.actions;

export default userSlice.reducer;
