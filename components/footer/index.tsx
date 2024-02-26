import Link from "next/link";
import React from "react";
import Image from "next/image";
import { footerLinks } from "./footer-ele";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <div className="px-[10px] pb-5 md:px-[72px] md:py-10 md:pb-10">
      <div
        className="px-[20px] py-10 pb-10 md:px-[48px]"
        style={{
          borderRadius: "24px ",
          border: "1px solid #355067",
          borderBottom: "none",
          background: "linear-gradient(180deg, #02111E 0%, #04050A 100%)",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-20 max-md:flex-col">
          <div className="flex translate-y--10 flex-col items-start">
            <div className="max-md:w-[250px] md:pl-12 md:pt-8">
              <Link href="#" className="text-white">
                <Image
                  src="/icons/logo.png"
                  alt="logo"
                  width={116}
                  height={36}
                />
              </Link>
            </div>
            <p className="mt-6 text-base leading-7 text-white">
              Unlocking Privacy, Secure Blockchain Communication, and Cross
              Interoperability.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <div className="rounded-full bg-[#40d1cf22] px-2 py-3 md:px-6">
                <h1 className="font-[AzeretMono-Regular] font-[400] text-[#38E5FF]">
                  CA: 0xE92344b4eDF545F3209094B192E46600A19E7C2D
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-y-10 max-md:flex-col md:justify-between md:gap-20">
            {footerLinks.map((item) => (
              <div key={item?.title}>
                <h4 className="mb-6 text-2xl font-medium leading-normal text-white max-md:text-4xl">
                  {item.title}
                </h4>
                <ul>
                  {item.links.map((link) => (
                    <li
                      className="mt-3 text-xl leading-normal text-white hover:text-[#38E5FF] md:text-base"
                      key={link.name}
                    >
                      <Link href={link.link}>{link.name}</Link>
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
