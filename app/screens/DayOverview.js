import React, {Component} from "react";
import {ScrollView} from "react-native";
import Overview from "../components/day/Overview";

export default class DayOverview extends Component {
  render(){
    return(
      <ScrollView>
        <Overview />
      </ScrollView>
    )
  }
};
