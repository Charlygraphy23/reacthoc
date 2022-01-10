import React from "react";
import withCounter from "./hoc/withCounter";
import { CounterComponentProps } from "../types/type";

const HoverComponent = (
  props: React.PropsWithChildren<CounterComponentProps>
) => {
  const { count, handleState } = props;

  return <h1 onMouseMove={handleState}>Hovered Text {count}</h1>;
};

export default withCounter(HoverComponent);
