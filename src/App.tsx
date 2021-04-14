import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "@/router";

import { registerMicroApps, start } from "qiankun";
import microConfig from "./config/micro";

function App() {
  registerMicroApps(microConfig);
  start({ prefetch: "all" });
  return (
    // <div></div>
    <Router>
      <Switch>
        {routes.map((route: any) => (
          <Route exact key={route.path} path={route.path}>
            <route.component />
          </Route>
        ))}
        <Redirect from="/*" to="/login"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
