import React, { useState } from "react";
import { Links } from "../../components/Links";
import { Sidebar } from "../../components/Sidebar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import {
  AbaPageProps,
  addPage,
} from "../../store/modules/abaPage/AbaPageSlice";

export const Home = () => {
  const [on, setOn] = useState<boolean>();
  const navigate = useNavigate();
  const [explorer, setExplorer] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const abaPage = (input: AbaPageProps) => {
    dispatch(
      addPage({
        id: input.id,
        name: input.name,
        urlName: input.urlName,
        link: input.link,
      })
    );
  };

  const light = on ? "opacity-[5%]" : "opacity-[100%]";
  const lightImage = on ? "100%" : "6%";
  const text = on ? "text-black" : "text-white";

  const sliderWidth = explorer
    ? "w-[calc(100vw-202px)]"
    : "w-[calc(100vw-47px)]";

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: explorer ? 1 : 2,
      partialVisibilityGutter: explorer ? 120 : 25,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  return (
    <div className="flex">
      <Sidebar
        explorer={explorer}
        setExplorer={setExplorer}
        on={on}
        setOn={setOn}
        menu={menu}
        setMenu={setMenu}
      />
      <div
        className={
          explorer || menu
            ? `font-serif flex w-[120px] md:w-[150px] text-center absolute ${text} text-[24px] z-10 ml-[163px] mt-[68px] md:mt-[65px] md:ml-[223px]`
            : `font-serif flex w-[120px] md:w-[150px] text-center absolute ${text} text-[24px] z-10 ml-[93px] mt-[60px] md:mt-[20px] md:ml-[63px]`
        }
      >
        <div className="mt-[20px] text-[24px] md:text-[30px]">
          <AiOutlineArrowLeft />
        </div>
        <div className="text-[20px] mt-[5px] md:text-[24px]">Meus Projetos</div>
      </div>
      <div onClick={() => setMenu(false)} className="relative flex ">
        <div className={`${light} bg-[#070419]  mt-[25px] `}>
          <div
            className={
              explorer
                ? `pb-[80px] h-[calc(100vh-25px)] w-[100vw] md:w-[calc(100vw-202px)]`
                : `pb-[80px] h-[calc(100vh-25px)] w-[100vw] md:w-[calc(100vw-47px)]`
            }
            style={{
              backgroundImage: `url("https://www.rededorsaoluiz.com.br/assets/imgs/bg_footer.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: `${lightImage}`,
              zIndex: 0,
            }}
          />
        </div>
        <div className="absolute flex flex-col text-end items-end mt-[25px] w-[95%]">
          <div className={`${text} mr-[15px] font-serif mt-[20px]`}>
            Projeto destaque
          </div>
          {/* <div>
            <img
              className="h-[50px] w-[140px]"
              src={require("../../assets/home/coroa.png")}
              alt="paciente 1"
            />
          </div> */}
          <div
            className="z-10 relative cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate("/projetos/clinica");
              abaPage({
                id: 1,
                name: "Clinica",
                urlName: "clinica",
                link: "/projetos/clinica",
              });
            }}
          >
            <div>
              <img
                className="h-[100px] w-[140px] "
                src={require("../../assets/home/coroa.png")}
                alt="paciente 1"
              />
            </div>
            <div
              className={`font-serif text-[14px] absolute w-[100px] ml-[20px] mt-[-65px] ${text} flex justify-center text-center`}
            >
              Sistema de Clínica
            </div>
          </div>
        </div>
        <div
          className={`absolute z-10 flex justify-center mt-[225px] md-lg:mt-[185px] ml-[50px] w-[calc(100%-50px)] ${text} justify-center flex flex-col`}
        >
          <div className="flex justify-center ml-[-50px]">
            <div className="px-[5px] flex justify-center">
              <img
                className="h-[160px] md:h-[190px] lg:h-[220px] w-[125px]"
                src={require("../../assets/home/meuAvatar.png")}
                alt="paciente 1"
              />
            </div>
            <div>
              <div className="text-[30px] sm:text-[38px] lg:text-[48px] text-center  font-serif">
                Murilo Pacheco
              </div>
              <div className="text-[13px] sm:text-[16px] text-center font-extralight lg:text-[20px]">
                O sucesso é a soma de pequenos esforços, <br /> repetidos dia
                após dia.
              </div>
              <div className="mt-[10px] flex justify-center">
                <Links />
              </div>
            </div>
          </div>
        </div>
        <div className={`absolute ${text}  `}>
          <div
            className={`my-[20px] mt-[450px] ${sliderWidth} flex items-center text-center justify-center`}
          >
            <Carousel
              swipeable={false}
              // draggable={false}
              partialVisbile={true}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass={`w-[85%] ml-[7.5%] md:ml-[0%] lg:w-[80%] lg:ml-[0%]`}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="px-[5px]">
                <img
                  className="h-[230px] w-[450px] sm:h-[200px] sm:w-[350px]"
                  src={require("../../assets/clinica/Imagem2.JPG")}
                  alt="paciente 1"
                />
              </div>
              <div className="px-[5px]">
                <img
                  className="h-[230px] w-[450px] sm:h-[200px] sm:w-[350px]"
                  src={require("../../assets/marvelApi/Imagem1.JPG")}
                  alt="paciente 2"
                />
              </div>
              <div className="px-[5px]">
                <img
                  className="h-[230px] w-[450px] sm:h-[200px] sm:w-[350px]"
                  src={require("../../assets/sistemaDeVagas/Imagem3.JPG")}
                  alt="paciente3"
                />
              </div>
              <div className="px-[5px]">
                <img
                  className="h-[230px] w-[450px] sm:h-[200px] sm:w-[350px]"
                  src={require("../../assets/ossystem/TecnicosGet.JPG")}
                  alt="paciente 4"
                />
              </div>
              <div className="px-[5px]">
                <img
                  className="h-[230px] w-[450px] sm:h-[200px] sm:w-[350px]"
                  src={require("../../assets/crudRecados/Imagem5.JPG")}
                  alt="paciente 5"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
