import * as React from "react";
import { Container, Title, InnerWrapper } from "./styles";
import { useSelector } from "react-redux";
import ArtworkList from "@/components/ArtworkList";
import Header from "@/components/Header";

export default function Favorites({ navigation }): React.JSX.Element {
  const favorites = useSelector((s) => s.favorites.favorites);
  const favoritesAvailable = !!favorites.length;

  return (
    <Container>
      <Header />
      {favoritesAvailable ? (
        <>
          <ArtworkList data={favorites} navigate={navigation.navigate} showFeatured={false} />
        </>
      ) : (
        <InnerWrapper>
          <Title>No favorites added yet...</Title>
        </InnerWrapper>
      )}
    </Container>
  );
}
