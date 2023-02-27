import { light } from "@mui/material/styles/createPalette";
import React, { useState, useEffect } from "react";
import { Abas } from "../../components/Abas";
import { Sidebar } from "../../components/Sidebar";
import { useAppSelector } from "../../store/hooks";

export const Formacao = () => {
  const [on, setOn] = useState<boolean>();
  const [explorer, setExplorer] = useState<boolean>(true);

  const light = Object.values(useAppSelector((store) => store.toggle.entities));

  return (
    <div className="flex">
      <Sidebar
        explorer={explorer}
        setExplorer={setExplorer}
        setOn={setOn}
        on={on}
      />
      {on && (
        <div
          className={
            explorer
              ? "overflow-y-scroll relative mt-[25px] bg-opacity-[1%] h-[calc(100vh-25px)] bg-[#070419] w-[calc(100vw-200px)]"
              : "overflow-y-scroll ml-[47px] relative mt-[25px] bg-opacity-[1%] h-[calc(100vh-25px)] bg-[#070419] w-[calc(100vw-47px)]"
          }
        >
          <Abas light={on} />
          <div className="font-semibold flex justify-center mt-[20px] mb-[20px] text-[24px]">
            Formação
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            FEV 2022 – FEV 2023 <br />
            <div className="font-bold mb-[5px]">
              Programa Full Stack Web developer - GROWDEV
            </div>
            Curso de programação Full Stack do início ao avançado em react para
            front-end e spring-boot para back-end. Ao longo do curso e no final
            dele foram desenvolvidos projetos utilizando os conhecimentos
            aprendidos, além de uma boa base na programação. <br /> <br />
            MAIO 2018 <br />
            <div className="font-bold mb-[5px]">
              Universidade Federal da Grande Dourados Bacharelado em Engenharia
              Mecânica
            </div>
            Curso de engenharia mecânica focado em 4 frentes: transferência de
            calor, análise de materiais, mecânica dos fluidos e vibrações.
            Durante o curso foi onde conheci um pouco sobre programação, no qual
            eu utilizei para análise de vibrações (meu tcc foi sobre isso) e
            análise da mecânica dos fluidos.
          </div>
          <div className="flex h-[150px] lg:h-[200px] justify-center">
            <img
              src={require("../../assets/growdev.png")}
              style={{ border: "2px" }}
            />
            <img src={require("../../assets/ufgd.png")} />
          </div>
        </div>
      )}
      {!on && light[0] !== undefined && (
        <div
          className={
            explorer
              ? "overflow-y-scroll text-white relative mt-[25px] bg-opacity-[95%] h-[calc(100vh-25px)] bg-[#070419] w-[calc(100vw-200px)]"
              : "overflow-y-scroll ml-[47px] text-white relative mt-[25px] bg-opacity-[95%] h-[calc(100vh-25px)] bg-[#070419] w-[calc(100vw-47px)]"
          }
        >
          <Abas light={on} />
          <div className="font-semibold flex justify-center mt-[20px] mb-[20px] text-[24px]">
            Formação
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            FEV 2022 – FEV 2023 <br />
            <div className="font-bold mb-[5px]">
              Programa Full Stack Web developer - GROWDEV
            </div>
            Curso de programação focado do início ao avançado em react para
            front-end e spring-boot para back-end. Ao longo do curso e no final
            dele foram desenvolvidos projetos utilizando os conhecimentos
            aprendidos, além de uma boa base na programação. <br /> <br />
            MAIO 2018 <br />
            <div className="font-bold mb-[5px]">
              Universidade Federal da Grande Dourados Bacharelado em Engenharia
              Mecânica
            </div>
            Curso de engenharia mecânica focado em 4 frentes: transferência de
            calor, análise de materiais, mecânica dos fluidos e vibrações.
            Durante o curso foi onde conheci um pouco sobre programação, no qual
            eu utilizei para análise de vibrações (meu tcc foi sobre isso) e
            análise da mecânica dos fluidos.
          </div>
          <div className="flex h-[150px] lg:h-[200px] justify-center">
            <img src={require("../../assets/growdev.png")} />
            <img src={require("../../assets/ufgd.png")} />
          </div>
        </div>
      )}
    </div>
  );
};
