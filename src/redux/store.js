// applyMiddleware & compose for "redux-chrome-devtool" extension
import { createStore, applyMiddleware, compose } from "redux";
// redux-thunk
import thunk from "redux-thunk";
// allReducers
import AllReducers from "./AllReducers";

// "redux-chrome-devtool" extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// composeEnhancers(applyMiddleware()), for "redux-chrome-devtool" extension
const store = createStore(AllReducers, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
