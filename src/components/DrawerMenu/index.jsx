import * as React from "react";
import { Container, RowWrapper, StyledButton, Label } from "./styles";
import { SvgXml } from "react-native-svg";
import DocumentsIcon from "@assets/icons/DocumentsIcon.svg";
import DeleteIcon from "@assets/icons/DeleteIcon.svg";
import { resetFavorites } from "@/store/slices/favorites";
import { showToast } from "@/utils/ShowToast";
import { useDispatch, useSelector } from "react-redux";

const DrawerMenu = ({ navigation }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.favorites);
  const favoritesAvailable = !!favorites.length;

  const handleOpenWebview = () => {
    const url = "https://www.artic.edu/";
    navigation.navigate("WebViewScreen", { url });
  };

  const menuItems = [
    {
      icon: DocumentsIcon,
      label: "Visit our website",
      onPress: () => handleOpenWebview(),
    },
    {
      icon: DeleteIcon,
      label: "Clean Favorites",
      onPress: () => {
        if (!favoritesAvailable) return showToast("No favorites to clear...", "error");
        dispatch(resetFavorites());

        return showToast("Favorites have been cleared...", "success");
      },
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
