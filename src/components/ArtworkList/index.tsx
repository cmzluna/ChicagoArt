import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ArtContainer, ColumnWrapper, StyledImage, Title, SubTitle, Text } from "./styles";
import { Artwork } from "@/types";
import { Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import FavoriteSelector from "../FavoriteSelector";
import FeaturedArtwork from "../FeaturedArtwork";
import { removeParagraphTags, truncateText } from "@/utils";
import SectionHeader from "../SectionHeader";
import Animated, {
  Easing,
  SharedTransition,
  withTiming,
  Layout,
  withSpring,
} from "react-native-reanimated";
import { StackNavigationProp } from "@react-navigation/stack";
import { PrivateStackParamList } from "@types/navigation";

export const transition = SharedTransition.custom((values) => {
  "worklet";
  return {
    width: withTiming(values.targetWidth, {
      easing: Easing.quad,
    }),
    height: withTiming(values.targetHeight, {
      easing: Easing.quad,
    }),
    originX: withTiming(values.targetOriginX, {
      easing: Easing.quad,
    }),
    originY: withTiming(values.targetOriginY, {
      easing: Easing.quad,
    }),
  };
});

type HomeScreenNavigationProp = StackNavigationProp<PrivateStackParamList, "Home">;

interface ArtworkListProps {
  data: Artwork[];
  showFeatured: boolean;
  featuredData: Artwork;
  navigate: HomeScreenNavigationProp["navigate"];
}

const ArtworkList: React.FC<ArtworkListProps> = ({
  data,
  showFeatured,
  featuredData,
  navigate,
}): React.JSX.Element => {
  const favorites = useSelector((s) => s.favorites.favorites);

  const renderItem = ({ item }: { item: Artwork }): JSX.Element => {
    const imageUrl =
      item.image_id && `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`;
    const descriptionText =
      item.description && truncateText(removeParagraphTags(item.description), 35);

    return (
      <TouchableOpacity onPress={() => navigate("ArtworkDetail", { id: item.id })}>
        <ArtContainer>
          <Animated.View
            sharedTransitionTag={`imageAnim_${item.id}`}
            sharedTransitionStyle={transition}
            style={{
              width: 150,
              height: 150,
            }}
          >
            <StyledImage source={{ uri: imageUrl }} height={150} width={150} />
          </Animated.View>

          <ColumnWrapper>
            <Title>{item.title}</Title>
            {item.artist_display && <SubTitle>{truncateText(item.artist_display, 10)}</SubTitle>}
            {item.description && <Text>{descriptionText}</Text>}
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
