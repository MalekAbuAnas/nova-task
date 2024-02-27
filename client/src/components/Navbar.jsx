export default function Navbar() {
  return (
    <nav className="container w-full mx-auto flex items-center justify-between py-8 px-40 absolute z-[9999]">
      <a href="/">
        <h1 className="text-lg text-[#fff]">Task Man</h1>
      </a>
      <ul className="space-x-16">
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
