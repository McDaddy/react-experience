import * as React from "react";
import { useLocation } from "react-router-dom";
import { useEffectOnce } from "react-use";

export const SameComp = ({ name }) => {
  const location = useLocation();

  useEffectOnce(() => {
    console.log("on mount", location.pathname);
    return () => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("on unmount", location.pathname);
        }, 1000);
      });
    };
  });

  return <div>Page {location.pathname}</div>;
};
