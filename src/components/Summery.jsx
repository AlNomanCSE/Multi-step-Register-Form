const Summery = () => {
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
          <p>
            <span>Name:</span>
          </p>
          <p>
            <span>Email:</span>
          </p>
        </div>
        <div>
          <h2>Topics:</h2>
          <p>jhbda</p>
          <p>jhbda adad d ad d</p>
        </div>
      </div>
    </div>
  );
};

export default Summery;
