import { useContext } from "react";
import Register from "./components/Register";
import Topics from "./components/Topics";
import { CounterContext } from "./contexts/Counter";
import Summery from "./components/Summery";

function App() {
  const counterContext = useContext(CounterContext);
  return (
    <main className="relative">
      {counterContext.count == 1 && <Register />}
      {counterContext.count == 2 && <Topics />}
      {counterContext.count == 3 && <Summery />}
      <ul className="steps absolute top-[35rem] left-[50%] translate-x-[-50%]">
        <li
          className={`step ${counterContext.count == 1 ? "step-success" : ""}`}
        >
          Register
        </li>
        <li
          className={`step ${counterContext.count == 2 ? "step-success" : ""}`}
        >
          Topics
        </li>
        <li
          className={`step ${counterContext.count == 3 ? "step-success" : ""}`}
        >
          Summery
        </li>
      </ul>
    </main>
  );
}

export default App;
