import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contacts - 荒音の夜 - UTAU配布サイト",
  description: "音源、サイトに関するお問い合わせ先です。",
  openGraph: {
    title: "Contact - 荒音の夜 - UTAU配布サイト",
    description: "音源、サイトに関するお問い合わせ先です。",
    url: "https://arane.uniproject.jp/contact",
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
    canonical: "https://arane.uniproject.jp/contact",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left text-white bg-[#1f1f1f] bg-custom-gradient">
      <section className="relative min-h-screen w-full overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-black animate-gradient-x" />
        <div className="relative flex flex-col md:flex-row items-center px-4 md:px-20 h-full max-w-7xl mx-auto h-screen justify-center m-20">
          <div className="flex flex-col space-y-8 z-10 w-full md:w-1/2 backdrop-blur-m rounded-lg shadow-lg p-6 bg-white/10">
            <h1 className="text-5xl pb-3">お問い合わせ先</h1>
            <h2 className="text-2xl py-2.5">音源に関するお問い合わせ</h2>
            <p className="py-3">
              お問い合わせは、TwitterのDMへお願いします。
              <br />
              Twitter: <a href="https://twitter.com/@ramura0708">@ramura0708</a>
            </p>
            <h2 className="text-2xl py-2.5">サイトに関するお問い合わせ</h2>
            <p className="py-3">
              お問い合わせは、下記メールアドレスまでお願いします。
              <br />
              [at]を@に変えてください。
              <br />
              E-mail: webmaster[at]uniproject.jp
            </p>
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
