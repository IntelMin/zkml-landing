import { navEle } from "@/components/hero/nav-ele";
import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const NavbarMobile = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={`h-screen md:hidden ${
        isOpen ? "max-md:w-[250px]" : "max-md:w-0 max-md:px-0"
      } max-md:overflow-hidden transition-all`}
    >
      <div
        className={`fixed z-[100] h-[100vh] ${
          isOpen ? "max-md:w-screen" : "max-md:w-0"
        } max-md:overflow-hidden transition-all bg-[#000000] p-4`}
      >
        <div onClick={() => setIsOpen(false)} className="flex justify-end">
          <IoCloseOutline className="text-5xl text-white" />
        </div>
        <div className="flex h-[90dvh] flex-col">
          <div className="flex flex-1 flex-col items-start p-5">
            {navEle?.map((item) => (
              <button
                key={item?.name}
                onClick={() => {
                  const ele = document.querySelector(item?.href);
                  ele?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsOpen(false);
                }}
                className="border-b-[2px] border-b-transparent pb-[12px] pt-[19px] text-[36px] font-[520] text-white hover:border-white hover:text-[#38E5FF]"
              >
                {item.name}
              </button>
            ))}
          </div>
          <Link
            href="https://zkml.systems/"
            className="mx-auto w-[180px] rounded-[12px] bg-white px-10 py-3 text-center text-black"
          >
            dApp
          </Link>
        </div>
      </div>
    </div>
  );
};
