import React, { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { FaReact } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";
import { useAppDispatch } from "../store/hooks";
import {
  turnOff,
  turnOn,
} from "../store/modules/toggle/ToggleSlice";
import { useNavigate } from "react-router-dom";
import { AbaPageProps, addPage } from "../store/modules/abaPage/AbaPageSlice";
import { Projects } from "./Projects";

interface ExplorerProps {
  setOn: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  on: boolean | undefined;
}

export const Explorer = (props: ExplorerProps) => {
  const { on } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [projects, setProjects] = useState<boolean>(true);
  const [clinica, setClinica] = useState<boolean>(false);
  const [crudRecados, setCrudRecados] = useState<boolean>(false);
  const [order, setOrder] = useState<boolean>(false);
  const [vagas, setVagas] = useState<boolean>(false);

  const [porfolio, setPortfolio] = useState<boolean>(true);

  const projectOn = () => {
    dispatch(
      turnOn({
        uid: 2,
        on: true,
      })
    );
    setProjects(true);
  };

  const projectOff = () => {
    dispatch(
      turnOff({
        uid: 2,
        on: false,
      })
    );
    setProjects(false);
  };

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

  return (
    <div
      className={
        on
          ? " mt-[25px] w-[155px] border-r-[2px] bg-opacity-0 bg-[#070419]"
          : "text-white mt-[25px] w-[155px] bg-[#070419] z-20"
      }
    >
      <div className="text-[12px] flex items-center h-[35px] ml-[10px] ">
        EXPLORER
      </div>
      <div
        className={
          on
            ? "w-[155px] border-r-[2px] bg-slate-50"
            : "w-[155px] border-r-[2px] bg-opacity-10 bg-white"
        }
      >
        <div
          onClick={() => {
            setPortfolio(!porfolio);
            // navigate("/");
          }}
          className="cursor-pointer font-bold text-[12px] flex items-center h-[25px] ml-[5px] "
        >
          <div className="mr-[5px] ml-[3px]">
            <SlArrowDown />
          </div>
          PORTFÓLIO HOME
        </div>
      </div>
      <div className="w-[155px] h-[calc(100vh-85px)]">
        {porfolio && (
          <div>
            <div
              onClick={() => {
                projects ? projectOff() : projectOn();
              }}
              className={
                on
                  ? "pl-[5px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  : "pl-[5px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              }
            >
              <div className="ml-[13px] mr-[5px]">
                {projects ? <SlArrowDown /> : <SlArrowRight />}
              </div>
              <div className="mr-[5px] text-[14px] text-green-500">
                <ImFolderOpen />
              </div>
              <div>projetos</div>
            </div>
            <Projects
              projects={projects}
              on={on}
              clinica={clinica}
              setClinica={setClinica}
              crudRecados={crudRecados}
              setCrudRecados={setCrudRecados}
              order={order}
              setOrder={setOrder}
              vagas={vagas}
              setVagas={setVagas}
            />
            <div
              onClick={() => {
                navigate("/geral");
                abaPage({
                  id: 6,
                  name: "Geral",
                  urlName: "geral",
                  link: "/geral",
                });
              }}
              className={
                on
                  ? "pl-[0px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  : "pl-[0px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              }
            >
              <div className="ml-[23px] text-[15px] text-blue-500 mr-[5px]">
                <FaReact />
              </div>
              <div>Geral</div>
            </div>
            <div
              onClick={() => {
                navigate("/conhecimentos");
                abaPage({
                  id: 7,
                  name: "Conhecimentos",
                  urlName: "conhecimentos",
                  link: "/conhecimentos",
                });
              }}
              className={
                on
                  ? "pl-[0px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  : "pl-[0px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              }
            >
              <div className="ml-[23px] text-[15px] text-blue-500 mr-[5px]">
                <FaReact />
              </div>
              <div>Conhecimentos</div>
            </div>
            <div
              onClick={() => {
                navigate("/formacao");
                abaPage({
                  id: 8,
                  name: "Formacao",
                  urlName: "formacao",
                  link: "/formacao",
                });
              }}
              className={
                on
                  ? "pl-[0px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  : "pl-[0px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              }
            >
              <div className="ml-[23px] text-[15px] text-blue-500 mr-[5px]">
                <FaReact />
              </div>
              <div>Formação</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
