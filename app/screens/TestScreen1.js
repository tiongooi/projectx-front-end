import React, {Component} from "react";
import {ScrollView} from "react-native";
import JobSummary from "../components/job/JobSummary";

export default class TestScreen1 extends Component {
  render(){
    return(
      <ScrollView>
        <JobSummary />
      </ScrollView>
    )
  }
};

// const styles = {
//   testContainer: {
//     flex:1,
//     justifyContent: "space-around",
//     alignItems: "center",
//   }
// }
