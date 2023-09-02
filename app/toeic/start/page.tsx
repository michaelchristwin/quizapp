import getData from "@/hooks/fetchData";
import dynamic from "next/dynamic";
const Question = dynamic(() => import("../../../components/Question"), {
  ssr: false,
});
const Countdown = dynamic(() => import("../../../components/Countdown"), {
  ssr: false,
});
export const revalidate = 0;

async function Test() {
  const Data = await getData();
  return (
    <div className="flex mx-auto justify-center w-full h-full relative">
      <Countdown />
      <Question Data={Data} />
    </div>
  );
}

export default Test;
