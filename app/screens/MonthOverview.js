import React, {Component} from "react";
import {ScrollView} from "react-native";
import Overview from "../components/month/Overview";

export default class MonthOverview extends Component {
  render(){
    return(
      <ScrollView>
        <Overview />
      </ScrollView>
    )
  }
};
