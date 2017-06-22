import {TabNavigator} from "react-navigation";
import MainStack from "./MainStack";

import TestScreen1 from "../screens/TestScreen1";

const RootNavigator = TabNavigator({
  App: {
    screen: MainStack
  },
  Testing: {
    screen: TestScreen1
  }
});

module.exports = RootNavigator;
