import styled from "styled-components/native";
import getScale from "@/utils/GetScale";
import InputSearch from "../InputSearch";
import { LinearGradient } from "react-native-linear-gradient";

const { verticalScale } = getScale();

const Container = styled(LinearGradient).attrs({
  colors: ["#EEEEEE", "#302e44"],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 3.5 },
})`
  flex-direction: row;
  border: 1px solid #444364;
  justify-content: space-around;
  align-items: center;
  display: flex;
  height: 130px;
  padding: 12px;
`;

const InputContainer = styled(LinearGradient).attrs({
  colors: ["#302e44", "#EEEEEE"],
  start: { x: 3.5, y: 1 },
  end: { x: 1, y: 0 },
})`
  flex-direction: row;
  border: 1px solid #444364;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 70px;
`;

const InnerWrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  flex: 1;
  flex-direction: row;
  padding-left: 20px;
`;

const Text = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

const ProfileWrapper = styled.View`
  height: ${verticalScale(40)}px;
  width: ${verticalScale(40)}px;
  background-color: #eee;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

const StyledInputSearch = styled(InputSearch)``;

export { Container, InputContainer, InnerWrapper, Text, ProfileWrapper, StyledInputSearch };
