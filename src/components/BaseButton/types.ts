export interface BaseButtonProps {
  title: string | null;
  onPress: () => void;
  children?: JSX.Element;
  titleColor?: string;
}
