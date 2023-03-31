import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { FaJava, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiSpring,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import { Abas } from "../../components/Abas";
import { AiOutlineMenu } from "react-icons/ai";

export const Conhecimentos = () => {
  const [on, setOn] = useState<boolean>();
  const [explorer, setExplorer] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(false);

  const lightOn = on ? "bg-opacity-[1%]" : "bg-opacity-[95%]";
  const textOn = on ? "text-black" : "text-white";

  return (
    <div className="flex">
      <Sidebar
        explorer={explorer}
        setExplorer={setExplorer}
        setOn={setOn}
        on={on}
        menu={menu}
        setMenu={setMenu}
      />
      <div
        onClick={() => menu && setMenu(false)}
        className={
          explorer
            ? `overflow-y-scroll relative mt-[25px] ${lightOn} ${textOn} h-[calc(100vh-25px)] bg-[#070419]`
            : `overflow-y-scroll relative mt-[25px] ${lightOn} ${textOn} h-[calc(100vh-25px)] bg-[#070419]`
        }
      >
        <Abas light={on} />
        <div className="flex">
          <div
            onClick={() => {
              setMenu(true);
            }}
            className={
              on
                ? "w-[10%] cursor-pointer text-black text-[40px] ml-[30px] mt-[0px] md:hidden"
                : "w-[10%] cursor-pointer text-white text-[40px] ml-[30px] mt-[0px] md:hidden"
            }
          >
            <AiOutlineMenu />
          </div>
          <div className="w-[calc(80%-30px)] font-semibold flex justify-center mt-[10px] mb-[20px] text-[24px]">
            Conhecimentos
          </div>
        </div>
        <div className="font-light mb-[15px] mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          Full Stack Web Developer, possuo conhecimento em front-end, back-end,
          banco de dados, certificados Microsoft Azure e em tecnologias ágeis.
          Este portfólio foi feito utilizando react, redux, tailwind e
          typescript.
        </div>
        <div className="mb-[10px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          Front-end: Javascript, Typescript, React, Redux, Angular, Ngrx,
          Bootstrap, Tailwind, Material UI.
        </div>
        <div className="mb-[10px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          Back-end: Java, Spring Boot, Spring MVC, Spring Data, Spring Security,
          Oauth, JWT.
        </div>
        <div className="mb-[10px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          Banco de dados: Mysql, Postgresql e Redis.
        </div>
        <div className="mb-[10px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          Certificados Microsoft Azure: AZ-900, DP-900 e SC-900.
        </div>
        <div className="mb-[50px] lg:mb-[60px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          Tecnologias ágeis: Scrum Master e Green Belt Lean Six Sigma
        </div>
        <div className="flex justify-center">
          <div className="flex w-[400px] lg:w-[500px] justify-between text-[40px] lg:text-[50px]">
            <FaJava />
            <SiSpring />
            <SiJavascript />
            <SiTypescript />
            <FaReact />
            <SiPostgresql />
            <SiTailwindcss />
          </div>
        </div>
      </div>
    </div>
  );
};
