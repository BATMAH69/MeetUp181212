import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";

import SideBar from "../Components/SideBar";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Show: { screen: Example1 },
    Bridge: { screen: Example2 },
    Styles: { screen: Example3 },
    Scripts: { screen: Example4 },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
