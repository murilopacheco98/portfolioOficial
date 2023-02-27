import React, { useState, useEffect } from "react";
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

export const Conhecimentos = () => {
  const [on, setOn] = useState<boolean>();
  const [explorer, setExplorer] = useState<boolean>(true);

  return (
    <div className="flex">
      <Sidebar explorer={explorer} setExplorer={setExplorer} setOn={setOn} on={on} />
      {on && (
        <div className="overflow-y-scroll h-[calc(100vh-25px)] mt-[25px] bg-opacity-[1%] bg-[#070419] w-[calc(100vw-200px)]">
          <Abas />
          <div className="font-semibold flex justify-center mt-[20px] mb-[20px] text-[24px]">
            Conhecimentos
          </div>
          <div className="font-light mb-[15px] mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            Full Stack Web Developer, possuo conhecimento em front-end,
            back-end, banco de dados, certificados Microsoft Azure e em
            tecnologias ágeis. Este portfólio foi feito utilizando react, redux,
            tailwind e typescript.
          </div>
          <div className="mb-[10px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            Front-end: Javascript, Typescript, React, Redux, Bootstrap,
            Tailwind, Material UI.
          </div>
          <div className="mb-[10px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            Back-end: Java, Spring Boot, Spring MVC, Spring Data, Spring
            Security, Oauth, JWT.
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
      )}
      {!on && (
        <div className="overflow-y-scroll h-[calc(100vh-25px)] mt-[25px] text-white bg-opacity-95 bg-[#070419] w-[calc(100vw-200px)]">
          <Abas />
          <div className="font-semibold flex justify-center mt-[20px] mb-[20px] text-[24px]">
            Conhecimentos
          </div>
          <div className="font-light mb-[15px] mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            Full Stack Web Developer, possuo conhecimento em front-end,
            back-end, banco de dados, certificados Microsoft Azure e em
            tecnologias ágeis. Este portfólio foi feito utilizando react, redux,
            tailwind e typescript.
          </div>
          <div className="mb-[10px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            <span className="font-semibold">Front-end</span>: Javascript,
            Typescript, React, Redux, Bootstrap, Tailwind, Material UI.
          </div>
          <div className="mb-[10px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            <span className="font-semibold">Back-end</span>: Java, Spring Boot,
            Spring MVC, Spring Data, Spring Security, Oauth, JWT.
          </div>
          <div className="mb-[10px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            <span className="font-semibold">Banco de dados</span>: Mysql,
            Postgresql e Redis.
          </div>
          <div className="mb-[10px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            <span className="font-semibold">Certificados Microsoft Azure</span>:
            AZ-900, DP-900 e SC-900.
          </div>
          <div className="mb-[50px] lg:mb-[60px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            <span className="font-semibold">Tecnologias ágeis</span>: Scrum
            Master e Green Belt Lean Six Sigma.
          </div>
          <div className="flex justify-center">
            <div className="flex w-[400px] text-white lg:w-[500px] justify-between text-[40px] lg:text-[50px]">
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
      )}
    </div>
  );
};
