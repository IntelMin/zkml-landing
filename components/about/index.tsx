import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    name: "AnonAI Search",
    desc: "Private browsing.",
    imagePath: "/about/five.png",
  },
];

export const About = (props: Props) => {
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
        className="absolute -top-[60px] right-[80px] z-[-1]"
      />
      <div className="relative flex flex-col">
        {/* About  */}
        <div className="flex justify-center">
          <div className="flex w-[45%] flex-col gap-y-9">
            <div className="w-[420px]">
              <div className="font-[PPUltrabold] text-[80px] leading-[80px] text-white">
                <h1>About</h1>
              </div>
              <div className="flex translate-x-[calc(40%)] font-[PPUltrabold] text-[80px] leading-[80px] text-white">
                <h1>zKML</h1>
              </div>
              <div
                className="mt-6 h-[5px] w-full"
                style={{
                  borderRadius: "25px",
                  background:
                    "linear-gradient(270deg, #38E5FF 0%, rgba(56, 229, 255, 0.00) 100%)",
                }}
              />
            </div>
            <div className="flex items-start gap-6">
              <Link
                className="w-[350px] rounded-[12px] border border-white bg-[transparent] py-2 text-center text-[16px] text-white"
                href="#"
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
        <div className="mb-[40px] mt-[166px] grid grid-cols-5 px-[56px]">
          {aboutArr?.map((item) => (
            <div key={item?.desc} className="flex flex-col gap-[38px]">
              <div className="px-8">
                <Image src={item?.imagePath} alt="one" width={40} height={40} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <h1 className="border-l border-[#38E5FF] px-8 text-[16px] font-[700] leading-[16px] text-white">
                  {item?.name}
                </h1>
                <p className="px-8 text-[16px] font-[700] text-[#AFE0E7]">
                  {item?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <Image
            src="/about/Chart.png"
            width={1883}
            height={173}
            alt="chart"
            className="px-[65px]"
          />
        </div>
        <div className="w-full">
          <Image
            src="/zlogo.png"
            width={1883}
            height={173}
            alt="chart"
            className="px-[65px]"
          />
        </div>
      </div>
    </div>
  );
};
