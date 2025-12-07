import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./Screens/HomeScreen";
import LibraryScreen from "./Screens/LibraryScreen";
import StatsScreen from "./Screens/StatsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import AddGameScreen from "./Screens/AddGameScreen"; 

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#121212" },
        headerTintColor: "#ffffff",
        tabBarStyle: {
          backgroundColor: "#1b1b1b",
          borderTopColor: "#333",
        },
        tabBarActiveTintColor: "#ffcC00",
        tabBarInactiveTintColor: "#aaaaaa",
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Library") {
            iconName = focused ? "albums" : "albums-outline";
          } else if (route.name === "Stats") {
            iconName = focused ? "stats-chart" : "stats-chart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tabs sit inside the stack */}
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        {/* Full-page Add Game form */}
        <Stack.Screen
          name="AddGame"
          component={AddGameScreen}
          options={{ title: "Add New Game" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
