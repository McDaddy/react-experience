import React, { useEffect } from "react";
import Comp from "./comp";
import { Button } from "antd";

export default () => {
  const [count, setCount] = React.useState(1);
  const [other, setOther] = React.useState(1);

  // useEffect(() => {
  // });
  console.log("render parent");
  // const func = () => {
  //   console.log("func");
  // };

  const func = React.useCallback(() => {
    console.log("func");
  }, []);

  return (
    <div>
      <div>{other}</div>
      <Comp onChange={func} count={count} />
      <Button onClick={() => setCount(count + 1)}>add count</Button>
      <Button onClick={() => setOther(other + 1)}>add other</Button>
    </div>
  );
};
