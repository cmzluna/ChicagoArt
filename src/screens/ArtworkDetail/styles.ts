import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";

const Container = styled.View`
  width: 100%;
  display: flex;
  flex: 1;
  padding: 8px;
  gap: 8px;
`;

const ArtContainer = styled.View`
  display: flex;
  flex: 1;
  gap: 8px;
  height: 250px;
  border: 1px solid red;
`;

const List = styled.View`
  width: 100%;
  background-color: #eee;
  padding: 4px;
  border-color: #ccc;
  border-bottom-width: 1px;
`;

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f9fafc;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const ColumnWrapper = styled.View`
  flex-direction: column;
  flex: 1;
  gap: 8px;
  padding: 8px;
`;

const RowWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  gap: 8px;
`;

const StyledImage = styled(Animated.Image)`
  margin-top: 12px;
  width: 100%;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: grey;
`;

export {
  SafeAreaContainer,
  Container,
  List,
  Title,
  ArtContainer,
  ColumnWrapper,
  StyledImage,
  RowWrapper,
  SubTitle,
};
