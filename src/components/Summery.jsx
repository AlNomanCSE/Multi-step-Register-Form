import { useContext } from "react";

import { CounterContext } from "../contexts/Counter";
const Summery = () => {
  const { data } = useContext(CounterContext);
  console.log(data);
  return (
    <div
      className="bg-no-repeat h-screen w-screen grid place-items-center"
      style={{
        backgroundImage: "url('blur-bg.svg')",
        backgroundPosition: "center",
        backgroundSize: "1000vh",
      }}
    >
      <div className="bg-black h-[350px] w-[500px] rounded-2xl border flex flex-col justify-center gap-4 p-8 bg-opacity-50">
        <div>
          <h2 className="text-2xl font-bold">Summery</h2>
          <div className="p-4">
            <p>
              <span>Name : {data.details.name}</span>
            </p>
            <p>
              <span>Email : {data.details.email}</span>
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Topics:</h2>
          <div className="p-4">
            {data.topics.map((topic, index) => (
              <p key={index}>{topic}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
