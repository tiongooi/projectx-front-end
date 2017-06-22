import {TabNavigator} from "react-navigation";
import TestScreen1 from "../screens/TestScreen1";

const RootNavigator = TabNavigator({
  Tab1: {
    screen: TestScreen1
  }
});

module.exports = RootNavigator;
