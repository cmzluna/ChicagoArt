import * as React from "react";
import { Container, SafeAreaContainer, Title } from "./styles";

export default function Home(): React.JSX.Element {
  return (
    <SafeAreaContainer>
      <Container>
        <Title>In Home Screen</Title>
      </Container>
    </SafeAreaContainer>
  );
}
