import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import Logo from "@assets/articLogo.svg";
import ProfileIcon from "@assets/icons/ProfileIcon.svg";
import { Container, ProfileWrapper, InnerWrapper, StyledInputSearch, Text } from "./styles";
import { TouchableOpacity } from "react-native";

const Header = ({ searchQuery, onSearch, navigation }) => {
  return (
    <Container>
      <SvgXml xml={Logo} width={100} height={100} />
      <InnerWrapper>
        <StyledInputSearch
          value={searchQuery}
          onChangeText={(text) => {
            onSearch(text);
          }}
        />
      </InnerWrapper>

      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <ProfileWrapper>
          <SvgXml xml={ProfileIcon} width={20} height={20} />
        </ProfileWrapper>
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
