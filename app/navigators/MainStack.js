import {StackNavigator} from "react-navigation";
import JobOverview from "../screens/JobOverview";
import DayOverview from "../screens/DayOverview";
import MonthOverview from "../screens/MonthOverview";

const MainStack = StackNavigator({
  Screen1: {
    screen: JobOverview
  },
  Screen2: {
    screen: MonthOverview
  },
  Screen3: {
    screen: DayOverview
  }
});

module.exports = MainStack;
