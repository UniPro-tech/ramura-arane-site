//<a href="download?file=foo.webp">Download</a>
import Image from "next/image";
import { Button } from "@/components/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download - 荒音の夜 - UTAU配布サイト",
  description:
    "UTAU音源「現音令彼(あらねしむか)」のダウンロードはこちらから。ダウンロード前に、利用規約をご一読ください。",
  openGraph: {
    title: "Download - 荒音の夜 - UTAU配布サイト",
    description:
      "UTAU音源「現音令彼(あらねしむか)」のダウンロードはこちらから。ダウンロード前に、利用規約をご一読ください。",
    url: "https://arane.uniproject.jp/download",
    siteName: "荒音の夜 - 現音令彼(あらねしむか)公式サイト",
    images: [
      {
        url: "https://arane.uniproject.jp/images/title.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://arane.uniproject.jp/download",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen p-0 m-0 justify-center items-center bg-custom-gradient">
      <section className="relative min-h-screen w-full overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-black animate-gradient-x" />
        <div className="relative flex flex-col md:flex-row items-center px-4 md:px-20 h-full max-w-7xl mx-auto h-screen justify-center my-10">
          <div className="flex flex-col space-y-8 z-10 w-full md:w-1/2">
            <h1 className="text-6xl font-bold text-center md:text-left">Download</h1>
            <p className="text-lg leading-8 p-6 bg-white/10 rounded-lg shadow-lg backdrop-blur-md">
              ダウンロードする前に、一度、利用規約をお読みください。
              <br />
              なお、特殊音源に関しては、単体では使用できません。
              <br />
              特殊音素のエイリアスはEです。
            </p>
            <br />
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-sm mx-auto md:mx-0">
              <Button<"Link">
                href="/download/dl-endpoint?file=tandokuon.zip"
                className="text-sm md:text-base bg-purple-600/80 hover:bg-purple-500 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 px-3 py-2"
              >
                単独音
              </Button>
              <Button<"Link">
                href="/download/dl-endpoint?file=renzokuon.zip"
                className="text-sm md:text-base bg-blue-600/80 hover:bg-blue-500 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 px-3 py-2"
              >
                連続音
              </Button>
              <Button<"Link">
                href="/download/dl-endpoint?file=tougou.zip"
                className="text-sm md:text-base bg-indigo-600/80 hover:bg-indigo-500 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 px-3 py-2"
              >
                統合音源
              </Button>
              <Button<"Link">
                href="/download/dl-endpoint?file=tokushu.zip"
                className="text-sm md:text-base bg-violet-600/80 hover:bg-violet-500 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 px-3 py-2"
              >
                特殊音源
              </Button>
            </div>
          </div>
          <div className="mt-8 md:mt-0 w-3/4 md:w-1/2 relative z-10">
            <Image
              className="transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              src="/images/fullbody.webp"
              alt="現音令彼"
              priority={true}
              width={600}
              height={800}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
