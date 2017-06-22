import React, {Component} from "react";
import {View, Text, TouchableHighlight} from "react-native";

export default class ClientCard extends Component {
  render(){
    return(
      <TouchableHighlight onPress={()=>alert("Hello")}>
        <View>
          <View><Text>IMG</Text></View>
          <View>
            <Text>Will Smith</Text>
            <Text>42, Bunn St, Pyrmont NSW 2009</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
};
