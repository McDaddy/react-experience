import React from "react";
import "./styles.css";
import { Button, Spin } from "antd";
import "antd/dist/antd.css";
import { SameComp } from "./same-component";
import EventAsync from "./event-async";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

// const Child = ({ route }) => {
//   useEffectOnce(() => {
//     console.log("mount child");
//     return () => {
//       console.log("unmount child");
//     };
//   });
//   return (
//     <div>
//       <h2>Child</h2>
//       {/* child routes won't render without this */}
//       {renderRoutes(route.routes, {
//         someProp: "these extra props are optional"
//       })}
//     </div>
//   );
// };

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
              <Link to="/b">B Page</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/event-async" component={EventAsync} />
            <Route path="/b" component={() => SameComp({ name: "b" })} />
          </Switch>
        </Router>
      </Spin>
    </div>
  );
}