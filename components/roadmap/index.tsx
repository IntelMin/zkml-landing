import React from "react";

type Props = {};

const desArray = [
  "Develop ZKML's core infrastructure, Privacy Router, integrate zSnarky, establish connections with ROSE and MINA networks.",
  "Launch AnonAI Search, develop zKOS and Mobile-zKOS, implement Privacy-Centric VoIP.",
  "Introduce zkShield, enhance interoperability with ROSE and MINA networks, establish partnerships for cross-chain transactions.",
  "Conduct testing and security audits, scale up user base through marketing and partnerships, expand services to include private browsing features, continuously improve platform based on user feedback and emerging technologies.",
];

export const Roadmap = (props: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-8 py-8 max-md:px-2">
      <div className="pb-4 font-[PPUltrabold] text-[40px] text-white">
        <h1>Our Roadmap</h1>
      </div>
      <div className="">
        {desArray?.map((item, i) => (
          <div key={item} className="flex items-center">
            <div className="flex flex-1 items-center justify-end gap-4">
              <h1
                className="text-xl font-[700] text-white md:text-[36px]"
                style={{
                  background: "linear-gradient(180deg, #FFF 0%, #A7A7A7 100%)",
                  backgroundClip: "text",
                  textShadow: "0px 2px 24px rgba(56, 229, 255, 0.80)",
                }}
              >
                Phase {i + 1}
              </h1>
              <div className="h-[2px] w-[50px] bg-[#333] md:w-[140px]" />
            </div>
            <div className="max-w-[550px] flex-1 border-b-2 border-l-2 border-[#333] p-8 pr-0">
              <p className="text-sm font-[500] text-white md:text-[20px] md:leading-7">
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
