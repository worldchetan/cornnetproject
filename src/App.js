import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import WorkContainer from "./components/WorkContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AddProduct from "./components/AddProduct";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import rootStore from "./reducers/store";
import Navbar from "./components/Navbar";
const store = createStore(rootStore, applyMiddleware(thunk));
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container h-auto flex h-64 content-wrapper w-100 justify-between">
          <Navbar />
          <Switch>
            <Route path="/" exact component={WorkContainer} />
            <Route path="/liveportal" component={AddProduct} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
