import React, {Component} from "react";
import {View,Text, TouchableHighlight} from "react-native";
import TaskCardSelectable from "./TaskCardSelectable";

export default class TaskCard extends Component {
  render(){
    return(
      <TouchableHighlight onPress={this.props.click}>
        <View>
          <Text>{this.props.task.content}</Text>
        </View>
      </TouchableHighlight>
    )
  }
};
