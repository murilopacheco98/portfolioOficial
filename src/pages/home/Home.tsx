import React, { useState } from "react";
import { Links } from "../../components/Links";
import { Sidebar } from "../../components/Sidebar";

export const Home = () => {
  const [on, setOn] = useState<boolean>();
  const [explorer, setExplorer] = useState<boolean>(true);

  return (
    <div className="flex">
      <Sidebar explorer={explorer} setExplorer={setExplorer} on={on} setOn={setOn} />
      {on && (
        <div className="pb-[80px] mt-[25px] flex flex-col items-center justify-center bg-opacity-[1%] bg-[#070419] w-[calc(100vw-200px)]">
          <div className="text-[38px] lg:text-[48px] font-serif">
            Murilo Pacheco
          </div>
          <div className="text-[16px] text-center font-extralight lg:text-[20px]">
            O sucesso é a soma de pequenos esforços, <br /> repetidos dia após
            dia.
          </div>
          <div className="mt-[10px]">
            <Links />
          </div>
        </div>
      )}
      {!on && (
        <div className="pb-[80px] mt-[25px] flex flex-col items-center justify-center bg-opacity-95 text-white bg-[#070419] w-[calc(100vw-200px)]">
          <div className="text-[38px] lg:text-[48px] font-serif">
            Murilo Pacheco
          </div>
          <div className="text-[16px] text-center font-extralight lg:text-[20px]">
            O sucesso é a soma de pequenos esforços, <br /> repetidos dia após
            dia.
          </div>
          <div className="mt-[10px]">
            <Links />
          </div>
        </div>
      )}
    </div>
  );
};
