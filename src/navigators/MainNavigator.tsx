import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import GetStarted from "../screens/GetStarted";

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="GetStarted" component={GetStarted} />
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;