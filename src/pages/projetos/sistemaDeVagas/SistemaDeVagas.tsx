import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Abas } from "../../../components/Abas";
import { Sidebar } from "../../../components/Sidebar";

export const SistemaDeVagas = () => {
  const [on, setOn] = useState<boolean>();
  const [explorer, setExplorer] = useState<boolean>(true);

  return (
    <div className="flex">
      <Sidebar
        explorer={explorer}
        setExplorer={setExplorer}
        setOn={setOn}
        on={on}
      />
      {on && (
        <>
          <div
            className={
              explorer
                ? "overflow-y-scroll relative mt-[25px] bg-opacity-[1%] h-[calc(100vh-25px)] bg-[#070419] w-[calc(100vw-200px)]"
                : "overflow-y-scroll ml-[47px] relative mt-[25px] bg-opacity-[1%] h-[calc(100vh-25px)] bg-[#070419] w-[calc(100vw-47px)]"
            }
          >
            <Abas light={on} />
            <div className="font-semibold flex justify-center mt-[20px] mb-[20px] text-[24px]">
              Sistema de vagas
            </div>
            <div className="mb-[40px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto possui cadastro e
                login. O cadastro está com formik e yup para validações. O
                sistema possui authorização e autenticação de acesso.
              </div>
              <div className="flex justify-center">
                <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                  <Carousel fade>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/Imagem1.JPG")}
                        alt="Login"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/Imagem2.JPG")}
                        alt="Cadastro"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No geral o projeto é composto por
                3 roles: candidato, parceiro e o adm. No qual o candidato tem a
                possibilidade ver e analisar as vagas disponíveis e então se
                candidatar nelas, após isso ele pode ver as vagas em que se
                candidatou.
              </div>
              <div className="flex justify-center">
                <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                  <Carousel fade>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/Imagem3.JPG")}
                        alt="candidato 1"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/Imagem4.JPG")}
                        alt="candidato 2"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/Imagem5.JPG")}
                        alt="candidato 3"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/Imagem6.JPG")}
                        alt="candidato 4"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/Imagem8.JPG")}
                        alt="candidato 6"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/Imagem9.JPG")}
                        alt="candidato 7"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role parceiro consegue subir as
                vagas na aplicação, gerencia-las e ver quem se candidatou nelas,
                junto com os dados para contato.
              </div>
              <div className="flex justify-center">
                <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                  <Carousel fade>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/ImagemParceiro1.JPG")}
                        alt="Login"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/ImagemParceiro2.JPG")}
                        alt="Cadastro"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role admin tem uma visão geral
                da aplicação para controle e monitoramento. Além de fazer o
                gerenciamento da aplicação: as vagas, empresas parceiras,
                candidatos e parceiros.
              </div>
              <div className="flex justify-center">
                <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                  <Carousel fade>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/ImagemAdmin1.JPG")}
                        alt="admin 3"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/ImagemAdmin2.JPG")}
                        alt="admin 2"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block h-[400px]"
                        src={require("../../../assets/sistemaDeVagas/ImagemAdmin3.JPG")}
                        alt="admin 3"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {!on && (
        <div
          className={
            explorer
              ? "overflow-y-scroll text-white relative mt-[25px] bg-opacity-[95%] h-[calc(100vh-25px)] bg-[#070419] w-[calc(100vw-200px)]"
              : "overflow-y-scroll ml-[47px] text-white relative mt-[25px] bg-opacity-[95%] h-[calc(100vh-25px)] bg-[#070419] w-[calc(100vw-47px)]"
          }
        >
          <Abas light={on} />
          <div className="font-semibold flex justify-center mt-[20px] mb-[20px] text-[24px]">
            Sistema de vagas
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto possui cadastro e
              login. O cadastro está com formik e yup para validações. O sistema
              possui authorização e autenticação de acesso.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/Imagem1.JPG")}
                      alt="Login"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/Imagem2.JPG")}
                      alt="Cadastro"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No geral o projeto é composto por 3
              roles: candidato, parceiro e o adm. No qual o candidato tem a
              possibilidade ver e analisar as vagas disponíveis e então se
              candidatar nelas, após isso ele pode ver as vagas em que se
              candidatou.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/Imagem3.JPG")}
                      alt="candidato 1"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/Imagem4.JPG")}
                      alt="candidato 2"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/Imagem5.JPG")}
                      alt="candidato 3"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/Imagem6.JPG")}
                      alt="candidato 4"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/Imagem8.JPG")}
                      alt="candidato 6"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/Imagem9.JPG")}
                      alt="candidato 7"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role parceiro consegue subir as
              vagas na aplicação, gerencia-las e ver quem se candidatou nelas,
              junto com os dados para contato.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/ImagemParceiro1.JPG")}
                      alt="Login"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/ImagemParceiro2.JPG")}
                      alt="Cadastro"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role adm tem uma visão geral da
              aplicação para controle e monitoramento. Além de fazer o
              gerenciamento da aplicação: as vagas, empresas parceiras,
              candidatos e parceiros.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/ImagemAdmin1.JPG")}
                      alt="admin 3"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/ImagemAdmin2.JPG")}
                      alt="admin 2"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/sistemaDeVagas/ImagemAdmin3.JPG")}
                      alt="admin 3"
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
