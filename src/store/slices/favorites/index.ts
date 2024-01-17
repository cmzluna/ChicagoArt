import { createSlice } from "@reduxjs/toolkit";

interface FavoritesType {
  favorites: Artwork[];
}

const initialState: FavoritesType = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((artwork) => artwork.id !== payload.id);
    },
    resetFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, resetFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
