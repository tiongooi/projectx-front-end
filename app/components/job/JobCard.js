import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";

export default class JobCard extends Component {
  render(){
    return(
      <TouchableHighlight onPress={this.props.click}>
        <View>
          <View><Text>IMG</Text></View>
          <View>
            <Text>{this.props.job.jobTitle}</Text>
            <Text>{this.props.job.jobDescription}</Text>
        </View>
        </View>
      </TouchableHighlight>
    )
  }
};
