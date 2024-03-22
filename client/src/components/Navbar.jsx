export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-10 md:px-40 absolute z-[10] ">
      <a href="/">
        <h1 className="text-lg text-[#fff]">Task Man</h1>
      </a>
      <ul className="space-x-5 md:space-x-16 text-sm md:text-base">
        <a href="#" className=" text-[#fff] duration-500 hover:text-c-sec">
          Login
        </a>
        <a href="#" className=" text-[#fff] duration-500 hover:text-c-sec">
          Sign up
        </a>
      </ul>
    </nav>
  );
}
