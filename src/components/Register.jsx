import { useContext, useEffect, useState } from "react";
import { CounterContext } from "../contexts/Counter";

function Register() {
  const { count, setCount, data, setData } = useContext(CounterContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    setData({
      ...data,
      details: {
        name: name,
        email: email,
      },
    });
  }, [name, email]);
  return (
    <div
      className="bg-no-repeat h-screen w-screen grid place-items-center"
      style={{
        backgroundImage: "url('blur-bg.svg')",
        backgroundPosition: "center",
        backgroundSize: "1000vh",
      }}
    >
      <form
        className="bg-black h-[350px] w-[500px] rounded-2xl border flex flex-col justify-center gap-4 p-8 bg-opacity-50"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold">Register</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-transparent border p-2 pl-4 rounded-xl text-gray-500 outline-none"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="bg-transparent border p-2 pl-4 rounded-xl  text-gray-500 outline-none "
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid place-items-center">
          <button
            className="border w-2/5 rounded-3xl p-2 bg-fuchsia-800 cursor-pointer text-lg transition-transform duration-300 ease-in-out 
            transform active:scale-90 shadow-[3px_1px_2px_gray]"
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
