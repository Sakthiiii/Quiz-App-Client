import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";
import {BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
 
    <Provider store={store}>
      <App />
    </Provider>,


  document.getElementById("root")
);
