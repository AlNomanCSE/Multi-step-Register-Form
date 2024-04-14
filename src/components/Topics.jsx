import { CounterContext } from "../contexts/Counter";
import { useContext, useState } from "react";
const Topics = () => {
  const counterContext = useContext(CounterContext);
  const [software, setSoftware] = useState("bg-slate-700");
  const [user, setUser] = useState("bg-slate-700");
  const [grapic, setGrapic] = useState("bg-slate-700");
  return (
    <div
      className="bg-no-repeat h-screen w-screen grid place-items-center"
      style={{
        backgroundImage: "url('blur-bg.svg')",
        backgroundPosition: "center",
        backgroundSize: "1000vh",
      }}
    >
      <form className="bg-black h-[350px] w-[500px] rounded-2xl border flex flex-col justify-center gap-4 p-8 bg-opacity-50">
        <h2 className="text-2xl font-bold">
          Which topics you are interested in?
        </h2>
        <div className="text-center flex flex-col gap-4">
          <p
            className={`border rounded-md p-2 ${software} font-bold cursor-pointer `}
            onClick={() => {
              setSoftware("bg-purple-600");
              localStorage.setItem("detals", JSON.stringify({ ..."detlas" }));
            }}
          >
            Software Development
          </p>
          <p
            className={`border rounded-md p-2 ${user}  font-bold cursor-pointer`}
            onClick={() => setUser("bg-purple-600")}
          >
            User Experience
          </p>
          <p
            className={`border rounded-md p-2 ${grapic}  font-bold cursor-pointer`}
            onClick={() => setGrapic("bg-purple-600")}
          >
            Grapic Design
          </p>
        </div>
        <div className="grid place-items-center">
          <button
            className="border w-2/5 rounded-3xl p-2 bg-fuchsia-800 cursor-pointer text-lg transition-transform duration-300 ease-in-out 
            transform active:scale-90 shadow-[3px_1px_2px_gray]"
            onClick={() => counterContext.setCount(counterContext.count + 1)}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Topics;
