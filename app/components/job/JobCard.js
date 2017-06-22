import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";

export default class JobCard extends Component {
  render(){
    return(
      <TouchableHighlight>
        <View>
          <View><Text>IMG</Text></View>
          <View>
            <Text>John's Mosman Home</Text>
            <Text>Month End Maintenence</Text>
        </View>
        </View>
      </TouchableHighlight>
    )
  }
};
