import {combineReducers} from "redux";
import clientsReducer from "./clients";
import jobsReducer from "./jobs";
import employersReducer from "./employers";
import employeesReducer from "./employees";
import tasksReducer from "./tasks";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
  clients : clientsReducer,
  jobs : jobsReducer,
  employers : employersReducer,
  employees : employeesReducer,
  tasks : tasksReducer,
  comments: commentsReducer
});

module.exports = rootReducer;
