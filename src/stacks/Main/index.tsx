import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import PrivateStack from "../PrivateStack";
import { Provider } from "react-redux";
import store, { persistor } from "@store/index";

const Main = (): React.JSX.Element => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <PrivateStack />
          <Toast />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default Main;
