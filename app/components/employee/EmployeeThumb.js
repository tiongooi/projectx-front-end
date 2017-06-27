import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";

export default class EmployeeThumb extends Component {
  render(){
    const {click, employee} = this.props;
    return(
      <TouchableHighlight onPress={click}>
        <View>
          <View><Text>IMG</Text></View>
          <Text>{employee.fName} {employee.lName}</Text>
        </View>
      </TouchableHighlight>
    )
  }
};
