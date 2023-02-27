import React, { useState, useEffect } from "react";
import { Abas } from "../../../components/Abas";
import { Sidebar } from "../../../components/Sidebar";
import { useAppSelector } from "../../../store/hooks";

export const Clinica = () => {
  const [on, setOn] = useState<boolean>();
  const [explorer, setExplorer] = useState<boolean>(true);

  const light = Object.values(useAppSelector((store) => store.toggle.entities));

  return (
    <div className="flex">
      <Sidebar explorer={explorer} setExplorer={setExplorer} setOn={setOn} on={on} />
      {on && (
        <div className="overflow-y-scroll h-[calc(100vh-25px)] mt-[25px] bg-opacity-[1%] bg-[#070419] w-[calc(100vw-200px)]">
          <Abas />
          <div className="font-semibold flex justify-center mt-[20px] mb-[10px] text-[24px]">
            Sistema de clínica
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto possui cadastro e
              login. O cadastro está com formik e yup para validações. O sistema
              possui authorização e autenticação de acesso.
            </div>
            <br />
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No geral o projeto é composto por 3
              roles: candidato, parceiro e o adm. No qual o candidato tem a
              possibilidade ver e analisar as vagas disponíveis e então se
              candidatar nelas, após isso ele pode ver as vagas em que se
              candidatou.
            </div>
            <br />
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role parceiro consegue subir as
              vagas na aplicação, gerencia-las e ver quem se candidatou nelas,
              junto com os dados para contato.
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role adm tem uma visão geral da
              aplicação para controle e monitoramento. Além de fazer o
              gerenciamento da aplicação: as vagas, empresas parceiras,
              candidatos e parceiros.
            </div>
          </div>
        </div>
      )}
      {!on && light[0] !== undefined && (
        <div className="overflow-y-scroll h-[calc(100vh-25px)] mt-[25px] text-white bg-opacity-95 bg-[#070419] w-[calc(100vw-200px)]">
          <Abas />
          <div className="font-semibold flex justify-center mt-[20px] mb-[10px] text-[20px]">
            Sistema de clínica
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto possui cadastro e
              login. O cadastro está com formik e yup para validações. O sistema
              possui authorização e autenticação de acesso.
            </div>
            <br />
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No geral o projeto é composto por 3
              roles: candidato, parceiro e o adm. No qual o candidato tem a
              possibilidade ver e analisar as vagas disponíveis e então se
              candidatar nelas, após isso ele pode ver as vagas em que se
              candidatou.
            </div>
            <br />
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role parceiro consegue subir as
              vagas na aplicação, gerencia-las e ver quem se candidatou nelas,
              junto com os dados para contato.
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role adm tem uma visão geral da
              aplicação para controle e monitoramento. Além de fazer o
              gerenciamento da aplicação: as vagas, empresas parceiras,
              candidatos e parceiros.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
