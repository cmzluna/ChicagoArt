import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled.View`
  flex: 1;
  padding: 8px;
`;

const ArtContainer = styled.View`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: "center";
  justify-content: "center";
`;

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f9fafc;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

const Text = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;
export { SafeAreaContainer, Container, ArtContainer, Title, SubTitle, Text };