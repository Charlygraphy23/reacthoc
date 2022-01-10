import withCounter from "./hoc/withCounter";
import { CounterComponentProps } from "../types/type";

const CreateCounter = ({ count, handleState }: CounterComponentProps) => {
  return (
    <>
      <p>Demo - {count}</p>
      <button onClick={handleState}>Click +</button>
    </>
  );
};

export default withCounter(CreateCounter);
