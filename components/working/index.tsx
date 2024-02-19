import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Works = (props: Props) => {
  return (
    <div className="relative flex min-h-screen w-full justify-center py-8 md:px-[250px]">
      <Image
        src="/background/workingBg.png"
        alt="bg"
        width={768}
        height={501}
        className="absolute -top-[320px] right-0 z-[-1]"
      />
      <Image
        src="/about/ethBg.png"
        alt="bg"
        width={468}
        height={401}
        className="absolute left-0 z-[-1]"
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
              className="w-[300px] rounded-[12px] bg-[#38E5FF] px-[63px] py-3 text-center text-[16px] text-black"
              href="#"
            >
              dApp
            </Link>
          </div>
        </div>
        <div className="flex grid-cols-1 flex-col gap-5">
          <div>
            <div className="flex gap-[32px]">
              <Image
                src="/working/wallet.png"
                width={70}
                height={10}
                alt="purple-bg"
                className="max-md:w-[200px]"
              />
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
          <div>
            <div className="flex gap-[32px]">
              <Image
                src="/working/transaction.png"
                width={70}
                height={10}
                alt="purple-bg"
                className="max-md:w-[35vh]"
              />
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
            <div className="flex gap-[32px]">
              <Image
                src="/working/regiuster.png"
                height={56}
                width={56}
                alt="purple-bg"
                className="h-[60px]"
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
{
  /* <div className="flex gap-5">
            <Image
              src="/working/timeline.png"
              width={70}
              height={350}
              alt="purple-bg"
            />
            <div className="pt-2">
              <div>
                <div className="pb-4 text-[20px] font-[700] text-white">
                  <h1>Wallet Creation</h1>
                </div>
                <div className="flex flex-col gap-y-6 text-[16px] text-[#8F8F8F]">
                  <h1>
                    Users can create secure wallets within the zkShield DApp,
                    generating a public ID and private keys to facilitate
                    transactions.
                  </h1>
                </div>
              </div>
              <div>
                <div className="pb-4 text-[20px] font-[700] text-white">
                  <h1>Transaction Shielding</h1>
                </div>
                <div className="flex flex-col gap-y-6 text-[16px] text-[#8F8F8F]">
                  <h1>
                    When initiating a transaction, the ZKML employs
                    state-of-the-art cryptographic protocols to obsure
                    transaction from the public network, rendering them
                    unintelligible to external observers.
                  </h1>
                </div>
              </div>
              <div>
                <div className="pb-4 text-[20px] font-[700] text-white">
                  <h1>Confirmation on XRPL</h1>
                </div>
                <div className="flex flex-col gap-y-6 text-[16px] text-[#8F8F8F]">
                  <h1>
                    Funds get sent to a secret blockchain wallet which is
                    confirmed and withdrawn using the private keys. This ensures
                    that the privacy-enhanced transfer is seamlessly integrated
                    into the broader blockchain network without revealing
                    intrinsic details.
                  </h1>
                </div>
              </div>
            </div>
          </div> */
}
