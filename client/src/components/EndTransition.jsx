import React from "react";

export default function EndTransition({ transition }) {
  return (
    <div
      className={`absolute top-0 right-0 w-0 duration-[.8s] h-full bg-[#fff] ${
        transition ? "pr-[100%]" : "pr-0"
      } ${
        transition ? "rounded-l-none" : "rounded-l-full"
      } z-[11] items-center flex overflow-hidden text-nowrap`}
    >
      <div className="left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] absolute space-y-10">
        <h1 className="text-6xl text-[#000]">Task Man</h1>
        <h3 className="text-3xl text-[#000]">
          Enhance you productivity, Manage your life
        </h3>
      </div>
    </div>
  );
}
