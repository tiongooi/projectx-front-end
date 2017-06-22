import React, {Component} from "react";
import {Text,View,TouchableHighlight} from "react-native";

export default class Overview extends Component {
  render(){
    return(
      <View>
        <View>
          <View>
            <Text>Wed, 14th July</Text>
          </View>
          <View>
            <Text>17c</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>4 jobs set for today</Text>
          </View>
          <View>
            <Text>Sunny</Text>
          </View>
        </View>
        <View>
          <Text>==== calendar ====</Text>
        </View>
      </View>
    )
  }
};
