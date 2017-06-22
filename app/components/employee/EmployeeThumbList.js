import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";
import EmployeeThumb from "./EmployeeThumb";

export default class EmployeeThumbList extends Component {
  render(){
    return(
      <TouchableHighlight onPress={()=>alert("yoyo")}>
        <View>
              <EmployeeThumb />
              <EmployeeThumb />
              <EmployeeThumb />
              <EmployeeThumb />
              <EmployeeThumb />
              <EmployeeThumb />
              <EmployeeThumb />
              <EmployeeThumb />
        </View>
      </TouchableHighlight>
    )
  }
};
