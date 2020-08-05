import * as React from "react";
import { Button } from "antd";

export default () => {
  const [count, setCount] = React.useState(1);
  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>测试useState {count}</div>
      <Button onClick={onClick}>click me</Button>
    </>
  );
};
