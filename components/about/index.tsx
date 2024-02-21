"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {};
const aboutArr = [
  {
    name: "Convert Transactions",
    desc: "Ensuring confidentiality and discretion.",
    imagePath: "/about/one.png",
  },
  {
    name: "Encrypted ZKOS",
    desc: "Secure communication.",
    imagePath: "/about/two.png",
  },
  {
    name: "Dynamic Asset Swaps",
    desc: "Efficient cross-chain transactions.",
    imagePath: "/about/three.png",
  },
  {
    name: "Cross-Chain Privacy",
    desc: "Asset confidentiality.",
    imagePath: "/about/four.png",
  },
  {
    name: "zKSearch",
    desc: "Private browsing.",
    imagePath: "/about/five.png",
  },
];

export const About = (props: Props) => {
  React.useEffect(() => {
    gsap.fromTo(
      "#aboutDiv",
      {
        y: 100,
        opacity: 0.4,
      },
      {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
        },
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      "#featBox",
      {
        y: 100,
        opacity: 0.4,
      },
      {
        scrollTrigger: {
          trigger: "#features",
          start: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      "#aboutImg",
      {
        x: 0,
        opacity: 0.4,
      },
      {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
        },
        x: -20,
        stagger: 0.03,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      "#aboutFeatures",
      {
        y: 100,
        opacity: 0.4,
      },
      {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
        },
        y: 0,
        stagger: 0.03,
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
      }
    );
  });
  return (
    <div
      className="relative flex min-h-screen justify-center pb-0 pt-[106px]"
      id="about"
    >
      <Image
        src="/about/aboutBg.png"
        alt="bg"
        width={668}
        height={501}
        id="aboutImg"
        className="absolute top-[40px] z-[-1] max-md:right-0 max-md:h-[350px] max-md:w-[350px] md:-top-[60px] md:right-[80px]"
      />
      <div className="relative flex flex-col" id="aboutDiv">
        {/* About  */}
        <div className="flex justify-center">
          <div className="flex w-[75%] flex-col gap-y-9 md:w-[45%]">
            <div className="md:w-[420px]">
              <div className="font-[PPUltrabold] text-[60px] leading-10 text-white md:text-[80px] md:leading-[80px]">
                <h1>About</h1>
              </div>
              <div className="flex font-[PPUltrabold] text-[60px] text-white max-md:px-16 md:translate-x-[calc(40%)] md:text-[80px] md:leading-[80px]">
                <h1>zKML</h1>
              </div>
              <div
                className="h-[5px] w-[80%] md:w-full"
                style={{
                  borderRadius: "25px",
                  background:
                    "linear-gradient(270deg, #38E5FF 0%, rgba(56, 229, 255, 0.00) 100%)",
                }}
              />
            </div>
            <div className="flex items-start gap-6 max-md:flex-col-reverse">
              <Link
                className="w-[250px] rounded-[12px] border border-white bg-[transparent] py-2 text-center text-[16px] text-white hover:bg-white hover:text-black md:w-[350px]"
                href="https://zkml.gitbook.io/doc"
              >
                Learn more
              </Link>
              <div className="flex flex-col gap-y-4 text-white">
                <div>
                  <h1>
                    We offer zKOS operating systems and Mobile-zKOS for secure
                    communication on mobile devices.
                  </h1>
                </div>
                <div>
                  <h1>ZKML PRIORITIZES USER PRIVACY AND SECURITY.</h1>
                </div>
                <div>
                  <h1>
                    We offer solutions like the Privacy Router for secure and
                    anonymous CBDC transactions and integrates Snarky technology
                    for confidential blockchain transactions.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards */}
        <Image
          src="/background/aboutBg.png"
          alt="bg"
          width={468}
          height={401}
          className="absolute py-[200px]"
        />
        <div
          className="mb-[40px] mt-[30px] grid px-[56px] max-md:gap-5 md:mt-[166px] md:grid-cols-5"
          id="aboutFeatures"
        >
          {aboutArr?.map((item) => (
            <div
              key={item?.desc}
              className="flex grid-cols-1 flex-col gap-5 md:gap-[38px]"
            >
              <div className="px-8">
                <Image src={item?.imagePath} alt="one" width={40} height={40} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h1 className="border-l border-[#38E5FF] px-8 text-[16px] font-[700] leading-[16px] text-white">
                  {item?.name}
                </h1>
                <p className="px-8 font-[700] text-[#AFE0E7] md:text-[16px]">
                  {item?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="w-full">
            <Image
              src="/about/Chart.png"
              width={1883}
              height={173}
              alt="chart"
              className="px-[16px] md:px-[65px]"
            />
          </div>
          <div className="w-full">
            <Image
              src="/about/zlogo.svg"
              width={1883}
              height={173}
              alt="chart"
              className="bg-[black] object-contain px-[16px] md:px-[65px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
