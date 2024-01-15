import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabStack from "@stacks/TabStack";
import DrawerMenu from "@components/DrawerMenu";

const DrawerStack = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#EEE",
          zIndex: 100,
          width: 300,
        },
        headerShown: false,
        drawerPosition: "right",
      }}
      drawerContent={(props) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen name="TabStack" component={TabStack} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
