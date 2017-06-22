import {combineReducers} from "redux";
import clientsReducer from "./clients";
import jobsReducer from "./jobs";

const rootReducer = combineReducers({
  clients : clientsReducer,
  jobs : jobsReducer
});

module.exports = rootReducer;
