import bgImage from "../../../assets/images/bg-cart-large.jpg";

const Background = () => {
  return (
    <div className="relative h-[100vh]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500 via-purple-300 to-fuchsia-500 transition-opacity duration-1000 ease-in-out opacity-100 hover:opacity-0"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-violet-500 via-purple-300 to-fuchsia-500 transition-opacity duration-1000 ease-in-out opacity-0 hover:opacity-100"></div>
      {/* <div className="absolute inset-0 -z-10">
        <img
          src={bgImage}
          alt="background"
          className="h-full w-full object-cover"
        />
      </div> */}
      {/* <div
        className={`absolute inset-0 bg-cover bg-center bg-[url('${bgImage}')]`}></div> */}
    </div>
  );
};

export default Background;
