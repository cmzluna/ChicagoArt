import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ArtContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 250px;
`;

const ColumnWrapper = styled.View`
  flex-direction: column;
  flex: 1;
  gap: 8px;
  padding: 8px;
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
  margin-top: 12px;
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
