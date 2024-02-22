"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarMobile } from "../navbar/navbar-mobile";

type Props = {};

export const Hero = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="relative p-2 md:p-4" id="hero">
      {isOpen && <NavbarMobile isOpen={isOpen} setIsOpen={setIsOpen} />}

      {/* Topbar */}

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
            href="https://dapp.zkml.systems/"
            className="rounded-[12px] bg-white px-10 py-3 text-black hover:bg-[#c4c6c6] max-md:hidden"
          >
            dApp
          </Link>
          <div
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="md:hidden"
          >
            <GiHamburgerMenu className="text-xl text-white" />
          </div>
        </div>
      </div>

      {/* Bg BLOB */}

      <div className="absolute left-0 top-0 z-[-10] flex items-center max-md:flex-col">
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

      {/* Bg Video */}

      <div className="relative flex min-h-[calc(100vh-32px)] w-full flex-col overflow-hidden rounded-[24px] border border-b-0 border-r-0 border-[#3D3D3D] bg-[url(/ecosystem/dust.png)] p-5 md:pb-0 md:pr-0">
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 z-[-10] h-full w-full object-cover object-right"
        >
          <source src="/background/ZKMLHero.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-1 items-center font-[PPUltrabold] text-[35px] font-extrabold leading-[35px] text-white max-md:pb-20 md:text-[52px] md:leading-[60px]">
          <h1>
            Unlocking Privacy, Secure <br /> Blockchain Communication, <br />{" "}
            and Cross Interoperability
          </h1>
        </div>
        <div className="relative flex justify-between max-md:flex-col max-md:pb-[20px]">
          <div className="flex items-end p-5 md:pb-9">
            <h1
              className="text-white"
              style={{ textShadow: "2px 4px 4px rgba(46,91,173,0.6);" }}
            >
              zKML - Zero Knowledge Machine Learning
            </h1>
          </div>
          <div className="rounded-tl-[24px] p-5 md:w-[30%] md:bg-black md:p-9">
            <div className="flex flex-col gap-2">
              <div>
                <h1
                  className="text-white"
                  style={{ textShadow: "2px 4px 4px rgba(46,91,173,0.2);" }}
                >
                  zkml - harnessing machine learning to create zk-proofs and
                  secure multiparty computation for data privacy.
                </h1>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  className="w-[174px] rounded-[12px] bg-[#38E5FF] py-2 text-center text-[16px] text-black hover:bg-[#47a7c4]"
                  href="https://dapp.zkml.systems/"
                >
                  dApp
                </Link>
                <Link
                  className="w-[174px] rounded-[12px] border border-white bg-[transparent] py-2 text-center text-[16px] text-white hover:bg-white hover:text-black"
                  href="https://zkml.gitbook.io/doc"
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
