import getData from "@/hooks/fetchData";
import dynamic from "next/dynamic";
const Question = dynamic(() => import("../../components/Question"), {
  ssr: false,
});

async function Home() {
  const Data = await getData();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Question Data={Data} />
    </div>
  );
}

export default Home;
