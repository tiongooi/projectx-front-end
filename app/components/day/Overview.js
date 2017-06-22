import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";
import EmployeeThumbList from "../employee/EmployeeThumbList";
import JobList from "../job/JobList";

export default class Overview extends Component {
  render(){
    return(
      <View>
        <View>
          <TouchableHighlight>
            <View>
              <Text> > </Text>
            </View>
          </TouchableHighlight>
          <View>
            <Text>Wed, 14th July</Text>
          </View>
          <TouchableHighlight>
            <View>
              <Text> > </Text>
            </View>
          </TouchableHighlight>
        </View>
        <EmployeeThumbList />
        <View>
          <Text>4 jobs, 5 employee set for today</Text>
        </View>
        <JobList />
      </View>
    )
  }
};
