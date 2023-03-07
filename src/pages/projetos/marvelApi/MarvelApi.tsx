import React, { useState } from "react";
import { Abas } from "../../../components/Abas";
import { Sidebar } from "../../../components/Sidebar";
import { useAppSelector } from "../../../store/hooks";
import Carousel from "react-bootstrap/Carousel";

export const MarvelApi = () => {
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
            Marvel API
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
            Link do projeto:
            <a
              href="https://marvelmundo.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              marvelmundo.netlify.app
            </a>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto foi realizado
              utilizando a api disponibilizada pela marvel, no qual ela permite
              acessar os dados da maioria do universo marvel, porém neste
              projeto foram utilizadas apenas informações a respeito os heróis,
              quadrinhos, eventos, criadores.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/marvelApi/Imagem1.JPG")}
                      alt="Página de entrada"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
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
              seção separada em cards e paginação, no caso dos heróis ela mostra
              o que a api disponibiliza a respeito deles. Ao clicar no card do
              herói ele mostra informações mais específicas sobre ele. Além
              disso é possível pesquisar o herói que deseja.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block  h-[400px]"
                      src={require("../../../assets/marvelApi/Imagem3.JPG")}
                      alt="Cards seção pesquisada"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block  h-[400px]"
                      src={require("../../../assets/marvelApi/Imagem4.JPG")}
                      alt="Cards pesquisados na barra de pesquisa"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/marvelApi/Imagem5.JPG")}
                      alt="Informações do card"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
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
            Marvel API
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
            <div className="mb-[10px]">
              Link do projeto: &nbsp;
              <a
                href="https://marvelmundo.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                marvelmundo.netlify.app
              </a>
            </div>
            <div className="mb-[10px]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto foi realizado
              utilizando a api disponibilizada pela marvel, no qual ela permite
              acessar os dados sobre os heróis, quadrinhos, eventos, criadores.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/marvelApi/Imagem1.JPG")}
                      alt="Página de entrada"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/marvelApi/Imagem2.JPG")}
                      alt="Menu"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Após clicar nos cards de entrada que
              encaminham para uma seção, que possui tudo daquela seção separada
              em cards e paginação, no caso dos heróis ela mostra o que a api
              disponibiliza a respeito deles. Ao clicar no card do herói ele
              mostra informações mais específicas sobre ele. Além disso é
              possível pesquisar o herói que deseja.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block  h-[400px]"
                      src={require("../../../assets/marvelApi/Imagem3.JPG")}
                      alt="Cards seção pesquisada"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block  h-[400px]"
                      src={require("../../../assets/marvelApi/Imagem4.JPG")}
                      alt="Cards pesquisados na barra de pesquisa"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/marvelApi/Imagem5.JPG")}
                      alt="Informações do card"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
