import Image from "next/image";
import { Button } from "../components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen p-0 m-0 justify-center items-center bg-[#1f1f1f]">
      <div id="description" className="flex flex-col m-0 p-0 leading-none">
        <h1 className="text-6xl font-bold text-white m-5 font-BIZMincho leading-none">
          <ruby>
            現音令彼<rt>あらねしむか</rt>
          </ruby>
        </h1>
        <Button<"Link"> href="/about">About</Button>
        <Button<"Link"> href="/download">Download</Button>
      </div>
      <Image
        className="leading-none m-0 p-0"
        src="/images/fullbody.png"
        alt="logo"
        width={500}
        height={0}
      />
    </main>
  );
}
