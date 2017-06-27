import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Text, TouchableHighlight} from "react-native";
import EmployeeThumbList from "../employee/EmployeeThumbList";
import JobList from "../job/JobList";

export default class OverviewContainer extends Component {
  render(){
    let {numberOfJobs, numberOfEmployees} = this.props;
    return(
      <View>
        <View>
          <TouchableHighlight onPress={this.props.click}>
            <View>
              <Text> > </Text>
            </View>
          </TouchableHighlight>
          <View>
            <Text>{Date().toString()}</Text>
          </View>
          <TouchableHighlight>
            <View>
              <Text> > </Text>
            </View>
          </TouchableHighlight>
        </View>
        <EmployeeThumbList />
        <View>
          <Text>{numberOfJobs} job, {numberOfEmployees} employee set for the day</Text>
        </View>
        <JobList />
      </View>
    )
  }
};

function mapStateToProps(state) {
  return {
    numberOfJobs: state.jobs.jobs.length,
    numberOfEmployees: state.employees.employees.length
  }
};

function mapDispatchToProps(dispatch) {
  return {
    click: ()=> alert("hey")
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);
