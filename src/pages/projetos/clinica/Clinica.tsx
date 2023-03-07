import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Abas } from "../../../components/Abas";
import { Sidebar } from "../../../components/Sidebar";
import { useAppSelector } from "../../../store/hooks";

export const Clinica = () => {
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
          <div className="font-semibold flex justify-center mt-[20px] mb-[10px] text-[24px]">
            Sistema de clínica
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto possui cadastro e
              login, natto do paciente quanto do médicao. O cadastro está com
              formik e yup para validações. O sistema possui authorização e
              autenticação de acesso.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemLogin.JPG")}
                      alt="login"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemCadastro.JPG")}
                      alt="cadastro"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No geral o projeto é composto por 3
              roles: paciente, medico e o adm. No qual o paciente tem a
              possibilidade de ver as informações do site sobre o assunto,
              pesquisar sobre a especilidade, exame ou procedimento que ele
              deseja, após isso marcar as suas consultas. Marcada a consulta, o
              paciente pode ver seus agendamentos. Feita a consulta é possível o
              médico adicionar o resultado na consulta no site para o paciente
              ver.
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
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/Imagem6.JPG")}
                      alt="paciente 6"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/Imagem7.JPG")}
                      alt="paciente 7"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/Imagem8.JPG")}
                      alt="paciente 8"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role médico consegue gerenciar
              seus comprimissos e paciente. Ele pode ver e montar a agenda dele,
              ver seus pacientes e suas consultas realizadas.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade variant="dark">
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemMedico1.JPG")}
                      alt="medico 1"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemMedico2.JPG")}
                      alt="medico 2"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemMedico3.JPG")}
                      alt="medico 3"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemMedico4.JPG")}
                      alt="medico 4"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role adm tem uma visão geral da
              aplicação para controle e monitoramento. Além de fazer o
              gerenciamento da aplicação: os pacientes, medicos, especialidades,
              consultas, agendamentos, exames e procedimentos.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade variant="dark">
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemAdmin1.JPG")}
                      alt="admin 1"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemAdmin2.JPG")}
                      alt="admin 2"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemAdmin3.JPG")}
                      alt="admin 3"
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
          <div className="font-semibold flex justify-center mt-[20px] mb-[10px] text-[20px]">
            Sistema de clínica
          </div>
          <div className="mb-[40px] font-light mx-[5vw] lg:mx-[10vw] text-[16px] lg:text-[18px] text-justify">
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto possui cadastro e
              login, tanto do paciente quanto do médicao. O cadastro está com
              formik e yup para validações. O sistema possui authorização e
              autenticação de acesso.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade variant="dark">
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemLogin.JPG")}
                      alt="login"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemCadastro.JPG")}
                      alt="cadastro"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No geral o projeto é composto por 3
              roles: paciente, medico e o adm. No qual o paciente tem a
              possibilidade de ver as informações do site sobre o assunto,
              pesquisar sobre a especilidade, exame ou procedimento que ele
              deseja, após isso marcar as suas consultas. Marcada a consulta, o
              paciente pode ver seus agendamentos. Feita a consulta é possível o
              médico adicionar o resultado na consulta no site para o paciente
              ver.
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
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/Imagem6.JPG")}
                      alt="paciente 6"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/Imagem7.JPG")}
                      alt="paciente 7"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/Imagem8.JPG")}
                      alt="paciente 8"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role médico consegue gerenciar
              seus comprimissos e paciente. Ele pode ver e montar a agenda dele,
              ver seus pacientes e suas consultas realizadas.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade variant="dark">
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemMedico1.JPG")}
                      alt="medico 1"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemMedico2.JPG")}
                      alt="medico 2"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemMedico3.JPG")}
                      alt="medico 3"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemMedico4.JPG")}
                      alt="medico 4"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A role adm tem uma visão geral da
              aplicação para controle e monitoramento. Além de fazer o
              gerenciamento da aplicação: os pacientes, medicos, especialidades,
              consultas, agendamentos, exames e procedimentos.
            </div>
            <div className="flex justify-center">
              <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
                <Carousel fade variant="dark">
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemAdmin1.JPG")}
                      alt="admin 1"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemAdmin2.JPG")}
                      alt="admin 2"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block h-[400px]"
                      src={require("../../../assets/clinica/ImagemAdmin3.JPG")}
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
