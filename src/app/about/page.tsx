import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 bg-[#1f1f1f]">
      <ul>
        <li>
          名前:
          <ruby>
            現音令彼<rt>あらねしむか</rt>
          </ruby>
        </li>
        <li>英語表記: AraneShimuka</li>
      </ul>
    </main>
  );
}
