import React from "react";
import { SvgXml } from "react-native-svg";
import Logo from "@assets/articLogo.svg";
import ProfileIcon from "@assets/icons/ProfileIcon.svg";
import { Container, ProfileWrapper, InnerWrapper, StyledInputSearch, InvisibleBox } from "./styles";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";

interface HeaderProps {
  searchQuery: string;
  hideSearch: boolean;
  onChange: (t: string) => void;
  navigation: () => void;
}

const Header = ({
  searchQuery,
  hideSearch,
  onChange,
  navigation,
}: HeaderProps): React.JSX.Element => {
  return (
    <>
      <Container>
        <SvgXml xml={Logo} width={100} height={100} />
        <InnerWrapper>
          {!hideSearch ? (
            <StyledInputSearch
              value={searchQuery}
              onChangeText={(text) => {
                onChange(text);
              }}
            />
          ) : (
            <InvisibleBox />
          )}
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
