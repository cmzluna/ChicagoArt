import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import Home from "@screens/Home";
import Favorites from "@screens/Favorites";
import { Platform } from "react-native";
import FavoritesIcon from "@assets/icons/FavoritesIcon.svg";
import HomeIcon from "@assets/icons/HomeIcon.svg";
import ArtworkDetail from "@/screens/ArtworkDetail";

const TabNav = createBottomTabNavigator();

function TabBarIcon({ icon, focused }) {
  return <SvgXml xml={icon} color={focused ? "orange" : "#EEE"} />;
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
          backgroundColor: "#656565",
          paddingTop: 24,
          paddingBottom: 24,
          width: "100%",
          display: "flex",
          alignContent: "center",
          paddingHorizontal: 10,
          alignItems: "center", // Alinear los íconos verticalmente en el centro
          height: Platform.OS === "ios" ? 100 : 70,
        },
        tabBarItemStyle: {
          flex: 1, // Ajusta el espacio ocupado por cada ícono
        },
      }}
    >
      <TabNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={HomeIcon} focused={focused} size={32} />
          ),
        }}
      />
      <TabNav.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon icon={FavoritesIcon} focused={focused} size={32} />
          ),
        }}
      />
      <TabNav.Screen
        name="ArtworkDetail"
        component={ArtworkDetail}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </TabNav.Navigator>
  );
};

export default TabStack;
