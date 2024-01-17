import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled.View`
  width: 100%;
  padding: 8px;
  flex: 1;
`;

const InnerWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f9fafc;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export { SafeAreaContainer, InnerWrapper, Container, Title };
