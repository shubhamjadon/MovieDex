import React from "react";
import {
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../screens/Home";
import GetStarted from "../screens/GetStarted";
import MovieDetail from "../screens/MovieDetail";
import { MovieObjType } from "../apis/GetNowPlaying";

export type RootStackParamsList = {
  GetStarted: undefined;
  Home: undefined;
  MovieDetail: {
    movieData: MovieObjType;
  };
};

const MainStack = createStackNavigator<RootStackParamsList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="GetStarted" component={GetStarted} />
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="MovieDetail" component={MovieDetail} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;

export type GetStartedScreenProps = StackScreenProps<
  RootStackParamsList,
  "GetStarted"
>;
export type HomeScreenProps = StackScreenProps<RootStackParamsList, "Home">;
export type MovieDetailScreenProps = StackScreenProps<
  RootStackParamsList,
  "MovieDetail"
>;
