import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./src/Screens/MainPage/index.js";
import HomePage from "./src/Screens/HomePage/Home.js";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ title: "Main Page", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Home Page", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
