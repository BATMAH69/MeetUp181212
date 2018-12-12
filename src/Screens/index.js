import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
import Example1 from "./Example1";
import Example2 from "./Example2";
import MainScreenNavigator from "../ChatScreen";
import ProfileScreen from "../ProfileScreen";
import SideBar from "../Components/SideBar";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    Example1: { screen: Example1 },
    Example2: { screen: Example2 },
    ProfileScreen: { screen: ProfileScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
