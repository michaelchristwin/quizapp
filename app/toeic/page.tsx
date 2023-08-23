import getData from "@/hooks/fetchData";
import dynamic from "next/dynamic";
const Question = dynamic(() => import("../../components/Question"), {
  ssr: false,
});
export const revalidate = 0;

async function Test() {
  const Data = await getData();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Question Data={Data} />
    </div>
  );
}

export default Test;
