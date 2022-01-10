import React, { useState } from "react";
import type { ComponentType } from "react";
import { CounterComponentProps } from "../../types/type";

const withCounter = (OldComponent: ComponentType<CounterComponentProps>) => {
  return () => {
    // returning new compoenent with its state
    const [state, setState] = useState(0);

    const handleState = () => {
      setState((prevState) => prevState + 1);
    };

    return <OldComponent count={state} handleState={handleState} />;
  };
};

export default withCounter;
