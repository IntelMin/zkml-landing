"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <div className="relative p-2 md:p-4" id="hero">
      <div className="absolute left-0 top-1 flex w-full items-center justify-between">
        <div className="z-10 pl-6 pt-8 md:pl-12">
          <button
            onClick={() => {
              const ele = document.querySelector("#hero");
              ele?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="text-white"
          >
            <Image
              src="/icons/logo.png"
              alt="logo"
              width={116}
              height={36}
              className="max-md:w-[125px]"
            />
          </button>
        </div>
        <div className="z-10 pr-12 pt-8">
          <Link
            href="#"
            className="rounded-[12px] bg-white px-10 py-3 text-black max-md:hidden"
          >
            dApp
          </Link>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-[-1] flex items-center max-md:flex-col">
        <Image
          src="/background/blue.png"
          width={500}
          height={350}
          alt="blue-bg"
        />
        <Image
          src="/background/purple.png"
          width={500}
          height={350}
          alt="purple-bg"
        />
      </div>
      <div className="flex min-h-[calc(100vh-32px)] w-full flex-col rounded-l-[24px] rounded-t-[24px] border border-b-0 border-r-0 border-[#3D3D3D] bg-[url(/background/herobg.png)] bg-cover bg-center pl-3 pr-8 md:pl-12">
        <div className="flex flex-1 items-center font-[PPUltrabold] text-[35px] font-extrabold leading-[35px] text-white max-md:pb-20 md:text-[52px] md:leading-[60px]">
          <h1>
            Unlocking Privacy, Secure <br /> Blockchain Communication, <br />{" "}
            and Cross Interoperability
          </h1>
        </div>
        <div className="flex justify-between pb-4 max-md:flex-col max-md:pb-[60px]">
          <div className="flex items-end">
            <h1 className="text-white">
              zKML - Zero Knowledge Machine Learning
            </h1>
          </div>
          <div className="md:w-[30%]">
            <div className="flex flex-col gap-2 text-white">
              <div>
                <h1>
                  zkml - harnessing machine learning to create zk-proofs and
                  secure multiparty computation for data privacy.
                </h1>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  className="w-[174px] rounded-[12px] bg-[#38E5FF] py-2 text-center text-[16px] text-black"
                  href="#"
                >
                  dApp
                </Link>
                <Link
                  className="w-[174px] rounded-[12px] border border-white bg-[transparent] py-2 text-center text-[16px] text-white"
                  href="#"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
