import React, { useEffect, useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { BsSun, BsFillSunFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { ImFolderOpen } from "react-icons/im";
import { Tooltip } from "@mui/material";
import { Links } from "./Links";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addToggle,
  turnOff,
  turnOn,
} from "../store/modules/toggle/ToggleSlice";
import { useNavigate } from "react-router-dom";
import { AbaPageProps, addPage } from "../store/modules/abaPage/AbaPageSlice";

interface ExplorerProps {
  setOn: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  on: boolean | undefined;
}

export const Explorer = ( props: ExplorerProps ) => {
  const { on, setOn } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [projects, setProjects] = useState<boolean>(false);
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
            {projects && (
              <div>
                <div
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
                  // className="pl-[22px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  className={
                    on
                      ? "pl-[22px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                      : "pl-[22px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  }
                >
                  <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                    <FaReact />
                  </div>
                  <div>Clínica</div>
                </div>
                <div
                  onClick={() => {
                    navigate("/projetos/crud-recados");
                    abaPage({
                      id: 2,
                      name: "CrudRecados",
                      urlName: "crud-recados",
                      link: "/projetos/crud-recados",
                    });
                  }}
                  className={
                    on
                      ? "pl-[22px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                      : "pl-[22px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  }
                >
                  <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                    <FaReact />
                  </div>
                  <div>CrudRecados</div>
                </div>
                <div
                  onClick={() => {
                    navigate("/projetos/marvel-api");
                    abaPage({
                      id: 3,
                      name: "MarvelApi",
                      urlName: "marvel-api",
                      link: "/projetos/marvel-api",
                    });
                  }}
                  className={
                    on
                      ? "pl-[22px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                      : "pl-[22px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  }
                >
                  <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                    <FaReact />
                  </div>
                  <div>MarvelApi</div>
                </div>
                <div
                  onClick={() => {
                    navigate("/projetos/sistema-de-vagas");
                    abaPage({
                      id: 4,
                      name: "SistemaDeVagas",
                      urlName: "sistema-de-vagas",
                      link: "/projetos/sistema-de-vagas",
                    });
                  }}
                  className={
                    on
                      ? "pl-[22px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                      : "pl-[22px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  }
                >
                  <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                    <FaReact />
                  </div>
                  <div>SistemaDeVagas</div>
                </div>
              </div>
            )}
            <div
              onClick={() => {
                navigate("/geral");
                abaPage({
                  id: 5,
                  name: "Geral",
                  urlName: "geral",
                  link: "/geral",
                });
              }}
              className={
                on
                  ? "pl-[5px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  : "pl-[5px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              }
            >
              <div className="ml-[26px] text-[15px] text-blue-500 mr-[5px]">
                <FaReact />
              </div>
              <div>Geral</div>
            </div>
            <div
              onClick={() => {
                navigate("/conhecimentos");
                abaPage({
                  id: 6,
                  name: "Conhecimentos",
                  urlName: "conhecimentos",
                  link: "/conhecimentos",
                });
              }}
              className={
                on
                  ? "pl-[5px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  : "pl-[5px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              }
            >
              <div className="ml-[26px] text-[15px] text-blue-500 mr-[5px]">
                <FaReact />
              </div>
              <div>Conhecimentos</div>
            </div>
            <div
              onClick={() => {
                navigate("/formacao");
                abaPage({
                  id: 7,
                  name: "Formacao",
                  urlName: "formacao",
                  link: "/formacao",
                });
              }}
              className={
                on
                  ? "pl-[5px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  : "pl-[5px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              }
            >
              <div className="ml-[26px] text-[15px] text-blue-500 mr-[5px]">
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
