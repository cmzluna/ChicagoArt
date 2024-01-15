import React from "react";
import { Container, StyledText } from "./styles";
import { TouchableOpacity } from "react-native";
import { BaseButtonProps } from "./types";

const BaseButton: React.FC<BaseButtonProps> = ({
  title,
  onPress,
  children,
  titleColor,
  ...props
}) => {
  if (!(children || title)) {
    return null;
  }

  return (
    <TouchableOpacity activeOpacity={0.45} onPress={onPress} {...props}>
      <Container>
        {typeof title === "string" ? (
          <StyledText titleColor={titleColor}>{title}</StyledText>
        ) : (
          children
        )}
      </Container>
    </TouchableOpacity>
  );
};

export default BaseButton;
