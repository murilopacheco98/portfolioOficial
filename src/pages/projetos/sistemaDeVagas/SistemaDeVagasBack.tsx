import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Abas } from "../../../components/Abas";
import { Sidebar } from "../../../components/Sidebar";

export const SistemaDeVagasBack = () => {
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
        onClick={() => setMenu(false)}
        className={
          explorer
            ? `overflow-y-scroll relative mt-[25px] ${textOn} ${lightOn} h-[calc(100vh-25px)] bg-[#070419]`
            : `overflow-y-scroll relative mt-[25px] ${textOn} ${lightOn} h-[calc(100vh-25px)] bg-[#070419]`
        }
      >
        <Abas light={on} />
        <div className="font-semibold flex justify-center mt-[20px] mb-[10px] text-[24px]">
          Sistema de clínica
        </div>
        <div className="mb-[40px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tecnologias utilizadas: Spring
            security, oauth, jwt, Spring Boot, Spring data JPA, lombok, Spring
            Web e Teste unitário.
            <br />
            Este projeto tem como objetivo conectar candidatos, empresas
            parceiros e administração, no qual as empresas ofertam vagas e os
            candidatos podem fazer suas candidaturas. Após isso a empresa faz a
            análise e decidi o futuro do candidato.
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; O sistema possui authorização e
            autenticação de acesso que utiliza o token jwt e oauth do spring
            security. O candidato cadastra e sobe suas informações na aplicação
            e pode candidatar e ver as vagas que ele se candidatou.
          </div>
          <div className="flex justify-center">
            <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
              <Carousel fade variant="dark">
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/clinica/Imagem1.JPG")}
                    alt="paciente 1"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/clinica/Imagem2.JPG")}
                    alt="paciente 2"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/clinica/Imagem3.JPG")}
                    alt="paciente3"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/clinica/Imagem4.JPG")}
                    alt="paciente 4"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/clinica/Imagem5.JPG")}
                    alt="paciente 5"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As empresas parceiras são cadastradas
            pelo adm e podem gerenciar suas vagas e os candidatos de cada vaga.
            O adm faz todo o gerenciamento da aplicação, o qual seriam os
            candidatos e as empresas parceiras.
          </div>
          <div className="flex justify-center">
            <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
              <Carousel fade variant="dark">
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/clinica/Imagem1.JPG")}
                    alt="paciente 1"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/clinica/Imagem2.JPG")}
                    alt="paciente 2"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/clinica/Imagem3.JPG")}
                    alt="paciente3"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/clinica/Imagem4.JPG")}
                    alt="paciente 4"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block h-[400px]"
                    src={require("../../../assets/clinica/Imagem5.JPG")}
                    alt="paciente 5"
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
