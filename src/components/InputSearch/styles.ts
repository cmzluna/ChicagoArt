import styled from "styled-components/native";
import { TextInput } from "react-native";
import getScale from "@/utils/GetScale";

const { horizontalScale, verticalScale } = getScale();

const Container = styled.View`
  height: ${verticalScale(40)}px;
  width: ${horizontalScale(200)}px;
`;

const Input = styled(TextInput)`
  height: ${verticalScale(40)}px;
  position: absolute;
  width: 100%;
  font-size: ${horizontalScale(13)}px;
  border-radius: ${horizontalScale(16)}px;
  background-color: #fff;
  padding: ${horizontalScale(6)}px ${horizontalScale(6)}px ${horizontalScale(6)}px
    ${horizontalScale(52)}px;
`;

const SearchIconWrapper = styled.View`
  position: absolute;
  top: ${verticalScale(10)}px;
  left: ${horizontalScale(16)}px;
`;

export { Container, Input, SearchIconWrapper };
