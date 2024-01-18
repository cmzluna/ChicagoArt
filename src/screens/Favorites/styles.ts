import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled.View`
  flex: 1;
`;

const ContentWrapper = styled.View`
  padding: 10px;
  flex: 1;
  width: 100%;
`;

const InnerWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 12px;
`;

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f9fafc;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export { SafeAreaContainer, ContentWrapper, InnerWrapper, Container, Title };
