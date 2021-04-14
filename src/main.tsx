import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import "./assets/css/normal.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/index";
// import "antd/dist/antd.less";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
