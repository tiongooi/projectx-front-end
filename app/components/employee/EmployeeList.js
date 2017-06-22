import React, {Component} from "react";
import {View} from "react-native";
import ClientCard from "./ClientCard";
import EmployeeCard from "./EmployeeCard";

export default class EmployeeList extends Component {
  render(){
    return(
      <View>
        <ClientCard />
        <EmployeeCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </View>
    )
  }
};
