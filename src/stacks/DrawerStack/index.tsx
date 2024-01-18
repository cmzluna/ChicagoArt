import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabStack from "@stacks/TabStack";
import DrawerMenu from "@components/DrawerMenu";

const DrawerStack = (): React.JSX.Element => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#dfcfd4",
          zIndex: 100,
          width: 200,
          marginBottom: 65,
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
