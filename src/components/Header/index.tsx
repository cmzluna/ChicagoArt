import React from "react";
import { SvgXml } from "react-native-svg";
import Logo from "@assets/articLogo.svg";
import ProfileIcon from "@assets/icons/ProfileIcon.svg";
import { Container, ProfileWrapper, InnerWrapper, StyledInputSearch } from "./styles";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";

const Header = ({ searchQuery, onChange, navigation }) => {
  return (
    <>
      <Container>
        <SvgXml xml={Logo} width={100} height={100} />
        <InnerWrapper>
          <StyledInputSearch
            value={searchQuery}
            onChangeText={(text) => {
              onChange(text);
            }}
          />
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <ProfileWrapper>
              <SvgXml xml={ProfileIcon} width={20} height={20} />
            </ProfileWrapper>
          </TouchableOpacity>
        </InnerWrapper>
      </Container>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={["#dfcfd4", "#c4446c"]}
        style={{ height: 4, width: "100%" }}
      />
    </>
  );
};

export default Header;
