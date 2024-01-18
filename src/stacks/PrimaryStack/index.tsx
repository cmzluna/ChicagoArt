import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PrivateStackParamList } from "types/navigation";
import DrawerStack from "@stacks/DrawerStack";
import Home from "@/screens/Home";
import ArtworkDetail from "@/screens/ArtworkDetail";

const PrimaryStackNav = createNativeStackNavigator<PrivateStackParamList>();

const PrimaryStack = (): React.JSX.Element => (
  <PrimaryStackNav.Navigator screenOptions={{ headerShown: false }}>
    <PrimaryStackNav.Screen name="Home" component={Home} />
    <PrimaryStackNav.Screen name="ArtworkDetail" component={ArtworkDetail} />
  </PrimaryStackNav.Navigator>
);

export default PrimaryStack;
