import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension" 
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  users: userReducer
});

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));