import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import getScale from "@/utils/GetScale";

const { horizontalScale } = getScale();

const Container = styled.View`
  flex: 1;
`;

const ContentWrapper = styled.View`
  padding: ${horizontalScale(10)}px;
  flex: 1;
  width: 100%;
`;

const InnerWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: ${horizontalScale(12)}px;
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
