import React from "react";
import "./styles.css";
import { Button, Spin } from "antd";
import "antd/dist/antd.css";
import { SameComp } from "./same-component";
import EventAsync from "./event-async";
import FlexBox from "./flex-box";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Spin spinning={false}>
        <Router>
          <ul>
            <li>
              <Link to="/event-async">事件的异步</Link>
            </li>
            <li>
              <Link to="/flex-box">Flex Box</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/event-async" component={EventAsync} />
            <Route path="/flex-box" component={FlexBox} />
          </Switch>
        </Router>
      </Spin>
    </div>
  );
}
