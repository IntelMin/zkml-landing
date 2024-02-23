"use client";

import React from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

type Props = {};

export const Privacy = (props: Props) => {
  const [isMdScreen, setIsMdScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-center gap-5 px-[20px] py-8 md:px-[144px]">
      <Image
        src="/background/privacyBg.png"
        alt="bg"
        width={468}
        height={401}
        className="absolute left-0 top-0 z-[-1] translate-y-[150px]"
      />
      <ParallaxProvider>
        <div className="relative grid w-full gap-12 overflow-hidden rounded-[24px] max-md:px-0 max-md:py-4 md:grid-cols-2 md:border md:border-[#272727] md:p-12">
          {!isMdScreen && (
            <Parallax translateY={[-20, 50]}>
              <div className="sticky top-10">
                <div className="h-[380px] grid-cols-1 overflow-hidden rounded-[16px] md:h-[608px]">
                  <video
                    autoPlay
                    loop
                    muted
                    className="h-full w-full object-cover object-center"
                  >
                    <source src="/background/zsnarky23.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </Parallax>
          )}
          {isMdScreen && (
            <div className="sticky top-0">
              <div className="h-[380px] grid-cols-1 overflow-hidden rounded-[16px] md:h-[608px]">
                <video
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover object-center"
                >
                  <source src="./background/zsnarky23.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          )}
          <div id="rightSideContent" className="grid-cols-1">
            <div className="flex flex-col gap-[104px]">
              <div>
                <div className="pb-12">
                  <div className="pb-4 font-[PPUltrabold] text-[40px] text-white">
                    <h1>PRIVACY ROUTER</h1>
                  </div>
                  <div className="text-[20px] text-white">
                    <h1 className="font-[700]">
                      The XRP Private Route is a privacy-enhancing layer built
                      on top of the XRP Ledger. It acts as a secure tunnel for
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
                      • Anti CBDC Transactions: As central bank digital
                      currencies (CBDCs) become more prevalent,
                      privacy-conscious users can utilize the XRP Private Route
                      to shield their transactions from surveillance.
                    </h1>
                    <h1 className="font-[500]">
                      • Anti CBDC Transactions: As central bank digital
                      currencies (CBDCs) become more prevalent,
                      privacy-conscious users can utilize the XRP Private Route
                      to shield their transactions from surveillance.
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
                      Integration of zk-SNARKs (zero-knowledge proofs) into
                      $ROSE and $MINA networks.
                    </h1>
                  </div>
                </div>
                <div>
                  <div className="pb-4 text-[40px] font-[700] text-[#38E5FF]">
                    <h1>Use Cases</h1>
                  </div>
                  <div className="flex flex-col gap-y-6 text-[20px] text-[#c7c7c7]">
                    <h1 className="font-[500]">
                      • Private Transactions: Users can perform confidential
                      transactions on all blockchains, hiding transaction
                      details while maintaining security
                    </h1>
                    <h1 className="font-[500]">
                      • Privacy-Preserving DeFi: Building decentralized finance
                      (DeFi) applications that protect user privacy by
                      leveraging zk-SNARKs.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxProvider>
      <div className="w-full overflow-hidden rounded-2xl">
        <video
          autoPlay
          loop
          muted
          className="w-full object-cover object-center"
        >
          <source src="./zksearch-new.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Privacy;
