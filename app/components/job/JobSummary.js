import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";
import EmployeeThumbList from "../employee/EmployeeThumbList";
import TaskList from "../task/TaskList";

export default class JobSummary extends Component {
  render(){
    return(
      <View>
        <View><Text>Google Map</Text></View>
        <View>
          <Text>John's Manly Home</Text>
          <Text>Month end maintenence</Text>
        </View>
        <EmployeeThumbList />
        <View><Text>comment</Text></View>
        <TaskList />
      </View>
    )
  }
};
