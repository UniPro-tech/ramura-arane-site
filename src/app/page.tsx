import Image from "next/image";
import { Button } from "@/components/button";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
const Niconico = dynamic(() => import("@/components/nicoVideoPlayer"));

import {
  Article as JsonLDArticle,
  WebPage as JsonLDWebPage,
  WithContext,
} from "schema-dts";

const jsonLd: WithContext<JsonLDArticle | JsonLDWebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About - 荒音の夜 - UTAU配布サイト",
  description:
    "現音令彼(あらねしむか)の公式設定についての情報です。使用する前にご一読ください。",
  url: "https://arane.uniproject.jp/about",
  inLanguage: "ja",
  image: {
    "@type": "ImageObject",
    url: "https://arane.uniproject.jp/images/title.webp",
    license: "https://arane.uniproject.jp/license",
    creditText: "ramura 2024",
    acquireLicensePage: "https://arane.uniproject.jp/license",
    creator: {
      "@type": "Person",
      name: "ramura",
    },
    copyrightNotice: "ramura",
  },
};

export const metadata: Metadata = {
  title: "荒音の夜 - 現音令彼(あらねしむか)公式サイト",
  description:
    "『現音令彼』 - らむらによるUTAU音源の公式情報サイト。公式設定、ダウンロードの方法などをお届けします！！",
  openGraph: {
    title: "荒音の夜 - 現音令彼UTAU音源公式サイト",
    description:
      "『現音令彼』 - らむらによるUTAU音源の公式情報サイト。公式設定、ダウンロードの方法などをお届けします！！",
    url: "https://arane.uniproject.jp",
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
    canonical: "https://arane.uniproject.jp/",
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
      <main className="flex flex-col min-h-screen bg-[#111111]">
        <section className="relative h-screen w-full overflow-hidden px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-black animate-gradient-x" />
          <div className="relative flex flex-col md:flex-row items-center px-4 md:px-20 h-full max-w-7xl mx-auto h-screen justify-center">
            <div className="flex flex-col space-y-8 z-10 w-full md:w-1/2">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white font-BIZMincho leading-none animate-fade-in text-center md:text-left">
                <ruby>
                  現音令彼
                  <rt className="text-sm md:text-lg text-purple-300">
                    あらねしむか
                  </rt>
                </ruby>
              </h1>
              <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-sm mx-auto md:mx-0">
                <Button<"Link">
                  href="/about"
                  className="text-sm md:text-base bg-purple-600/80 hover:bg-purple-500 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 px-3 py-2"
                >
                  About
                </Button>
                <Button<"Link">
                  href="/download"
                  className="text-sm md:text-base bg-blue-600/80 hover:bg-blue-500 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 px-3 py-2"
                >
                  Download
                </Button>
                <Button<"Link">
                  href="/license"
                  className="text-sm md:text-base bg-indigo-600/80 hover:bg-indigo-500 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 px-3 py-2"
                >
                  License
                </Button>
                <Button<"Link">
                  href="/contact"
                  className="text-sm md:text-base bg-violet-600/80 hover:bg-violet-500 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 px-3 py-2"
                >
                  Contacts
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
        <section className="py-20 bg-black/80">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-white mb-12 font-BIZMincho">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                配布動画
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="transform hover:scale-105 transition-all duration-300">
                <Niconico id="sm43893594" width={640} height={360} />
              </div>
              <div className="transform hover:scale-105 transition-all duration-300">
                <Niconico id="sm44014847" width={640} height={360} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
