"use client";

import { isViewportValid } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const a1 = [
  {
    path: "/ecosystem/one.svg",
    name: "zKSearch",
    description:
      "Decentralized search engines powered by AI models that do not store user data.",
  },
  {
    path: "/ecosystem/two.svg",
    name: "ZKOS",
    description:
      "Operating systems designed with privacy and security as core principles.",
  },
  {
    path: "/ecosystem/three.svg",
    name: "Mobile-ZKOS",
    description: "Privacy-focused mobile operating systems and smartphones.",
  },
  {
    path: "/ecosystem/four.svg",
    name: "Privacy-Centric VoIP",
    description:
      "zKML integrates Huddle to provide VoIP services that prioritize user privacy during voice and video calls.",
  },
  {
    path: "/ecosystem/six.svg",
    name: "ZkShield",
    description:
      "ZKML prioritizes user privacy through advanced cryptographic algorithms and robust privacy protocols.",
  },
  {
    path: "/ecosystem/five.svg",
    name: "Cross-Chain Interoperability",
    description: "ZKML seamlessly integrates with diverse blockchain networks.",
  },
];

export const Ecosystem = (props: Props) => {
  React.useEffect(() => {
    gsap.fromTo(
      "#features",
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
        duration: 1.3,
        ease: "power4.out",
      }
    );
  });
  const isMobile = isViewportValid(768);
  return (
    <div className="flex w-full flex-col items-center gap-8 py-8" id="features">
      <div className="pb-4 font-[PPUltrabold] text-[40px] text-white">
        <h1>zKML Ecosystem</h1>
      </div>
      <div className="grid w-[80%] grid-cols-1 md:grid-cols-3">
        {a1?.slice(0, 3).map((item, i) => {
          return (
            <div
              key={item.name}
              className={`flex col-span-1 bg-[url(/ecosystem/dust.png)]  ${
                i < 2 ? "border-r border-[#333]" : ""
              }  flex-col items-center gap-2 p-[30px]`}
              style={
                i !== 2 || !isMobile
                  ? {
                      background:
                        "radial-gradient(0.31% 13.77% at 99.7% 54.54%,#38E5FF 1.55%, rgb(255 255 255 / 0%) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    }
                  : {
                      background:
                        "radial-gradient(0.31% 0.77% at 99.7% 54.54%, black 1.55%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    }
              }
            >
              <div
                className="rounded-[12px] p-2"
                style={{
                  background: "rgba(255, 255, 255, 0.10)",
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                }}
              >
                <Image src={item.path} alt="one" width={40} height={40} />
              </div>
              <h1 className="mt-2 font-[700] text-white">{item.name}</h1>
              <p className="text-center font-[500] text-[#8f8f8f]">
                {item.description}
              </p>
            </div>
          );
        })}
        <div className="h-[2px] w-full bg-[#29282840] bg-gradient-to-r from-[#1b1b1ba3] via-[#333] to-[black] md:col-span-3" />
        {a1?.slice(3).map((item, i) => {
          return (
            <div
              key={item?.name}
              className={`flex col-span-1 bg-[url(/ecosystem/dust.png)]  ${
                i < 2 ? "border-r border-[#333]" : ""
              }  flex-col items-center gap-2 p-[30px]`}
              style={
                i !== 2 || !isMobile
                  ? {
                      background:
                        "radial-gradient(0.31% 13.77% at 99.7% 54.54%,#38E5FF 1.55%, rgb(255 255 255 / 0%) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    }
                  : {
                      background:
                        "radial-gradient(0.31% 0.77% at 99.7% 54.54%, black 1.55%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                    }
              }
            >
              <div
                className="rounded-[12px] p-2"
                style={{
                  background: "rgba(255, 255, 255, 0.10)",
                  border: "1px solid rgba(255, 255, 255, 0.40)",
                }}
              >
                <Image src={item.path} alt="one" width={40} height={40} />
              </div>
              <h1 className="mt-2 font-[700] text-white">{item.name}</h1>
              <p className="text-center font-[500] text-[#8f8f8f]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
