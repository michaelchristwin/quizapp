"use client";
import { MoonLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex justify-center items-center h-full mt-[20%]">
      <MoonLoader color="#0000FF" size={100} />
    </div>
  );
}

export default Loading;
