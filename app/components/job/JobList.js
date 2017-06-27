import React, {Component} from "react";
import {connect} from "react-redux";
import {View} from "react-native";
import JobCard from "./JobCard";

class JobList extends Component {
  render(){
    const {jobs, click} = this.props;
    return(
      <View>
        {jobs.map((job,index)=>{
          return(
            <JobCard key={index} job={job} click={click}/>
          )
        })}
      </View>
    )
  }
};

function mapStateToProps(state) {
  return {
    jobs: state.jobs.jobs
  }
};

function mapDispatchToProps(dispatch) {
  return {
    click: ()=> alert("hello")
  }
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(JobList);
