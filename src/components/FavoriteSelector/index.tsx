import React from "react";
import { SvgXml } from "react-native-svg";
import FavoritesIcon from "@assets/icons/FavoritesIcon.svg";
import { TouchableOpacity } from "react-native";
import { isFavorite } from "@/utils";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "@/store/slices/favorites";
import { Artwork } from "@/types";

interface FavoriteListProps {
  favorites: Artwork[];
  item: Artwork;
}

const FavoriteSelector: React.FC<FavoriteListProps> = ({ favorites, item }) => {
  const dispatch = useDispatch();

  const toggleFavorite = (item: Artwork) => {
    if (isFavorite(favorites, item)) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <TouchableOpacity onPress={() => toggleFavorite(item)}>
      <SvgXml
        xml={FavoritesIcon}
        height={20}
        width={20}
        color={isFavorite(favorites, item) ? "red" : "#A7A7A7"}
        fill={isFavorite(favorites, item) ? "red" : "#A7A7A7"}
      />
    </TouchableOpacity>
  );
};

export default FavoriteSelector;
