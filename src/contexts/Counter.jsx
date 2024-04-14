import { useState } from "react";
import { createContext } from "react";
export const CounterContext = createContext(null);

export function CounterProvider(props) {
  const [count, setCount] = useState(1);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
}