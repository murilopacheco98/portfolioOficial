import React, { useState, useEffect } from "react";
import { Abas } from "../../../components/Abas";
import { Sidebar } from "../../../components/Sidebar";
import { useAppSelector } from "../../../store/hooks";

export const CrudRecados = () => {
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
            CRUD - Recados
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto possui cadastro e
              login. O cadastro está com formik e yup para validações e a senha
              está com botao para ver ou esconder. O sistema possui authorização
              e authenticação de acesso.
            </div>
            <br />
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O crud possui as 4 operações em
              todos os recados, o create, read, update e delete. O create e o
              update estão em um modal e o read está direcionado para os recados
              do usuário.
            </div>
            <br />
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Além disso possui a barra de
              pesquisa de recados e a paginação do material UI. A pesquisa é
              feita após o click no botão, e utilizando JpaSql no back-end.
            </div>
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
          <div className="font-semibold flex justify-center mt-[20px] mb-[20px] text-[20px]">
            CRUD - Recados
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto possui cadastro e
              login. O cadastro está com formik e yup para validações e a senha
              está com botao para ver ou esconder. O sistema possui authorização
              e authenticação de acesso.
            </div>
            <br />
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O crud possui as 4 operações em
              todos os recados, o create, read, update e delete. O create e o
              update estão em um modal e o read está direcionado para os recados
              do usuário.
            </div>
            <br />
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Além disso possui a barra de
              pesquisa de recados e a paginação do material UI. A pesquisa é
              feita após o click no botão, e utilizando JpaSql no back-end.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
