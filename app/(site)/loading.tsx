"use client";

import { HashLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex justify-center items-center">
      <HashLoader color="#0000FF" size={100} />
    </div>
  );
}

export default Loading;
