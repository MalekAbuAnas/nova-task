import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Transition from "./Transition";

export default function Hero() {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [transition, setTransition] = useState(false);
  const [transText, setTransText] = useState("");
  const [trans2Text, setTrans2Text] = useState("");

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
      <div className="hero w-full h-[100vh] items-center justify-center text-center flex flex-col gap-10 relative">
        <h1
          className="prlx text-[#fff] text-5xl md:text-8xl top-[50%] left-[50%] ease-out cursor-pointer selection:bg-c-main"
          data-speedx="0.007"
          data-speedy="0.03"
          style={{ transition: "0.45s cubic-bezier(.23,.57,.34,.99)" }}
        >
          Task <span className="text-c-sec">Man</span>
        </h1>
        <h3
          className="text-[#fff] text-base md:text-lg"
          data-speedx="0.015"
          data-speedy="0.085"
        >
          Simplify Your Schedule, Amplify Your Achievements
        </h3>
        <div className="btns w-full flex space-x-0 md:space-x-10 space-y-5 md:space-y-0 flex-col md:flex-row items-center justify-center text-center">
          <button
            data-content="Go to sign up"
            className="btn"
            onClick={() => {
              setTransText("Welcome to our family .");
              setTrans2Text("Taskman Niggas");
              setTransition(true);
            }}
          >
            Get Started
          </button>
          <button data-content="Get to Know Us" className="btn">
            About Us
          </button>
        </div>
        <Transition
          transition={transition}
          text={transText}
          text2={trans2Text}
        />
      </div>
    </>
  );
}
// el.style.transform = `translateX(calc(-60% + ${
//   -xValue * speedx
// }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
