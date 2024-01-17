import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ArtContainer = styled.View`
  display: flex;
  width: 95%;
  align-self: center;
  flex-direction: row;
  padding: 8px;
`;

const ColumnWrapper = styled.View`
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding: 8px;
  flex: 1;
`;

const SafeAreaContainer = styled(SafeAreaView)`
  height: 420px;
  background-color: #f9fafc;
  border: 1px solid grey;
  border-radius: 8px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: black;
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
export { SafeAreaContainer, ArtContainer, ColumnWrapper, Title, SubTitle, Text };
