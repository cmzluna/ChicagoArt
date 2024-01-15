import * as React from "react";
import { Container, RowWrapper, StyledButton, Label } from "./styles";
import { SvgXml } from "react-native-svg";
import FavoritesIcon from "@assets/icons/FavoritesIcon.svg";

const DrawerMenu = ({ navigation }) => {
  const menuItems = [
    {
      icon: FavoritesIcon,
      label: "Favorites",
      onPress: () => navigation.navigate("TabStack", { screen: "Favorites" }),
    },
  ];

  return (
    <>
      <Container>
        {menuItems.map((item, index) => (
          <StyledButton key={index} onPress={() => item.onPress()}>
            <RowWrapper>
              <SvgXml xml={item.icon} height={26} width={26} />
              <Label>{item.label}</Label>
            </RowWrapper>
          </StyledButton>
        ))}
      </Container>
    </>
  );
};

export default DrawerMenu;
