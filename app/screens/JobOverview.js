import React, {Component} from "react";
import {ScrollView} from "react-native";
import Overview from "../components/job/Overview";

export default class JobSummary extends Component {
  render(){
    return(
      <ScrollView>
        <Overview />
      </ScrollView>
    )
  }
};
