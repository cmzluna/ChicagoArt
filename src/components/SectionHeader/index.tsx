import React from "react";
import { Container, SectionTitle } from "./styles";

const SectionHeader = ({ title }) => {
  if (!title) return null;

  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
    </Container>
  );
};

export default SectionHeader;
