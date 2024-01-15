import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PrivateStack from "../PrivateStack";

const Main = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <PrivateStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Main;
