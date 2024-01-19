import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import getScale from "@/utils/GetScale";

const { horizontalScale } = getScale();

const Container = styled.View`
  flex: 1;
`;

const ArtContainer = styled.View`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: "center";
  justify-content: "center";
`;
const InnerWrapper = styled.View`
  padding: ${horizontalScale(10)}px;
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
export { SafeAreaContainer, Container, InnerWrapper, ArtContainer, Title, SubTitle, Text };
