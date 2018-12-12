import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
import Example1 from "./Example1";
import Example2 from "./Example2";

import SideBar from "../Components/SideBar";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Example1: { screen: Example1 },
    Example2: { screen: Example2 },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
