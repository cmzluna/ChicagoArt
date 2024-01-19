import { createSlice } from "@reduxjs/toolkit";
import { type Artwork } from "@types";

interface ArtworkType {
  artworks: Artwork[];
}

const initialState: ArtworkType = {
  artworks: [],
};

export const artworksSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    setArtworks: (prevState, { payload }) => {
      return {
        artworks: payload,
      };
    },
    resetArtworks: (prevState, action) => {
      return { artworks: [] };
    },
  },
});

export const { setArtworks, resetArtworks } = artworksSlice.actions;

export default artworksSlice.reducer;
