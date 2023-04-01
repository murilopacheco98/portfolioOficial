import React, { useState } from "react";
import { Abas } from "../../../components/Abas";
import { Sidebar } from "../../../components/Sidebar";
import Carousel from "react-bootstrap/Carousel";
import { AiOutlineMenu } from "react-icons/ai";

export const MarvelApi = () => {
  const [on, setOn] = useState<boolean>();
  const [explorer, setExplorer] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(false);

  // const light = Object.values(useAppSelector((store) => store.toggle.entities));
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
        onClick={() => {
          menu && setMenu(false);
        }}
        className={
          explorer
            ? `overflow-y-scroll relative mt-[25px] ${textOn} ${lightOn} h-[calc(100vh-25px)] bg-[#070419]`
            : `overflow-y-scroll relative mt-[25px] ${textOn} ${lightOn} h-[calc(100vh-25px)] bg-[#070419]`
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
          <div className="w-[calc(80%-30px)] md:w-[100%] font-semibold flex justify-center mt-[10px] mb-[20px] text-[24px]">
            Marvel API
          </div>
        </div>
        <div className="mb-[40px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
          <div className="mb-[20px]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Link do projeto: &nbsp;
            <a
              href="https://marvelmundo.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              marvelmundo.netlify.app
            </a>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto foi realizado utilizando
            a api disponibilizada pela marvel, no qual ela permite acessar os
            dados da maioria do universo marvel, porém neste projeto foram
            utilizadas apenas informações a respeito os heróis, quadrinhos,
            eventos, criadores.
          </div>
          <div className="flex justify-center">
            <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
              <Carousel fade>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/marvelApi/Imagem1.JPG")}
                    alt="Página de entrada"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/marvelApi/Imagem2.JPG")}
                    alt="Menu"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Após clicar nos cards de entrada, o
            usuário é direcionado para para uma seção, que possui tudo daquela
            seção separada em cards e paginação, no caso dos heróis ela mostra o
            que a api disponibiliza a respeito deles. Ao clicar no card do herói
            ele mostra informações mais específicas sobre ele. Além disso é
            possível pesquisar o herói que deseja.
          </div>
          <div className="flex justify-center">
            <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
              <Carousel fade>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/marvelApi/Imagem3.JPG")}
                    alt="Cards seção pesquisada"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/marvelApi/Imagem4.JPG")}
                    alt="Cards pesquisados na barra de pesquisa"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/marvelApi/Imagem5.JPG")}
                    alt="Informações do card"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
