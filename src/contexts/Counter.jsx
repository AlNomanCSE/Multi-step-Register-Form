import { useState } from "react";
import { createContext } from "react";
export const CounterContext = createContext(null);

export function CounterProvider(props) {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({ details: {}, topics: [] });
  return (
    <CounterContext.Provider value={{ count, setCount, data, setData }}>
      {props.children}
    </CounterContext.Provider>
  );
}
