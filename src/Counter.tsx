import { useState } from "react";
import moment from "moment";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{moment().format("HH:mm:ss")}</p>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </>
  );
}

export default Counter;
