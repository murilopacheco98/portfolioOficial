import React, { useState } from "react";
import { Links } from "../../components/Links";
import { Sidebar } from "../../components/Sidebar";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Home = () => {
  const [on, setOn] = useState<boolean>();
  const [explorer, setExplorer] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(false);

  const light = on ? "opacity-[5%]" : "opacity-[100%]";
  const lightImage = on ? "100%" : "4%";
  const text = on ? "text-black" : "text-white";

  return (
    <div className="flex">
      <Sidebar
        explorer={explorer}
        setExplorer={setExplorer}
        on={on}
        setOn={setOn}
        menu={menu}
        setMenu={setMenu}
      />
      <div
        className={
          explorer || menu
            ? `font-serif flex w-[150px] text-center absolute ${text} text-[24px] z-10 ml-[153px] mt-[65px] sm:mt-[65px] sm:ml-[223px]`
            : `font-serif flex w-[150px] text-center absolute ${text} text-[24px] z-10 ml-[93px] mt-[55px] sm:mt-[20px] sm:ml-[63px]`
        }
      >
        <div className="mt-[20px] text-[30px]">
          <AiOutlineArrowLeft />
        </div>
        <div> Meus Projetos</div>
      </div>
      <div className="relative flex justify-center items-center">
        <div className={`${light} bg-[#070419]  mt-[25px] `}>
          <div
            onClick={() => setMenu(false)}
            className={
              explorer
                ? `pb-[80px] h-[calc(100vh-25px)] w-[100vw] sm:w-[calc(100vw-203px)]`
                : `pb-[80px] h-[calc(100vh-25px)] w-[100vw] sm:w-[calc(100vw-47px)]`
            }
            style={{
              backgroundImage: `url("https://www.rededorsaoluiz.com.br/assets/imgs/bg_footer.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: `${lightImage}`,
              zIndex: 0,
            }}
          />
        </div>

        <div className={`absolute ${text} `}>
          <div className="text-[38px] lg:text-[48px] font-serif">
            Murilo Pacheco
          </div>
          <div className="text-[16px] text-center font-extralight lg:text-[20px]">
            O sucesso é a soma de pequenos esforços, <br /> repetidos dia após
            dia.
          </div>
          <div className="mt-[10px] flex justify-center">
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
};
