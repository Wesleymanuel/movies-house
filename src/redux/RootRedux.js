import { combineReducers } from "redux";
import userRedux from "./reducers/User";

const rootRedux = combineReducers({userRedux})

export default rootRedux