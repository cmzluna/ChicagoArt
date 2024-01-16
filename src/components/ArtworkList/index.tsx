import React from "react";
import { FlatList, Image } from "react-native";
import { ArtContainer, ColumnWrapper, Title, SubTitle, Text } from "./styles";
import { Artwork } from "@/types";
import { Divider } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import FavoritesIcon from "@assets/icons/FavoritesIcon.svg";

const ArtworkList = ({ data }): React.JSX.Element => {
  console.log("DATA == ", data);
  const renderItem = ({ item }: { item: Artwork }): JSX.Element => {
    const imageUrl = `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;

    return (
      <ArtContainer>
        <Image source={{ uri: imageUrl }} height={150} width={150} />
        <ColumnWrapper>
          <Title>{item.title}</Title>
          <SubTitle>{item.artist_display}</SubTitle>
          <Text>{item.artist_display}</Text>
          <SvgXml xml={FavoritesIcon} height={20} width={20} color="#A7A7A7" />
        </ColumnWrapper>
      </ArtContainer>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
};

export default ArtworkList;
