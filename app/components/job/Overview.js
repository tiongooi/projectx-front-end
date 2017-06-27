import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Text, TouchableHighlight} from "react-native";
import EmployeeThumbList from "../employee/EmployeeThumbList";
import TaskCard from "../task/TaskCard";

class Overview extends Component {
  render(){
    const {job, tasks, comments, click} = this.props;
    let lastComment;
    if (comments.length != 0) {
      lastComment = comments.pop();
    };
    return(
      <View>
        <View><Text>Google Map</Text></View>
        <View>
          <Text>{job.jobTitle}</Text>
          <Text>{job.jobDescription}</Text>
        </View>
        <EmployeeThumbList />
          {
            lastComment ?
            (
              <View>
                <Text>{lastComment.belongsTo_user.fName} {lastComment.belongsTo_user.lName}:</Text>
                <Text>{lastComment.content}</Text>
              </View>
            ):(null)
          }
          {tasks.map((task,index)=>{
            return(
                <TaskCard key={index} task={task} click={click} />
            )
          })}
      </View>
    )
  }
};

function mapStateToProps(state) {
  return {
    job: state.jobs.jobs,
    tasks: state.tasks.tasks,
    comments: state.comments.comments
  }
};

function mapDispatchToProps(dispatch) {
  return {
    click: ()=> alert("hey buddy")
  }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(Overview);
