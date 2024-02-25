import React from "react";

type Props = {};

const desArray = [
  "Core Infrastructure: Establishment of privacy-focused infrastructure. XRPL. Privacy Router: Development of a privacy router for anonymous transactions. zSnarky Integration: Incorporation of zero-knowledge proofs. zKOS: Development of a secure operating system framework.",
  "Launch zKSearch, develop zKOS and Mobile-zKOS, implement Privacy-Centric VoIP. Collaborate with privacy-focused search engines for shared insights. Leverage Bittensor for powering the zkSearch AI search engine, focusing on the ZKML subnet on Bittensor to ensure enhanced privacy and security. dapt the zKOS framework for mobile devices, ensuring compatibility with major mobile hardware. Engage with communities around LineageOS and GrapheneOS for insights on privacy-centric mobile OS development.",
  "Introduce zkShield, enhance interoperability with ROSE and MINA networks, establish partnerships for cross-chain transactions.",
  "Conduct testing and security audits, scale up user base through marketing and partnerships, expand services to include private browsing features, continuously improve platform based on user feedback and emerging technologies. Position zKML as a leader in confidential transactions through strategic partnerships, developer collaborations, and educational campaigns. Build privacy solutions on both networks, drawing inspiration from projects like Minamix and TornadoMina showcased at ETHGlobal",
];

export const Roadmap = (props: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-8 py-8 max-md:px-2">
      <div className="font-[PPUltrabold] text-[42px] text-white max-md:pb-4">
        <h1>Our Roadmap</h1>
      </div>
      <div className="">
        {desArray?.map((item, i) => (
          <div
            key={item}
            className="flex items-start max-md:flex-col md:items-center"
          >
            <div className="flex flex-1 justify-end pl-5 md:items-center md:gap-4">
              <h1
                className="text-[34px] font-[700] text-white md:text-[36px]"
                style={{
                  background: "linear-gradient(180deg, #FFF 0%, #A7A7A7 100%)",
                  backgroundClip: "text",
                  textShadow: "0px 2px 24px rgba(56, 329, 255, 1.0)",
                }}
              >
                Phase {i + 1}
              </h1>
              <div className="h-[2px] w-[50px] bg-[#333] max-md:hidden md:w-[140px]" />
            </div>
            <div className="max-w-[550px] flex-1 border-[#333] p-5 pr-0 max-md:mb-5 md:border-b-2 md:border-l-2 md:p-8">
              <p className="text-xl font-[500] text-white md:text-[20px] md:leading-7">
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
