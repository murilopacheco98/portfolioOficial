import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Abas } from "../../../components/Abas";
import { Sidebar } from "../../../components/Sidebar";

export const OrderService = () => {
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
        className={
          explorer
            ? `overflow-y-scroll relative mt-[25px] ${textOn} ${lightOn} h-[calc(100vh-25px)] bg-[#070419]`
            : `overflow-y-scroll relative mt-[25px] ${textOn} ${lightOn} h-[calc(100vh-25px)] bg-[#070419]`
        }
      >
        <Abas light={on} />
        <div className="font-semibold flex justify-center mt-[20px] mb-[20px] text-[24px]">
          Sistema de pedidos de serviço
        </div>
        <div className="mb-[20px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
          Link do projeto: &nbsp;&nbsp;
          <a
            href="https://ossystem.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            https://ossystem.netlify.app
          </a>
        </div>
        <div className="mb-[40px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto foi desenvolvido
            utilizando spring boot/angular, é um projeto simples e funcional no
            qual o administrador pode controlar os clientes e técnicos do
            sistema, assim como gerenciar os pedidos feitos pelos clientes por
            ordem de urgência e analisar o serviço e sua conclusão.
          </div>
          <div className="flex justify-center">
            <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
              <Carousel fade>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/ossystem/Home.JPG")}
                    alt="home"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/ossystem/OsCreate.JPG")}
                    alt="Cadastro"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/ossystem/TecnicoCreate.JPG")}
                    alt="Cadastro"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/ossystem/TecnicosGet.JPG")}
                    alt="Cadastro"
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
