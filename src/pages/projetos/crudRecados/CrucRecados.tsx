import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Abas } from "../../../components/Abas";
import { Sidebar } from "../../../components/Sidebar";
import { AiOutlineMenu } from "react-icons/ai";

export const CrudRecados = () => {
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
        // setMenu={setMenu}
        menu={menu}
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
            CRUD - Recados
          </div>
        </div>
        <div className="mb-[40px] font-light mx-[5vw] lg:ml-[10vw] lg:mr-[12vw] text-[16px] lg:text-[18px] text-justify">
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto possui cadastro e login.
            O cadastro está com formik e yup para validações e a senha está com
            botao para ver ou esconder. O sistema possui authorização e
            authenticação de acesso.
          </div>
          <div className="flex justify-center">
            <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
              <Carousel fade variant="dark">
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/crudRecados/Imagem1.JPG")}
                    alt="Login"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/crudRecados/Imagem2.JPG")}
                    alt="Cadastro"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/crudRecados/Imagem3.JPG")}
                    alt="1"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/crudRecados/Imagem4.JPG")}
                    alt="2"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O crud possui as 4 operações em todos
            os recados, o create, read, update e delete. O create e o update
            estão em um modal e o read está direcionado para os recados do
            usuário.
          </div>
          <div className="flex justify-center">
            <div className="my-[20px] w-[800px] flex items-center text-center justify-center">
              <Carousel fade variant="dark">
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/crudRecados/Imagem5.JPG")}
                    alt="3"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/crudRecados/Imagem6.JPG")}
                    alt="4"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/crudRecados/Imagem7.JPG")}
                    alt="5"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block"
                    src={require("../../../assets/crudRecados/Imagem8.JPG")}
                    alt="6"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Além disso possui a barra de pesquisa
            de recados e a paginação do material UI. A pesquisa é feita após o
            click no botão, e utilizando JpaSql no back-end.
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
