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
      let double = false;

      //prevent doble key
      //becouse we don't update api there is posibility to have to same element in watchlist
      state.watchlist.forEach((element) => {
        if (element.id === joke.payload.id) {
          double = true;
        }
      });

      if (!double) {
        return {
          ...state,
          watchlist: [...state.watchlist, joke.payload],
        };
      }
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
