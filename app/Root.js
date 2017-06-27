import React, {Component} from "react";
import {Provider} from "react-redux";
import RootNavigator from "./navigators/RootNavigator";
import store from "./storeConfig";

export default class Root extends Component {
  render(){
    return(
        <Provider store={store}>
          <RootNavigator />
        </Provider>
    )
  }
};
