import * as React from "react";
import { Button } from "antd";

export default () => {
  const [count, setCount] = React.useState(1);
  const [count2, setCount2] = React.useState(1);
  const onClick = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    if (count > 3) {
      setCount2(state => state + 1);
    }
  }, [count]);

  console.log(count2);

  return (
    <>
      <div>
        测试useState {count} {count2}
      </div>
      <Button onClick={onClick}>click me</Button>
    </>
  );
};
