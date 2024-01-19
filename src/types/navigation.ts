import { NativeStackScreenProps } from "@react-navigation/stack";

export type PrivateStackParamList = {
  Home: undefined;
  ArtworkDetail: { id: number };
  WebViewScreen: undefined;
};

export type PrivateScreenProps = NativeStackScreenProps<PrivateStackParamList>;
