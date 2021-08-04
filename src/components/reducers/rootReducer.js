import { combineReducers } from "redux";
import homePageReducer from "./homePageReducer";
import apartmentReducer from "./apartmentReducer";

export default combineReducers({ homePageReducer, apartmentReducer });
