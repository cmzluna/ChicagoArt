import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PrivateStackParamList } from "types/navigation";
import DrawerStack from "@stacks/DrawerStack";

const PrivateStackNav = createNativeStackNavigator<PrivateStackParamList>();

const PrivateStack = () => (
  <PrivateStackNav.Navigator>
    <PrivateStackNav.Screen
      name="DrawerStack"
      component={DrawerStack}
      options={{
        headerShown: false,
      }}
    />
  </PrivateStackNav.Navigator>
);

export default PrivateStack;
