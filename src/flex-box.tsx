import * as React from "react";
import { Button } from "antd";
import "./flex-box.css";

export default () => {
  return (
    <>
      <div className="flex-box">
        <div className="flex-item">1</div>
        <div className="flex-item">2</div>
        <div className="flex-item">3</div>
        <div className="flex-item">4</div>
        <div className="flex-item">5</div>
        <div className="flex-item">6</div>
        <div className="flex-item">7</div>
        <div className="flex-item">8</div>
        <div className="flex-item">9</div>
        <div className="flex-item">10</div>
      </div>
      <span>下一个元素</span>
    </>
  );
};
