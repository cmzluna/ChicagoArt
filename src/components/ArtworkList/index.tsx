import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ArtContainer, ColumnWrapper, StyledImage, Title, SubTitle, Text } from "./styles";
import { Artwork } from "@/types";
import { Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import FavoriteSelector from "../FavoriteSelector";
import FeaturedArtwork from "../FeaturedArtwork";
import { truncateText } from "@/utils";
import SectionHeader from "../SectionHeader";

const ArtworkList = ({ data, showFeatured, featuredData, navigate }): React.JSX.Element => {
  const favorites = useSelector((s) => s.favorites.favorites);

  console.log("featuredData ------> ", featuredData);

  const renderItem = ({ item }: { item: Artwork }): JSX.Element => {
    const imageUrl =
      item.image_id && `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;

    return (
      <TouchableOpacity onPress={() => navigate("ArtworkDetail", { id: item.id })}>
        <ArtContainer>
          <StyledImage source={{ uri: imageUrl }} height={150} width={150} />
          <ColumnWrapper>
            <Title>{item.title}</Title>
            {item.artist_display && <SubTitle>{truncateText(item.artist_display, 10)}</SubTitle>}
            {item.description && <Text>{truncateText(item.description, 35)}</Text>}
            <FavoriteSelector favorites={favorites} item={item} />
          </ColumnWrapper>
        </ArtContainer>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={
        showFeatured && (
          <>
            <SectionHeader title="Featured Artwork" />
            <FeaturedArtwork data={featuredData} navigate={navigate} />
            <SectionHeader title="Artwork List" />
          </>
        )
      }
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
};

export default ArtworkList;
