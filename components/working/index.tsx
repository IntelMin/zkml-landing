"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

export const Works = (props: Props) => {
  React.useEffect(() => {
    gsap.fromTo(
      "#bgGreen",
      {
        y: -30,
        opacity: 0.4,
      },
      {
        scrollTrigger: {
          trigger: "#wallet",
          start: "bottom center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
        },
        y: 50,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      "#eth",
      {
        y: 150,
        opacity: 0.4,
      },
      {
        scrollTrigger: {
          trigger: "#wallet",
          start: "bottom center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
        },
        y: -30,
        opacity: 1,
        duration: 1.3,
        ease: "power4.out",
      }
    );
  });
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      gsap.fromTo(
        "#wallet",
        {
          y: 150,
          opacity: 0.4,
        },
        {
          scrollTrigger: {
            trigger: "#working",
            start: "left center",
            toggleActions: "restart pause reverse pause",
            scrub: 1,
          },
          y: -10,
          opacity: 1,
          duration: 1.3,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        "#transaction",
        {
          y: 180,
          opacity: 0.4,
        },
        {
          scrollTrigger: {
            trigger: "#working",
            start: "left center",
            toggleActions: "restart pause reverse pause",
            scrub: 1,
          },
          y: -10,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        "#confirmation",
        {
          y: 180,
          opacity: 0.4,
        },
        {
          scrollTrigger: {
            trigger: "#working",
            start: "left center",
            toggleActions: "restart pause reverse pause",
            scrub: 1,
          },
          y: -10,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        }
      );
    }
  });
  return (
    <div
      className="relative flex min-h-screen w-full justify-center py-8 md:px-[250px]"
      id="working"
    >
      <Image
        src="/background/workingBg.png"
        alt="bg"
        width={768}
        height={501}
        className="absolute -top-[320px] right-0 z-[-1]"
        id="bgGreen"
      />
      <Image
        src="/about/ethBg.png"
        alt="bg"
        width={468}
        height={401}
        className="absolute left-0 z-[-1]"
        id="eth"
      />
      <div className="grid w-full gap-12 p-12 md:grid-cols-2">
        <div className="grid-cols-1 text-white">
          <div className="font-[PPUltrabold] text-[40px]">
            <h1>How it works</h1>
          </div>
          <div className="text-[24px] font-[500]">
            <h1>In three easy steps</h1>
          </div>
          <div className="py-6">
            <Link
              className="w-[300px] rounded-[12px] bg-[#38E5FF] px-[63px] py-3 text-center text-[16px] text-black hover:bg-[#47a7c4]"
              href="https://dapp.zkml.systems/"
            >
              dApp
            </Link>
          </div>
        </div>
        <div className="flex grid-cols-1 flex-col gap-5">
          <div id="wallet">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/working/walletCreation.png"
                  width={156}
                  height={56}
                  alt="purple-bg"
                  className="max-md:w-[230px]"
                />
                <Image
                  src="/working/bar1.png"
                  width={8}
                  height={70}
                  alt="purple-bg"
                  className="max-md:h-[100px]"
                />
              </div>
              <div>
                <div className="pb-4 text-[20px] font-[700] text-white">
                  <h1>Wallet Creation</h1>
                </div>
                <div className="flex flex-col gap-y-6 text-[16px] text-[#8F8F8F]">
                  <h1 className="font-[500]">
                    Users can create secure wallets within the zkShield DApp,
                    generating a public ID and private keys to facilitate
                    transactions.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div id="transaction">
            <div className="flex gap-[32px]">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/working/transactionShielding.png"
                  width={216}
                  height={56}
                  alt="purple-bg"
                  className="max-md:w-[310px]"
                />
                <Image
                  src="/working/bar2.png"
                  width={8}
                  height={50}
                  alt="purple-bg"
                  className="max-md:h-[180px]"
                />
              </div>
              <div>
                <div className="pb-4 text-[20px] font-[700] text-white">
                  <h1>Transaction Shielding</h1>
                </div>
                <div className="flex flex-col gap-y-6 text-[16px] text-[#8F8F8F]">
                  <h1 className="font-[500]">
                    When initiating a transaction, the ZKML employs
                    state-of-the-art cryptographic protocols to obsure
                    transaction from the public network, rendering them
                    unintelligible to external observers.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[25px]" id="confirmation">
              <Image
                src="/working/confirmationXRPL.png"
                height={36}
                width={66}
                alt="purple-bg"
                className="h-[66px] max-md:w-[200px]"
              />
              <div>
                <div className="pb-4 text-[20px] font-[700] text-white">
                  <h1>Confirmation on XRPL</h1>
                </div>
                <div className="flex flex-col gap-y-6 text-[16px] text-[#8F8F8F]">
                  <h1 className="font-[500]">
                    Funds get sent to a secret blockchain wallet which is
                    confirmed and withdrawn using the private keys. This ensures
                    that the privacy-enhanced transfer is seamlessly integrated
                    into the broader blockchain network without revealing
                    intrinsic details.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
