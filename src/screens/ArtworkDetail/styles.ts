import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import getScale from "@/utils/GetScale";

const { horizontalScale, verticalScale } = getScale();

const Container = styled.View`
  width: 100%;
  display: flex;
  flex: 1;
  padding: ${horizontalScale(8)}px;
  gap: ${horizontalScale(8)}px;
`;

const ArtContainer = styled.View`
  display: flex;
  flex: 1;
  gap: ${horizontalScale(8)}px;
  height: ${verticalScale(250)}px;
  border: 1px solid red;
`;

const List = styled.View`
  width: 100%;
  background-color: #eee;
  padding: 4px;
  border-color: #ccc;
  border-bottom-width: 1px;
`;

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f9fafc;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const ColumnWrapper = styled.View`
  flex-direction: column;
  flex: 1;
  gap: ${horizontalScale(8)}px;
  padding: ${horizontalScale(8)}px;
`;

const RowWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  gap: ${horizontalScale(8)}px;
`;

const StyledImage = styled(Animated.Image)`
  margin-top: ${verticalScale(12)}px;
  width: 100%;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: grey;
`;

export {
  SafeAreaContainer,
  Container,
  List,
  Title,
  ArtContainer,
  ColumnWrapper,
  StyledImage,
  RowWrapper,
  SubTitle,
};
