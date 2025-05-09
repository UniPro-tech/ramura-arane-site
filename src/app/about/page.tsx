import Image from "next/image";
import { Metadata } from "next";
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
  isPartOf: {
    "@type": "WebSite",
    name: "荒音の夜 - 現音令彼(あらねしむか)公式サイト",
    url: "https://arane.uniproject.jp",
  },
  image: {
    "@type": "ImageObject",
    url: "https://arane.uniproject.jp/images/title.webp",
    license: "https://arane.uniproject.jp/license",
    acquireLicensePage: "https://arane.uniproject.jp/license",
    creditText: "ramura 2024",
    creator: {
      "@type": "Person",
      name: "ramura",
    },
    copyrightNotice: "ramura",
  },
};

export const metadata: Metadata = {
  title: "About - 荒音の夜 - UTAU配布サイト",
  description:
    "現音令彼(あらねしむか)の公式設定についての情報です。使用する前にご一読ください。",
  openGraph: {
    title: "About - 荒音の夜 - UTAU配布サイト",
    description:
      "現音令彼(あらねしむか)の公式設定についての情報です。使用する前にご一読ください。",
    url: "https://arane.uniproject.jp/about",
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
    canonical: "https://arane.uniproject.jp/about",
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
      <main className="flex min-h-screen items-center justify-center text-white bg-custom-gradient">
        <section className="relative h-screen w-full overflow-hidden px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-black animate-gradient-x" />
          <div className="relative flex flex-col md:flex-row items-center px-4 md:px-20 h-full max-w-7xl mx-auto h-screen justify-center">
            <div className="flex flex-col space-y-8 z-10 w-full md:w-1/2">
              <h1 className="text-6xl font-bold text-center md:text-left">
                About
              </h1>
              <ul className="text-lg leading-8 p-6 bg-white/10 rounded-lg shadow-lg backdrop-blur-md">
                <li>
                  <strong>名前:</strong>{" "}
                  <ruby>
                    現音令彼<rt>あらねしむか</rt>
                  </ruby>
                </li>
                <li>
                  <strong>英語表記:</strong> AraneShimuka
                </li>
                <li>
                  <strong>性別:</strong> 不明
                </li>
                <li>
                  <strong>声別:</strong> 女性
                </li>
                <li>
                  <strong>種族:</strong> 人外
                </li>
                <li>
                  <strong>年齢:</strong> ？(少なくとも人間を超えてる)
                </li>
                <li>
                  <strong>身長:</strong> 173.5(変更可)
                </li>
                <li>
                  <strong>誕生日:</strong> 7月8日
                </li>
                <li>
                  <strong>持ち物:</strong> ドライフラワー
                </li>
                <li>
                  <strong>趣味:</strong> 猫吸い
                </li>
                <li>
                  <strong>好きなもの:</strong> 猫(特に長毛種)
                </li>
                <li>
                  <strong>苦手なもの:</strong> 湿度と花粉(花粉症)
                </li>
                <li>
                  <strong>一人称:</strong> 私
                </li>
                <li>
                  <strong>二人称:</strong> 君、あなた
                </li>
                <li>
                  <strong>三人称:</strong> 君たち、あなた達
                </li>
              </ul>
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
    </>
  );
}
