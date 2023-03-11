import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
interface FavoriteMovies {
  title: string;
  id: string;
}
interface FavoriteMoviesState {
  movies: FavoriteMovies[];
}

const initialState: FavoriteMoviesState = {
  movies: [],
};

interface favoriteMoviesPayload {
  Title: string;
  imdbID: string;
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavorite(
      state,
      action: PayloadAction<favoriteMoviesPayload>
    ) {
      state.movies.push({
        id: action.payload.imdbID,
        title: action.payload.Title,
      });
    },
    removeFromFavorite(
      state,
      action: PayloadAction<favoriteMoviesPayload>
    ) {
      state.movies = state.movies.filter(
        (movie) => movie.title !== action.payload.Title
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } =
  movieSlice.actions;

export default movieSlice.reducer;
