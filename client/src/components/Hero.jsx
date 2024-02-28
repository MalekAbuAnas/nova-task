import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Hero() {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  useEffect(() => {
    const parallax_el = document.querySelectorAll(".prlx");

    document.addEventListener("mousemove", (e) => {
      setXValue(e.clientX - window.innerWidth / 2);
      setYValue(e.clientY - window.innerHeight / 2);

      parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;

        el.style.transform = `translateX(${xValue * speedx}%) translateY(${
          yValue * speedy
        }%)`;
      });
    });
  });

  return (
    <>
      <Navbar />
      <div className="hero w-full h-[100vh] items-center justify-center text-center flex flex-col space-y-12">
        <h1
          className="prlx text-[#fff] text-[130px] top-[50%] left-[50%] duration-500 ease-out cursor-pointer selection:bg-c-main"
          data-speedx="0.025"
          data-speedy="0.085"
        >
          Task <span className="text-c-sec">Man</span>
        </h1>
        <h3 className="text-[#fff]" data-speedx="0.025" data-speedy="0.085">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
          veritatis.
        </h3>
        <div className="btns w-full h-fit space-x-10 prlx top-[50%] left-[50%]">
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
// el.style.transform = `translateX(calc(-60% + ${
//   -xValue * speedx
// }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
