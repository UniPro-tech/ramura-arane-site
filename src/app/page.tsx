import Image from "next/image";
import { Button } from "@/components/button";
import type { Metadata } from "next";
import Niconico from "@/components/nicoVideoPlayer";

import {
  Article as JsonLDArticle,
  WebPage as JsonLDWebPage,
  WithContext,
} from 'schema-dts';

const jsonLd: WithContext<JsonLDArticle | JsonLDWebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'About - 荒音の夜 - UTAU配布サイト',
  description: '現音令彼(あらねしむか)の公式設定についての情報です。使用する前にご一読ください。',
  url: 'https://arane.uniproject-tech.net/about',
  inLanguage: 'ja',
  image: {
    '@type': 'ImageObject',
    url: 'https://arane.uniproject-tech.net/images/title.webp',
    license: "https://arane.uniproject-tech.net/license",
    creditText: "ramura 2024",
    acquireLicensePage: "https://arane.uniproject-tech.net/license",
    creator: {
      '@type': "Person",
      name: "ramura",
    },
    copyrightNotice: "ramura"
  },
};

export const metadata: Metadata = {
  title: "荒音の夜 - 現音令彼(あらねしむか)公式サイト",
  description:
    "『現音令彼』 - らむらによるUTAU音源の公式情報サイト。公式設定、ダウンロードの方法などをお届けします！！",
  openGraph: {
    title: '荒音の夜 - 現音令彼UTAU音源公式サイト',
    description: '『現音令彼』 - らむらによるUTAU音源の公式情報サイト。公式設定、ダウンロードの方法などをお届けします！！',
    url: 'https://arane.uniproject-tech.net',
    siteName: '荒音の夜 - 現音令彼(あらねしむか)公式サイト',
    images: [
      {
        url: 'https://arane.uniproject-tech.net/images/title.webp',
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
    <>
      <script
        key="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col min-h-screen p-0 m-0 space-y-4 justify-center items-center w-full bg-[#1f1f1f]">
        <section className="m-0 p-0 flex justify-center items-center w-full flex-grow bg-custom-gradient">
          <div id="description" className="flex flex-col m-0 p-9 leading-none">
            <h1 className="text-7xl font-bold text-white m-0 font-BIZMincho leading-none">
              <ruby>
                現音令彼<rt>あらねしむか</rt>
              </ruby>
            </h1>
            <Button<"Link"> href="/about">About</Button>
            <Button<"Link"> href="/download">Download</Button>
            <Button<"Link"> href="/license">License</Button>
            <Button<"Link"> href="/contact">Contacts</Button>
          </div>
          <Image
            className="leading-none m-0 p-0"
            src="/images/fullbody.webp"
            alt="logo"
            width={500}
            height={0}
          />
        </section>
        <section className="flex-grow flex flex-col space-y-3 m-2">
          <h2 className="text-4xl font-bold text-white m-0 leading-none">
            <ruby>
              配布動画
            </ruby>
          </h2>
          <div className="flex flex-row space-x-2">
            <Niconico id="sm43893594" width={640} height={360}></Niconico>
            <Niconico id="sm44014847" width={640} height={360}></Niconico>
          </div>
        </section>
      </main>
    </>
  );
}
