import React, {Component} from "react";
import {ScrollView} from "react-native";
import {connect} from "react-redux";
import Overview from "../components/day/Overview";

class DayOverview extends Component {
  render(){
    return(
      <ScrollView>
        <Overview />
      </ScrollView>
    )
  }
};

function mapStateToProps() {
  return {
    jobs: state.jobs
  }
};

function mapDispatchToProps() {
  return {
    click: ()=> alert("hey")
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(DayOverview);
