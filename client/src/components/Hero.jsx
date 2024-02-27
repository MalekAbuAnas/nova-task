import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="hero w-full h-[100vh] items-center justify-center text-center flex flex-col space-y-12">
        <h1 className="text-[#fff] text-[100px]">
          Task <span className="text-c-sec">Man</span>
        </h1>
        <h3 className="text-[#fff]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
          veritatis.
        </h3>
        <div className="btns w-full h-fit space-x-10">
          <button data-content="For Easier Life" className="btn">
            Get Started
          </button>
          <button data-content="Get to Know Us" className="btn">
            About Us
          </button>
        </div>
      </div>
    </>
  );
}
