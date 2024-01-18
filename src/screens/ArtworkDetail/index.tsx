import * as React from "react";
import {
  Container,
  SafeAreaContainer,
  List,
  Title,
  RowWrapper,
  ColumnWrapper,
  StyledImage,
  SubTitle,
} from "./styles";
import useCallApi from "@/hooks/useCallApi";
import getArtworkById from "@/services/getArtworkById";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { removeParagraphTags, truncateText } from "@/utils";
import FavoriteSelector from "@/components/FavoriteSelector";
import { useSelector } from "react-redux";
import Header from "@/components/Header";
import Animated from "react-native-reanimated";
import { transition } from "@/components/ArtworkList";

export default function ArtworkDetail({ route }): React.JSX.Element {
  const { id } = route.params;
  const favorites = useSelector((s) => s.favorites.favorites);
  const { isLoading: isLoadingArtwork, data: artworkData } = useCallApi({
    api: () => getArtworkById({ id }),
    dependencies: [id],
  });

  const imageUrl = `https://www.artic.edu/iiif/2/${artworkData.image_id}/full/843,/0/default.jpg`;

  if (isLoadingArtwork) return <LoadingIndicator />;
  const thumbnailObject = artworkData["thumbnail"];
  const imageRatio =
    thumbnailObject["height"] != null ? thumbnailObject["height"] / thumbnailObject["width"] : null;
  const imageHeight = imageRatio != null ? Dimensions.get("window").width * imageRatio : null;

  console.log("artworkData-----------> ", artworkData.thumbnail);
  console.log("artworkData.image_id-----------> ", artworkData.image_id);

  console.log("imageRatio -> ", imageRatio);
  const descriptionText = artworkData.description && removeParagraphTags(artworkData.description);

  return (
    <SafeAreaContainer>
      <Animated.View
        sharedTransitionTag="headerAnimation"
        sharedTransitionStyle={transition}
        style={{
          originX: 100,
        }}
      >
        <Header />
      </Animated.View>
      <Container>
        <ScrollView>
          <Animated.View
            sharedTransitionTag={`imageAnim_${artworkData.id}`}
            sharedTransitionStyle={transition}
            style={{
              height: imageHeight,
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledImage
              source={{ uri: imageUrl }}
              style={{ height: imageHeight }}
              sharedTransitionTag="imageAnim"
            />
          </Animated.View>

          <ColumnWrapper>
            <RowWrapper>
              <Title>{artworkData.title}</Title>

              <FavoriteSelector favorites={favorites} item={artworkData} />
            </RowWrapper>
            {artworkData.artist_display && (
              <SubTitle>{truncateText(artworkData.artist_display, 10)}</SubTitle>
            )}
            {artworkData.description ? (
              <Title>{descriptionText}</Title>
            ) : (
              <Title>No description available for this artwork</Title>
            )}

            {[
              ["Title", artworkData.title],
              ["Place of origin", artworkData.placeOfOrigin],
              ["Date of creation", artworkData.date],
              ["Artwork type", artworkData.artworkType],
              ["Dimensions", artworkData.dimensions],
            ].map((entry, index) =>
              entry[1] ? (
                <List key={index}>
                  <Text style={{ fontWeight: "600" }}>{entry[0]}</Text>
                  <Text>{entry[1]}</Text>
                </List>
              ) : (
                <View key={index} />
              ),
            )}
          </ColumnWrapper>
        </ScrollView>

        {/* <Title>{id}</Title>
        <Title>{artworkData.id}</Title>
        <Title>{artworkData.title}</Title>
        <Title>{artworkData.author}</Title>
        <Title>{artworkData.date}</Title> */}
      </Container>
    </SafeAreaContainer>
  );
}
