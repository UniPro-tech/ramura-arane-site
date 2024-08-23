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
        <p className="text-white">ダウンロードする前に、一度、利用規約をお読みください。</p>
        <br />
        <Button<"Link">
          href="/download/dl-endpoint?file=AraneShimuka-UTAU.zip"
          className="mt-4"
        >
          UTAU音源
        </Button>
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
