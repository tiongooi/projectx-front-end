import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";

export default class TaskCardSelectable extends Component {
  render(){
    return(
        <View>
          <View>
            <Text>Eat Sandwich</Text>
          </View>
          <TouchableHighlight onPress={()=>alert("hey")}>
            <View>
              <Text>checkbox</Text>
            </View>
          </TouchableHighlight>
        </View>
    )
  }
};
