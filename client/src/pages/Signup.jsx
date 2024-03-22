export default function Signup() {
  return (
    <div className="w-full h-[100vh] sign-up items-center justify-center text-center flex">
      <div className="w-2/3 bg-[#fff] rounded-xl h-fit py-16 px-10 flex">
        <div className="w-1/2 items-center justify-center text-left space-y-7">
          <h1 className="text-[#000] text-5xl font-semibold">
            Task <span className="text-c-sec">Man</span>
          </h1>
          <h1 className="text-[#000] text-4xl font-medium mb-10">Sign Up</h1>
          <h3 className="text-[#000] text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, soluta.
          </h3>
        </div>
        <div className="w-1/2 items-center justify-center mx-20">
          <form className="w-full h-full items-center justify-center flex-col space-y-8 text-left">
            <input
              type="text"
              placeholder="Enter username"
              className="border-b-[2px] border-[#000] placeholder:text-[#000] placeholder:font-light w-full h-[50px] "
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b-[2px] border-[#000] placeholder:text-[#000] placeholder:font-light w-full h-[50px] "
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border-b-[2px] border-[#000] placeholder:text-[#000] placeholder:font-light w-full h-[50px] "
              required
            />
            <input
              type="password"
              placeholder="Re-enter your password"
              className="border-b-[2px] border-[#000] placeholder:text-[#000] placeholder:font-light w-full h-[50px] "
              required
            />
            <div className="flex w-full h-fit space-x-5">
              <input type="checkbox" required />
              <h1>
                I agree to the{" "}
                <a href="/" className="duration-500 hover:text-c-sec">
                  privacy policies
                </a>
              </h1>
            </div>
            <div className="flex w-full h-fit space-x-5">
              <input
                type="submit"
                className="bg-c-sec rounded-full w-fit h-fit text-[#fff] px-10 py-3 cursor-pointer border-[1px] border-solid border-[#fff] duration-500 hover:bg-[#fff] hover:text-c-sec hover:border-c-sec"
              />
              <button className="bg-[#fff] rounded-full w-fit h-fit text-c-sec px-10 py-3 cursor-pointer border-[1px] border-solid border-c-sec duration-500 hover:bg-c-sec hover:text-[#fff] hover:border-[#fff]">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
