import React, {Component} from "react";
import {ScrollView} from "react-native";
import Summary from "../components/job/Summary";

export default class JobSummary extends Component {
  render(){
    return(
      <ScrollView>
        <Summary />
      </ScrollView>
    )
  }
};
