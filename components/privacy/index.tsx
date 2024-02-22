"use client";
import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

export const Privacy = (props: Props) => {
  React.useEffect(() => {
    gsap.fromTo(
      "#privacy",
      {
        y: 150,
        opacity: 0.4,
      },
      {
        scrollTrigger: {
          trigger: "#privacy",
          start: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: 1,
        },
        y: 10,
        opacity: 1,
        duration: 1.3,
        ease: "power4.out",
      }
    );
  });
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-center gap-5 px-[20px] py-8 md:px-[144px]">
      <Image
        src="/background/privacyBg.png"
        alt="bg"
        width={468}
        height={401}
        className="absolute left-0 top-0 z-[-1] translate-y-[150px]"
      />
      <div className="grid w-full gap-12 overflow-hidden rounded-[24px] border border-[#272727] max-md:px-6 max-md:py-4 md:grid-cols-2 md:p-12">
        <div className="relative h-[380px] grid-cols-1 overflow-hidden rounded-[16px] md:h-[608px]">
          <video
            autoPlay
            loop
            muted
            className="absolute h-full w-full object-cover object-center"
          >
            <source src="/background/privacyVideo.webm" type="video/webm" />
          </video>
        </div>
        <div className="grid-cols-1">
          <div className="flex flex-col gap-[104px]" id="privacy">
            <div>
              <div className="pb-12">
                <div className="pb-4 font-[PPUltrabold] text-[40px] text-white">
                  <h1>PRIVACY ROUTER</h1>
                </div>
                <div className="text-[20px] text-white">
                  <h1 className="font-[700]">
                    The XRP Private Route is a privacy-enhancing layer built on
                    top of the XRP Ledger. It acts as a secure tunnel for
                    transactions, obfuscating the sender, receiver, and
                    transaction amounts.
                  </h1>
                </div>
              </div>
              <div>
                <div className="pb-4 text-[40px] font-[700] text-[#38E5FF]">
                  <h1>Use Cases</h1>
                </div>
                <div className="flex flex-col gap-y-6 text-[20px] text-[#c7c7c7]">
                  <h1 className="font-[500]">
                    • Anti CBDC Transactions: As central bank digital currencies
                    (CBDCs) become more prevalent, privacy-conscious users can
                    utilize the XRP Private Route to shield their transactions
                    from surveillance.
                  </h1>
                  <h1 className="font-[500]">
                    • Anti CBDC Transactions: As central bank digital currencies
                    (CBDCs) become more prevalent, privacy-conscious users can
                    utilize the XRP Private Route to shield their transactions
                    from surveillance.
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <div className="pb-12">
                <div className="pb-4 font-[PPUltrabold] text-[40px] text-white">
                  <h1>ZSNARKY</h1>
                </div>
                <div className="text-[20px] text-white">
                  <h1 className="font-[700]">
                    Integration of zk-SNARKs (zero-knowledge proofs) into $ROSE
                    and $MINA networks.
                  </h1>
                </div>
              </div>
              <div>
                <div className="pb-4 text-[40px] font-[700] text-[#38E5FF]">
                  <h1>Use Cases</h1>
                </div>
                <div className="flex flex-col gap-y-6 text-[20px] text-[#c7c7c7]">
                  <h1 className="font-[500]">
                    • Private Transactions: Users can perform confidential
                    transactions on all blockchains, hiding transaction details
                    while maintaining security
                  </h1>
                  <h1 className="font-[500]">
                    • Privacy-Preserving DeFi: Building decentralized finance
                    (DeFi) applications that protect user privacy by leveraging
                    zk-SNARKs.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/zKSearch.gif"
          width={1883}
          height={173}
          alt="chart"
          className="bg-[black] object-contain px-[16px] md:px-[65px]"
        />
      </div>
    </div>
  );
};
