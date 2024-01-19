import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PrivateStackParamList } from "@types/navigation";
import Home from "@/screens/Home";
import ArtworkDetail from "@/screens/ArtworkDetail";
import WebViewScreen from "@/screens/WebView";

const PrimaryStackNav = createNativeStackNavigator<PrivateStackParamList>();

const PrimaryStack = (): React.JSX.Element => (
  <PrimaryStackNav.Navigator screenOptions={{ headerShown: false }}>
    <PrimaryStackNav.Screen name="Home" component={Home} />
    <PrimaryStackNav.Screen name="ArtworkDetail" component={ArtworkDetail} />
    <PrimaryStackNav.Screen name="WebViewScreen" component={WebViewScreen} />
  </PrimaryStackNav.Navigator>
);

export default PrimaryStack;
