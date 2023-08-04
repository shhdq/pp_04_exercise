import Image from "next/image";

import Top from "@/components/Top";
import Middle from "@/components/Middle";
import Bottom from "@/components/Bottom";

export default function Home() {
  return (
    <main className="bg-[#202124] text-[#bdc1c6] flex flex-col justify-between h-screen items-center">
      <Top />
      <Middle />
      <Bottom />
    </main>
  );
}
