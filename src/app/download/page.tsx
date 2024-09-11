//<a href="download?file=foo.png">Download</a>
import Image from "next/image";
import { Button } from "@/components/button-legacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download - 荒音の夜 - UTAU配布サイト",
  description:
    "UTAU音源「現音令彼(あらねしむか)」のダウンロードはこちらから。ダウンロード前に、利用規約をご一読ください。",
  openGraph: {
    title: 'Download - 荒音の夜 - UTAU配布サイト',
    description: 'UTAU音源「現音令彼(あらねしむか)」のダウンロードはこちらから。ダウンロード前に、利用規約をご一読ください。',
    url: 'https://arane.uniproject-tech.net/download',
    siteName: '荒音の夜 - 現音令彼(あらねしむか)公式サイト',
    images: [
      {
        url: 'https://arane.uniproject-tech.net/images/title.png',
        width: 800,
        height: 600,
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen p-0 m-0 justify-center items-center bg-[#1f1f1f] bg-[url('../images/wipe.png')]">
      <div>
        <h1 className="text-4xl text-white font-bold">Download</h1>
        <p className="text-white">ダウンロードする前に、一度、利用規約をお読みください。
        </p>
        <br />
        <div className="flex">
          <Button<"Link">
            href="/download/dl-endpoint?file=tandokuon.zip"
            className="mt-4"
          >
            単独音(4音階)
          </Button>
          <Button<"Link">
            href="/download/dl-endpoint?file=renzokuon.zip"
            className="mt-4"
          >
            連続音(1音階)
          </Button>
        </div>
        <div className="flex">
          <Button<"Link">
            href="/download/dl-endpoint?file=tougou.zip"
            className="mt-4"
          >
            統合音源(連続1音階/単独音4音階)
          </Button>
          <Button<"Link">
            href="/download/dl-endpoint?file=tokushu.zip"
            className="mt-4"
          >
            特殊音源
          </Button>
        </div>

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
