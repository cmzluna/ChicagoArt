import styled from "styled-components/native";

const Container = styled.View`
  justify-content: center;
`;

const StyledText = styled.Text`
  color: ${({ titleColor }) => (titleColor ? titleColor : "#fff")};
  font-weight: 700;
  text-align: center;
`;
export { Container, StyledText };
