import styled from "styled-components/native";
import getScale from "@/utils/GetScale";
import InputSearch from "../InputSearch";
import { LinearGradient } from "react-native-linear-gradient";

const { horizontalScale } = getScale();

const Container = styled(LinearGradient).attrs({
  colors: ["#302e44", "#EEEEEE"],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 3.5 },
})`
  flex-direction: row;
  border: 1px solid #444364;
  align-items: center;
  display: flex;
  height: 100px;
`;

const InnerWrapper = styled.View`
  justify-content: space-around;
  align-items: center;
  flex: 1;
  flex-direction: row;
  gap: 12px;
`;

const Text = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

const ProfileWrapper = styled.View`
  height: 50px;
  width: 50px;
  background-color: #eee;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const StyledInputSearch = styled(InputSearch)``;

export { Container, InnerWrapper, Text, ProfileWrapper, StyledInputSearch };
