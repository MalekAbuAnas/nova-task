export default function Transition({ transition, text, text2 }) {
  return (
    <div
      className={`absolute top-0 left-0 w-0 duration-[.8s] h-full bg-[#fff] ${
        transition ? "pr-[100%]" : "pr-0"
      } ${
        transition ? "rounded-r-none" : "rounded-r-full"
      } z-[11] items-center flex overflow-hidden text-nowrap`}
    >
      <div className="left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] absolute space-y-10">
        <h1 className="text-5xl text-[#000]">{text}</h1>
        <h3 className="text-3xl text-[#000]">{text2}</h3>
      </div>
    </div>
  );
}
{
  /*  */
}
