import React from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { BsSun, BsFillSunFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { ImFolderOpen } from "react-icons/im";
import { Tooltip } from "@mui/material";
import { Links } from "./Links";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { AbaPageProps, addPage } from "../store/modules/abaPage/AbaPageSlice";

interface ProjectsProps {
  projects: boolean;
  on?: boolean;
  clinica: boolean;
  setClinica: React.Dispatch<React.SetStateAction<boolean>>;
  crudRecados: boolean;
  setCrudRecados: React.Dispatch<React.SetStateAction<boolean>>;
  order: boolean;
  setOrder: React.Dispatch<React.SetStateAction<boolean>>;
  vagas: boolean;
  setVagas: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Projects = (props: ProjectsProps) => {
  const {
    projects,
    on,
    clinica,
    setClinica,
    crudRecados,
    setCrudRecados,
    order,
    setOrder,
    vagas,
    setVagas,
  } = props;
  const navigate = useNavigate();
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
  return (
    <div>
      {projects && (
        <div
          onClick={() => {
            clinica ? setClinica(false) : setClinica(true);
          }}
          className={
            on
              ? "pl-[15px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              : "pl-[15px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
          }
        >
          <div className="ml-[13px] mr-[5px]">
            {clinica ? <SlArrowDown /> : <SlArrowRight />}
          </div>
          <div className="mr-[5px] text-[14px] text-slate-400">
            <ImFolderOpen />
          </div>
          <div>clínica</div>
        </div>
      )}
      {projects && (
        <div>
          {clinica && (
            <>
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
                    ? "pl-[25px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                    : "pl-[25px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                }
              >
                <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                  <FaReact />
                </div>
                <div>Front-end</div>
              </div>
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
                className={
                  on
                    ? "pl-[25px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                    : "pl-[25px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                }
              >
                <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                  <FaReact />
                </div>
                <div>Back-end</div>
              </div>
            </>
          )}
          {projects && (
            <div
              onClick={() => {
                crudRecados ? setCrudRecados(false) : setCrudRecados(true);
              }}
              className={
                on
                  ? "pl-[15px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  : "pl-[15px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              }
            >
              <div className="ml-[13px] mr-[5px]">
                {crudRecados ? <SlArrowDown /> : <SlArrowRight />}
              </div>
              <div className="mr-[5px] text-[14px] text-slate-400">
                <ImFolderOpen />
              </div>
              <div>crudRecados</div>
            </div>
          )}
          {crudRecados && (
            <>
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
                    ? "pl-[25px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                    : "pl-[25px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                }
              >
                <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                  <FaReact />
                </div>
                <div>Front-end</div>
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
                    ? "pl-[25px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                    : "pl-[25px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                }
              >
                <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                  <FaReact />
                </div>
                <div>Back-end</div>
              </div>
            </>
          )}
          {projects && (
            <div
              onClick={() => {
                order ? setOrder(false) : setOrder(true);
              }}
              className={
                on
                  ? "pl-[15px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  : "pl-[15px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              }
            >
              <div className="ml-[13px] mr-[5px]">
                {order ? <SlArrowDown /> : <SlArrowRight />}
              </div>
              <div className="mr-[5px] text-[14px] text-slate-400">
                <ImFolderOpen />
              </div>
              <div>orderService</div>
            </div>
          )}
          {order && (
            <>
              <div
                onClick={() => {
                  navigate("/projetos/sistema-de-vagas");
                  abaPage({
                    id: 4,
                    name: "OrderService",
                    urlName: "order-service",
                    link: "/projetos/order-service",
                  });
                }}
                className={
                  on
                    ? "pl-[25px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                    : "pl-[25px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                }
              >
                <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                  <FaReact />
                </div>
                <div>Front-end</div>
              </div>
              <div
                onClick={() => {
                  navigate("/projetos/sistema-de-vagas");
                  abaPage({
                    id: 4,
                    name: "OrderService",
                    urlName: "order-service",
                    link: "/projetos/order-service",
                  });
                }}
                className={
                  on
                    ? "pl-[25px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                    : "pl-[25px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                }
              >
                <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                  <FaReact />
                </div>
                <div>Back-end</div>
              </div>
            </>
          )}
          {projects && (
            <div
              onClick={() => {
                vagas ? setVagas(false) : setVagas(true);
              }}
              className={
                on
                  ? "pl-[15px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                  : "pl-[15px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              }
            >
              <div className="ml-[13px] mr-[5px]">
                {vagas ? <SlArrowDown /> : <SlArrowRight />}
              </div>
              <div className="mr-[5px] text-[14px] text-slate-400">
                <ImFolderOpen />
              </div>
              <div>sistemaVagas</div>
            </div>
          )}
          {vagas && (
            <>
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
                    ? "pl-[25px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                    : "pl-[25px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                }
              >
                <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                  <FaReact />
                </div>
                <div>Front-end</div>
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
                    ? "pl-[25px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                    : "pl-[25px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
                }
              >
                <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
                  <FaReact />
                </div>
                <div>Back-end</div>
              </div>
            </>
          )}
        </div>
      )}
      {projects && (
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
              ? "pl-[15px] hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
              : "pl-[15px] hover:bg-opacity-10 hover:bg-gray-100 cursor-pointer text-[12px] flex items-center h-[25px]"
          }
        >
          <div className="ml-[20px] text-[15px] text-blue-500 mr-[5px]">
            <FaReact />
          </div>
          <div>MarvelApi</div>
        </div>
      )}
    </div>
  );
};
