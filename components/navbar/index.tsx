"use client";

type Props = {};

const navEle = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Features",
    href: "#features",
  },
];

export const Navbar = (props: Props) => {
  return (
    <div className="relative">
      <div className="fixed left-0 top-[16px] z-[10] w-screen overflow-hidden max-md:hidden">
        <div className="relative flex w-full items-start justify-center">
          <div className="flex -translate-y-[1px] items-center gap-[114px] bg-[url(/background/navbar.png)] bg-contain bg-center bg-no-repeat px-[91px]">
            {navEle?.map((item) => (
              <button
                key={item?.name}
                onClick={() => {
                  const ele = document.querySelector(item?.href);
                  ele?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="border-b-[2px] border-b-transparent pb-[19px] pt-[19px] text-white hover:border-white hover:text-[#38E5FF]"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
