import * as React from "react";
import { Button } from "antd";

export default () => {
  const onClick = e => {
    console.log(e.target.innerText);
    // 必须在这里用persist，否则下面的异步代码就会报错
    e.persist();
    setTimeout(() => {
      console.log("inner text in async", e.target.innerText);
    }, 300);
  };
  return (
    <>
      <div>react的event，如果在异步中访问会有问题</div>
      <Button onClick={onClick}>click me</Button>
    </>
  );
};
