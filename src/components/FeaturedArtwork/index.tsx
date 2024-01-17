import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  SafeAreaContainer,
  ArtContainer,
  SectionTitleWrapper,
  ColumnWrapper,
  SectionTitle,
  Title,
  SubTitle,
  Text,
} from "./styles";
import { useSelector } from "react-redux";
import FavoriteSelector from "../FavoriteSelector";
import { truncateText } from "@/utils";

const FeaturedArtwork = ({ data, navigate }): React.JSX.Element => {
  const favorites = useSelector((s) => s.favorites.favorites);
  const imageUrl = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;

  console.log("***", data.artist_display);
  return (
    <TouchableOpacity onPress={() => navigate("ArtworkDetail", { id: data.id })}>
      <SafeAreaContainer>
        <ArtContainer>
          <ColumnWrapper>
            <Image source={{ uri: imageUrl }} height={150} width={150} />
            <Title>{data.title}</Title>

            <SubTitle>{data.artist_display}</SubTitle>
            <FavoriteSelector favorites={favorites} item={data} />
          </ColumnWrapper>

          <ColumnWrapper>
            <Text>{truncateText(data.description, 100)}</Text>
          </ColumnWrapper>
        </ArtContainer>
      </SafeAreaContainer>
    </TouchableOpacity>
  );
};

export default FeaturedArtwork;
