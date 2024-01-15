import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled.View`
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

export { SafeAreaContainer, Container, Title };
