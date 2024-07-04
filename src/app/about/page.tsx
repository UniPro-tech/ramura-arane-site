import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1f1f1f] text-white bg-[url('../images/wipe.png')]">
      <div id="about-desc" className="m-9 p-9">
        <h1 className="text-6xl font-bold">About</h1>
        <ul className="text-1xl leading-6 p-4">
          <li>
            名前:
            <ruby>
              現音令彼<rt>あらねしむか</rt>
            </ruby>
          </li>
          <li>英語表記: AraneShimuka</li>
          <li>性別: ？(なんとでも)</li>
          <li>声別: 女性(男性声も可)</li>
          <li>年齢: ？(少なくとも人間を超えてる)</li>
          <li>身長: 173.5(変更可)</li>
          <li>体重: ？</li>
          <li>誕生日: 7月8日</li>
          <li>持ち物: 百合やチューリップの花</li>
          <li>イメージカラー: モノクロ系</li>
          <li>
            過去：小さいころに故郷から逃げ出す
            <br />
            {"　　　"}前の記憶は曖昧である
          </li>
          <li>好きなもの: 猫(特に長毛種)</li>
          <li>苦手なもの: 花粉(花粉症)</li>
          <li>一人称: 私</li>
          <li>二人称: 君、あなた</li>
          <li>三人称: 君たち、あなた達</li>
        </ul>
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
