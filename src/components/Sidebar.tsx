import React, { useEffect, useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
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

interface SidebarProps {
  setOn: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  on: boolean | undefined;
  setExplorer?: React.Dispatch<React.SetStateAction<boolean>>;
  explorer?: boolean;
}

export const Sidebar = (props: SidebarProps) => {
  const { on, setOn, explorer, setExplorer } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [projects, setProjects] = useState<boolean>(false);
  const [porfolio, setPortfolio] = useState<boolean>(true);

  const toggle = Object.values(
    useAppSelector((store) => store.toggle.entities)
  );

  useEffect(() => {
    if (toggle[0]) {
      setOn(false);
      if (toggle[0].on == true) {
        setOn(true);
      }
    } else {
      dispatch(addToggle({ uid: 1, on: false }));
    }
    if (toggle[1]) {
      setProjects(false);
      if (toggle[1].on == true) {
        setProjects(true);
      }
    } else {
      dispatch(addToggle({ uid: 2, on: false }));
    }
  }, [on, projects]);

  const lightOn = () => {
    dispatch(
      turnOn({
        uid: 1,
        on: true,
      })
    );
    setOn(true);
  };

  const lightOff = () => {
    dispatch(
      turnOff({
        uid: 1,
        on: false,
      })
    );
    setOn(false);
  };

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
    dispatch(addPage({ id: input.id, name: input.name, urlName: input.urlName, link: input.link }));
  };

  return (
    <div>
      <div className="absolute h-[25px] w-[100%] flex justify-center bg-[#070419] text-white">
        Portfólio - Murilo Pacheco
      </div>
      <div className="absolute mt-[25px] w-[47px] pb-[10px] flex flex-col justify-between h-[calc(100vh-25px)] bg-opacity-[90%] bg-[#070419]">
        <Links sidebar explorer={explorer} setExplorer={setExplorer} />
        <div className="">
          <Tooltip title="Ligue a luz">
            <div
              onClick={() => {
                on ? lightOff() : lightOn();
              }}
              className="cursor-pointer flex justify-center text-[28px] py-[12px] text-gray-500 hover:text-gray-300"
            >
              {on ? <BsFillSunFill /> : <BsSun />}
            </div>
          </Tooltip>
          <Tooltip title="Decoração">
            <div className="cursor-pointer flex justify-center text-[28px] py-[12px] text-gray-500 hover:text-gray-300">
              <IoSettingsOutline />
            </div>
          </Tooltip>
        </div>
      </div>
      {explorer &&
        (on ? (
          <div className="ml-[47px] mt-[25px] w-[155px] border-r-[2px] bg-opacity-0 bg-[#070419]">
            <div className="">
              <div className="text-[12px] flex items-center h-[35px] ml-[10px] ">
                EXPLORER
              </div>
            </div>
            <div className="w-[155px] bg-opacity-[5%] bg-black">
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
                    className="pl-[5px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
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
                        className="pl-[22px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
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
                        className="pl-[22px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
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
                        className="pl-[22px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
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
                        className="pl-[22px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
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
                    className="hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px] pl-[5px] "
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
                    className="hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px] pl-[5px] "
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
                    className="hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px] pl-[5px] "
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
        ) : (
          <div className="ml-[47px] mt-[25px] w-[155px] bg-[#070419]">
            <div className="">
              <div className="text-[12px] flex items-center h-[35px] text-white ml-[10px] ">
                EXPLORER
              </div>
            </div>
            <div className="w-[155px] bg-opacity-[6%] bg-white">
              <div
                onClick={(e) => {
                  setPortfolio(!porfolio);
                  // navigate("/");
                }}
                className="cursor-pointer font-bold text-[12px] flex items-center h-[25px] text-white ml-[5px] "
              >
                <div className="mr-[5px]">
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
                    className="hover:bg-gray-800 cursor-pointer text-[12px] flex items-center h-[25px] text-white ml-[5px] "
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
                        className="pl-[17px] hover:bg-gray-800 cursor-pointer text-[12px] flex items-center h-[25px] text-white ml-[5px] "
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
                        className="pl-[17px] hover:bg-gray-800 cursor-pointer text-[12px] flex items-center h-[25px] text-white ml-[5px] "
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
                        className="pl-[17px] hover:bg-gray-800 cursor-pointer text-[12px] flex items-center h-[25px] text-white ml-[5px] "
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
                        className="pl-[17px] hover:bg-gray-800 cursor-pointer text-[12px] flex items-center h-[25px] text-white ml-[5px] "
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
                    className="hover:bg-gray-800 cursor-pointer text-[12px] flex items-center h-[25px] text-white ml-[5px] "
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
                    className="hover:bg-gray-800 cursor-pointer text-[12px] flex items-center h-[25px] text-white ml-[5px] "
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
                    className="hover:bg-gray-800 cursor-pointer text-[12px] flex items-center h-[25px] text-white ml-[5px] "
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
        ))}
    </div>
  );
};
