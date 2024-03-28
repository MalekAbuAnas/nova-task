import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { EndTransition } from "../components";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [transition, setTransition] = useState(true);

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // Handle success
      const { username, email } = response.data.user;
      navigator("/home", { state: { username, email } });

      // You can redirect user or perform any other action here
      e.preventDefault();
    } catch (error) {
      console.log("error");
    }
    e.preventDefault();
  };

  useEffect(() => {
    setTimeout(() => {
      setTransition(false);
    }, 500);
  }, []);
  return (
    <div className="w-full h-[100vh] sign-up items-center justify-center text-center flex">
      <div className="w-2/3 bg-[#fff] rounded-xl h-fit py-16 px-10 flex">
        <div className="w-1/2 items-center justify-center text-left space-y-7">
          <h1 className="text-[#000] text-5xl font-semibold">
            Task <span className="text-c-sec">Man</span>
          </h1>
          <h1 className="text-[#000] text-4xl font-medium mb-10">Sign In</h1>
          <h3 className="text-[#000] text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, soluta.
          </h3>
        </div>
        <div className="w-1/2 items-center justify-center mx-20">
          <form
            className="w-full h-full items-center justify-center flex-col space-y-8 text-left"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your registerd email"
              name="email"
              className="border-b-[1px] border-[#000] placeholder:text-[#000] placeholder:font-light w-full h-[50px] "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="border-b-[1px] border-[#000] placeholder:text-[#000] placeholder:font-light w-full h-[50px] "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />

            <div className="flex w-full h-fit space-x-5">
              <button
                type="submit"
                className="bg-c-sec rounded-full w-fit h-fit text-[#fff] px-10 py-3 cursor-pointer border-[1px] border-solid border-[#fff] duration-500 hover:bg-[#fff] hover:text-c-sec hover:border-c-sec"
              >
                Sign in
              </button>
              <Link to={"/"}>
                <button className="bg-[#fff] rounded-full w-fit h-fit text-c-sec px-10 py-3 cursor-pointer border-[1px] border-solid border-c-sec duration-500 hover:bg-c-sec hover:text-[#fff] hover:border-[#fff]">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <EndTransition transition={transition} />
    </div>
  );
}
