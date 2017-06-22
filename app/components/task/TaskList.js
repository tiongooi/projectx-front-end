import React, {Component} from "react";
import {View} from "react-native";
import TaskCardSelectable from "./TaskCardSelectable";

export default class TaskList extends Component {
  render(){
    return(
      <View>
        <TaskCardSelectable />
        <TaskCardSelectable />
        <TaskCardSelectable />
        <TaskCardSelectable />
        <TaskCardSelectable />
        <TaskCardSelectable />
        <TaskCardSelectable />
        <TaskCardSelectable />
      </View>
    )
  }
};
