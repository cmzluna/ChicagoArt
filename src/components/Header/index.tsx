import React from "react";
import { SvgXml } from "react-native-svg";
import Logo from "@assets/articLogo.svg";
import { Container, Text } from "./styles";

const Header = () => {
  return (
    <Container>
      <SvgXml xml={Logo} width={100} height={100} />
      <Text>Header text</Text>
    </Container>
  );
};

export default Header;
