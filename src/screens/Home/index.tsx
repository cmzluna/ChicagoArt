import * as React from "react";
import { Container, SafeAreaContainer, InnerWrapper } from "./styles";
import useCallApi from "@/hooks/useCallApi";
import getArtworksList from "@/services/getArtworksList";
import { setArtworks } from "@/store/slices/artworks";
import ArtworkList, { transition } from "@/components/ArtworkList";
import LoadingIndicator from "@/components/LoadingIndicator";
import Header from "@/components/Header";
import getFeaturedArtwork from "@/services/getFeaturedArtwork";
import Animated from "react-native-reanimated";

export default function Home({ navigation }): React.JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState("");

  const { isLoading: isLoadingArtworks, data: artworksData } = useCallApi({
    api: getArtworksList,
    dispatchCallback: setArtworks,
  });
  const { isLoading: isFeaturedLoading, data: featuredData } = useCallApi({
    api: getFeaturedArtwork,
  });

  /*
  id: number;
  title: string;
  api_link: string;
  thumbnail: {
    lqip: string;
  };
  artist_display: string;
  date_display: string;
  main_reference_number: number;
*/

  if (isLoadingArtworks) return <LoadingIndicator />;

  const onSearch = (text: string): void => {
    if (text) {
      console.log("typed text = ", text);
      return;
    }

    setSearchQuery("");
  };

  return (
    <SafeAreaContainer>
      <Container>
        <Animated.View
          sharedTransitionTag="headerAnimation"
          sharedTransitionStyle={transition}
          style={{
            originX: 200,
          }}
        >
          <Header searchQuery={searchQuery} onSearch={onSearch} navigation={navigation} />
        </Animated.View>

        <InnerWrapper>
          {isFeaturedLoading || isLoadingArtworks ? (
            <LoadingIndicator />
          ) : (
            <ArtworkList
              data={artworksData}
              showFeatured
              featuredData={featuredData[0]}
              navigate={navigation.navigate}
            />
          )}
        </InnerWrapper>
      </Container>
    </SafeAreaContainer>
  );
}
