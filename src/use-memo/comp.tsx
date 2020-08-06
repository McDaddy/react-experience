import React from "react";
import { isEqual } from "lodash";

export default React.memo(
  props => {
    const { onChange, count } = props;

    console.log("render comp");

    return <div>comp</div>;
  },
  (prev, next) => {
    console.log(prev.count);
    console.log(next.count);

    return isEqual(prev.count, next.count);
  }
);
