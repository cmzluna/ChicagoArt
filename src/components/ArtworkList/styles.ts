import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import getScale from "@/utils/GetScale";

const { horizontalScale, verticalScale } = getScale();

const ArtContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: ${horizontalScale(8)}px;
  height: ${verticalScale(250)}px;
`;

const ColumnWrapper = styled.View`
  flex-direction: column;
  flex: 1;
  gap: ${horizontalScale(8)}px;
  padding: ${horizontalScale(8)}px;
`;

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f9fafc;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: black;
`;

const StyledImage = styled.Image`
  margin-top: ${verticalScale(12)}px;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: grey;
`;

const Text = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;
export { SafeAreaContainer, ArtContainer, ColumnWrapper, Title, SubTitle, Text, StyledImage };
