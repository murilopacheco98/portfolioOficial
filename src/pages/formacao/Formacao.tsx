import React, { useState } from "react";
import { Abas } from "../../components/Abas";
import { Sidebar } from "../../components/Sidebar";

export const Formacao = () => {
  const [on, setOn] = useState<boolean>();
  const [explorer, setExplorer] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(false);

  const lightOn = on ? "bg-opacity-[1%]" : "bg-opacity-[95%]";
  const textOn = on ? "text-black" : "text-white";

  return (
    <div className="flex ">
      <Sidebar
        explorer={explorer}
        setExplorer={setExplorer}
        setOn={setOn}
        on={on}
        menu={menu}
        setMenu={setMenu}
      />
        <div
          onClick={() => setMenu(false)}
          className={
            explorer
              ? `overflow-y-scroll relative mt-[25px] ${lightOn} ${textOn} h-[calc(100vh-25px)] bg-[#070419]`
              : `overflow-y-scroll relative mt-[25px] ${lightOn} ${textOn} h-[calc(100vh-25px)] bg-[#070419]`
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
            </div>
            Curso de engenharia focado em 4 frentes: transferência de
            calor, análise de materiais, mecânica dos fluidos e vibrações.
            Durante o curso foi onde conheci um pouco sobre programação, no qual
            eu utilizei para análises e validações de métodos.
          </div>
          <div className="flex h-[150px] lg:h-[200px] justify-center">
            <img
              src={require("../../assets/growdev.png")}
              alt="logo da growdev"
            />
            <img src={require("../../assets/ufgd.png")} alt="logo da ufgd" />
          </div>
        </div>
    </div>
  );
};
