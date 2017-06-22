import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";

export default class EmployeeCard extends Component {
  render(){
    return(
      <TouchableHighlight onPress={()=>alert("employee")}>
        <View>
          <View><Text>IMG</Text></View>
          <View>
            <Text>Will Smith</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
};
