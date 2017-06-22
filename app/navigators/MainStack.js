import {StackNavigator} from "react-navigation";
import JobSummary from "../screens/JobSummary";
import DayOverview from "../screens/DayOverview";
import MonthOverview from "../screens/MonthOverview";

const MainStack = StackNavigator({
  Screen1: {
    screen: DayOverview
  },
  Screen2: {
    screen: MonthOverview
  },
  Screen3: {
    screen: JobSummary
  }
});

module.exports = MainStack;
