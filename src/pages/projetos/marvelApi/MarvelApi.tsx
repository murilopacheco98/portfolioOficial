import React, { useState } from "react";
import { Abas } from "../../../components/Abas";
import { Sidebar } from "../../../components/Sidebar";
import { useAppSelector } from "../../../store/hooks";

export const MarvelApi = () => {
  const [on, setOn] = useState<boolean>();
  const [explorer, setExplorer] = useState<boolean>(true);

  const light = Object.values(useAppSelector((store) => store.toggle.entities));

  return (
    <div className="flex">
      <Sidebar explorer={explorer} setExplorer={setExplorer} setOn={setOn} on={on} />
      {on && (
        <div className="overflow-y-scroll h-[calc(100vh-25px)] mt-[25px] bg-opacity-[1%] bg-[#070419] w-[calc(100vw-200px)]">
          <Abas />
          <div className="font-semibold flex justify-center mt-[20px] mb-[20px] text-[24px]">
            Marvel API
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto foi realizado
              utilizando a api disponibilizada pela marvel, no qual ela permite
              acessar os dados da maioria do universo marvel, porém neste
              projeto foram utilizadas apenas informações a respeito os
              heróis, quadrinhos, eventos, criadores.
            </div>
            <br />
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Após clicar nos cards de entrada, o
              usuário é direcionado para para uma seção, que possui tudo daquela
              seção separada em cards e paginação, no caso dos heróis ela mostra
              o que a api disponibiliza a respeito deles. Ao clicar no card do
              herói ele mostra informações mais específicas sobre ele. Além
              disso é possível pesquisar o herói que deseja.
            </div>
          </div>
        </div>
      )}
      {!on && light[0] !== undefined && (
        <div className="overflow-y-scroll h-[calc(100vh-25px)] mt-[25px] text-white bg-opacity-95 bg-[#070419] w-[calc(100vw-200px)]">
          <Abas />
          <div className="font-semibold flex justify-center mt-[20px] mb-[20px] text-[20px]">
            Marvel API
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto foi realizado
              utilizando a api disponibilizada pela marvel, no qual ela permite
              acessar os dados sobre os heróis, quadrinhos, eventos, criadores.
            </div>
            <br />
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Após clicar nos cards de entrada que
              encaminham para uma seção, que possui tudo daquela seção separada
              em cards e paginação, no caso dos heróis ela mostra o que a api
              disponibiliza a respeito deles. Ao clicar no card do herói ele
              mostra informações mais específicas sobre ele. Além disso é
              possível pesquisar o herói que deseja.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
