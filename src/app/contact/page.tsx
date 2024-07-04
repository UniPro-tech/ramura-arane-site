import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left text-white p-20 bg-[#1f1f1f]">
      <h1 className="text-5xl pb-3">お問い合わせ先</h1>
      <h2 className="text-2xl py-2.5">音源に関するお問い合わせ</h2>
      <p className="py-3">
        お問い合わせは、TwitterのDMへお願いします。
        <br />
        Twitter: <a href="https://twitter.com/@ramurainoof">@ramurainoof</a>
      </p>
      <h2 className="text-2xl py-2.5">サイトに関するお問い合わせ</h2>
      <p className="py-3">
        お問い合わせは、下記メールアドレスまでお願いします。[at]を@に変えてください。
        <br />
        E-mail: webmaster[at]mail.uniproject-tech.net
      </p>
    </main>
  );
}
