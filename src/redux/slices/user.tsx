import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { Joke } from "./jokes";

type User = {
  watchlist: Joke[];
  ownJokes: Joke[];
};

const initialState: User = {
  watchlist: [],
  ownJokes: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addWatchlist: (state, joke: PayloadAction<Joke>) => {
      return {
        ...state,
        watchlist: [...state.watchlist, joke],
      };
    },
    removeWatchlist: (state, id: PayloadAction<string>) => {
      return {
        ...state,
        watchlist: state.watchlist.filter((joke) => joke.id != id.payload),
      };
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

export const { addWatchlist, removeWatchlist, editJoke, addJoke, removeJoke } =
  userSlice.actions;

export default userSlice.reducer;
