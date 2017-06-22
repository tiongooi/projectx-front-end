import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

//delete this line and uncomment following
export default const store = "store";
// export default const store =
// createStore(rootReducer, applyMiddleware(thunk));
