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
import searchArtworksByQuery from "@/services/searchArtworksByQuery";

export default function Home({ navigation }): React.JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const { isLoading: isLoadingArtworks, data: artworksData } = useCallApi({
    api: getArtworksList,
    dispatchCallback: setArtworks,
  });
  const { isLoading: isFeaturedLoading, data: featuredData } = useCallApi({
    api: getFeaturedArtwork,
  });

  if (isLoadingArtworks) return <LoadingIndicator />;

  const onChange = async (text: string) => {
    if (text) {
      setSearchQuery(text);
      try {
        const res = await searchArtworksByQuery(1, text);

        if (res?.data.length) setSearchResults(res.data);
        return;
      } catch (err) {
        console.log(err);
      }
    }
    setSearchQuery("");
    setSearchResults([]);
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
          <Header searchQuery={searchQuery} onChange={onChange} navigation={navigation} />
        </Animated.View>

        <InnerWrapper>
          {isFeaturedLoading || isLoadingArtworks ? (
            <LoadingIndicator />
          ) : (
            <ArtworkList
              data={!!searchResults.length ? searchResults : artworksData}
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
