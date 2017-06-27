import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Text} from "react-native";
import ClientCard from "./ClientCard";
import EmployeeCard from "./EmployeeCard";

export default class EmployeeList extends Component {
  render(){
    return(
      <View>
        <Text>{this.props.employees.count}</Text>
        <EmployeeCard />
      </View>
    )
  }
};

function mapStateToProps(state) {
  return {
    employees: state.employees
  }
};

function mapDispatchToProps(dispatch) {
  return {
    click: ()=> alert("hello")
  }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(EmployeeList);
