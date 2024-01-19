import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { SafeAreaContainer, ArtContainer, ColumnWrapper, Title, SubTitle, Text } from "./styles";
import { useSelector } from "react-redux";
import FavoriteSelector from "../FavoriteSelector";
import { removeParagraphTags, truncateText } from "@/utils";
import Animated from "react-native-reanimated";
import { transition } from "../ArtworkList";

const FeaturedArtwork = ({ data, navigate }): React.JSX.Element => {
  const favorites = useSelector((s) => s.favorites.favorites);
  const imageUrl = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;

  const descriptionText =
    data.description && truncateText(removeParagraphTags(data.description), 35);

  return (
    <TouchableOpacity onPress={() => navigate("ArtworkDetail", { id: data.id })}>
      <SafeAreaContainer>
        <ArtContainer>
          <ColumnWrapper>
            <Animated.View
              sharedTransitionTag={`imageAnim_${data.id}`}
              sharedTransitionStyle={transition}
              style={{
                width: 150,
                height: 150,
              }}
            >
              <Image source={{ uri: imageUrl }} height={150} width={150} />
            </Animated.View>

            <Title>{data.title}</Title>

            <SubTitle>{data.artist_display}</SubTitle>
            <FavoriteSelector favorites={favorites} item={data} />
          </ColumnWrapper>

          <ColumnWrapper>
            <Text>{descriptionText}</Text>
          </ColumnWrapper>
        </ArtContainer>
      </SafeAreaContainer>
    </TouchableOpacity>
  );
};

export default FeaturedArtwork;
