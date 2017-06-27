import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Text, TouchableHighlight} from "react-native";
import EmployeeThumb from "./EmployeeThumb";

export default class EmployeeThumbList extends Component {
  render(){
    const {employees} = this.props.employees;
    return(
      <View>
        {employees.map((employee,index)=>{
          return (
            <EmployeeThumb key={index} employee={employee} click={this.props.click}/>
          )
        })}
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

module.exports = connect(mapStateToProps,mapDispatchToProps)(EmployeeThumbList);
