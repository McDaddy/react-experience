import * as React from "react";
import { Button } from "antd";

export default () => {
  // const [count, setCount] = React.useState(1);
  // const [count2, setCount2] = React.useState(1);
  const [obj, setObj] = React.useState({ a: 1 });
  // const onClick = () => {
  //   setCount(count + 1);
  // };

  // React.useEffect(() => {
  //   if (count > 3) {
  //     setCount2((state) => state + 1);
  //   }
  // }, [count]);

  // console.log(count2);

  React.useEffect(() => {
    setObj((state) => ({ ...state, b: 2 }));
    setObj((state) => ({ ...state, b: 3 }));
    setObj((state) => ({ ...state, c: 3 }));
    setObj((state) => ({ ...state, d: 3 }));
    setObj((state) => ({ ...state, f: 3 }));
    setObj((state) => ({ ...state, f: 3 }));
    setObj((state) => ({ ...state, f: 3 }));
  }, []);

  console.log(obj);

  return (
    <>
      {/* <div>
        测试useState {count} {count2}
      </div>
      <Button onClick={onClick}>click me</Button> */}
      <div>测试useState Obj</div>
    </>
  );
};
