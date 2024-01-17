import * as React from "react";
import { Container, SafeAreaContainer, InnerWrapper } from "./styles";
import useCallApi from "@/hooks/useCallApi";
import getArtworksList from "@/services/getArtworksList";
import { setArtworks } from "@/store/slices/artworks";
import ArtworkList from "@/components/ArtworkList";
import LoadingIndicator from "@/components/LoadingIndicator";
import Header from "@/components/Header";
import getFeaturedArtwork from "@/services/getFeaturedArtwork";

export default function Home({ navigation }): React.JSX.Element {
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

  return (
    <SafeAreaContainer>
      <Container>
        <Header />

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
      </Container>
    </SafeAreaContainer>
  );
}
