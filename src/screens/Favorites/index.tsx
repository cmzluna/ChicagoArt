import * as React from "react";
import { SafeAreaContainer, Title, InnerWrapper, ContentWrapper } from "./styles";
import { useSelector } from "react-redux";
import ArtworkList from "@/components/ArtworkList";
import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import { SvgXml } from "react-native-svg";
import Phantom from "@assets/phantom.svg";

export default function Favorites({ navigation }): React.JSX.Element {
  const favorites = useSelector((s) => s.favorites.favorites);
  const favoritesAvailable = !!favorites.length;

  return (
    <SafeAreaContainer>
      <Header navigation={navigation} />
      <ContentWrapper>
        <SectionHeader title="Your favorites" />
        {favoritesAvailable ? (
          <>
            <ArtworkList data={favorites} navigate={navigation.navigate} showFeatured={false} />
          </>
        ) : (
          <InnerWrapper>
            <SvgXml xml={Phantom} height={30} width={30} fill="#A7A7A7" />
            <Title>No favorites added yet...</Title>
          </InnerWrapper>
        )}
      </ContentWrapper>
    </SafeAreaContainer>
  );
}
