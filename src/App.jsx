import Main from "./layouts/Main";

function App() {
  return (
    <main className="relative">
      <Main />
      <ul className="steps absolute top-[35rem] left-[50%] translate-x-[-50%]">
        <li className="step step-neutral">Register</li>
        <li className="step">Topics</li>
        <li className="step step-accent">Summery</li>
      </ul>
    </main>
  );
}

export default App;
