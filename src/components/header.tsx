"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-800/95 backdrop-blur-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center space-x-2"
          >
            <Image
              src="/arane/images/title.webp"
              alt="荒音の夜(サイトロゴ)"
              width={60}
              height={60}
              className="w-auto h-12"
            />
          </Link>

          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white hover:underline transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/download"
                className="text-gray-300 hover:text-white hover:underline transition-colors"
              >
                Download
              </Link>
            </li>
            <li>
              <Link
                href="https://ramura.uniproject.jp/license"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:underline transition-colors"
              >
                License
              </Link>
            </li>
            <li>
              <Link
                href="https://ramura.uniproject.jp/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:underline transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-gray-800/95 backdrop-blur-sm transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="py-2 space-y-1 px-4">
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/download"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
            </li>
            <li>
              <Link
                href="https://ramura.uniproject.jp/license"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                License
              </Link>
            </li>
            <li>
              <Link
                href="https://ramura.uniproject.jp/contacts"
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
