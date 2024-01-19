import React from "react";
import { Container, SectionTitle } from "./styles";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps): React.JSX.Element | null => {
  if (!title) return null;

  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
    </Container>
  );
};

export default SectionHeader;
