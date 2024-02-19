import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

const footerLinks = [
  {
    title: "Contact",
    links: [
      { name: "X(twitter)", link: "/" },
      { name: "Reddit", link: "/" },
      { name: "Telegram", link: "/" },
      { name: "info@zkml.systems", link: "/" },
    ],
  },
  {
    title: "Menu",
    links: [
      { name: "Home", link: "/" },
      { name: "About", link: "/" },
      { name: "Features", link: "/" },
      { name: "How it works", link: "/" },
    ],
  },
  {
    title: "Token",
    links: [
      { name: "Etherscan", link: "/" },
      { name: "Dextools", link: "/" },
    ],
  },
];

export const Footer = (props: Props) => {
  return (
    <div className="px-[72px] py-10 pb-10">
      <div
        className="px-[48px] py-10 pb-10"
        style={{
          borderRadius: "24px ",
          border: "1px solid #355067",
          borderBottom: "none",
          background: "linear-gradient(180deg, #02111E 0%, #04050A 100%)",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
          <div className="flex translate-y--10 flex-col items-start">
            <div className="pl-12 pt-8">
              <Link href="#" className="text-white">
                <Image
                  src="/icons/logo.png"
                  alt="logo"
                  width={116}
                  height={36}
                />
              </Link>
            </div>
            <p className="mt-6 text-base leading-7 text-white sm:max-w-sm">
              Unlocking Privacy, Secure Blockchain Communication, and Cross
              Interoperability.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <div className="rounded-full bg-[#40d1cf22] px-6 py-3">
                <h1 className="font-[AzeretMono-Regular] font-[400] text-[#38E5FF]">
                  CA: 0XIE32EEHUIY32IE32JRH32IUHR
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
            {footerLinks.map((item) => (
              <div key={item?.title}>
                <h4 className="mb-6 text-2xl font-medium leading-normal text-white">
                  {item.title}
                </h4>
                <ul>
                  {item.links.map((link) => (
                    <li
                      className="hover:text-slate-gray mt-3 cursor-pointer text-base leading-normal text-white"
                      key={link.name}
                    >
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 flex justify-between text-white max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 items-center justify-start gap-2">
            <h1>zKML © 2024 | All rights reserved</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
