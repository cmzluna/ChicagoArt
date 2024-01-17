import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 100px;
`;

const Text = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;
export { Container, Text };
