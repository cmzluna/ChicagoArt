import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import Favorites from "@screens/Favorites";
import { Platform, View } from "react-native";
import FavoritesIcon from "@assets/icons/FavoritesIcon.svg";
import HomeIcon from "@assets/icons/HomeIcon.svg";
import PrimaryStack from "../PrimaryStack";
import { LinearGradient } from "react-native-linear-gradient";

const TabNav = createBottomTabNavigator();

function TabBarIcon({ icon, focused }) {
  return <SvgXml xml={icon} color={focused ? "#dc84a4" : "#dfcfd4"} />;
}

const TabStack = () => {
  return (
    <TabNav.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#000",
          backgroundColor: "#302e44",
          paddingTop: 24,
          paddingBottom: 24,
          width: "100%",
          display: "flex",
          alignContent: "center",
          paddingHorizontal: 10,
          alignItems: "center",
          height: Platform.OS === "ios" ? 80 : 65,
        },
        tabBarItemStyle: {
          flex: 1,
        },
        tabBarBackground: () => (
          <View style={{ flex: 1 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#dfcfd4", "#c4446c"]}
              style={{ height: 4 }}
            />
          </View>
        ),
      }}
    >
      <TabNav.Screen
        name="PrimaryStack"
        component={PrimaryStack}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon icon={HomeIcon} focused={focused} size={36} />,
        }}
      />
      <TabNav.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={FavoritesIcon} focused={focused} size={36} />
          ),
        }}
      />
    </TabNav.Navigator>
  );
};

export default TabStack;
