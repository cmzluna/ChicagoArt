import * as React from "react";
import { Container, SafeAreaContainer, Title } from "./styles";
import useCallApi from "@/hooks/useCallApi";
import getArtworksList from "@/services/getArtworksList";
import { setArtworks } from "@/store/slices/artworks";
import ArtworkList from "@/components/ArtworkList";
import LoadingIndicator from "@/components/LoadingIndicator";
import Header from "@/components/Header";

export default function Home(): React.JSX.Element {
  const { isLoading: isLoadingArtworks, data: artworksData } = useCallApi({
    api: getArtworksList,
    dispatchCallback: setArtworks,
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
        <Title>In Home Screen</Title>

        <ArtworkList data={artworksData} />
      </Container>
    </SafeAreaContainer>
  );
}
