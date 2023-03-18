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
import { Explorer } from "./Explorer";

interface SidebarProps {
  setOn: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  on: boolean | undefined;
  setExplorer?: React.Dispatch<React.SetStateAction<boolean>>;
  explorer?: boolean;
  setMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  menu?: boolean;
}

export const Sidebar = (props: SidebarProps) => {
  const { on, setOn, explorer, setExplorer, menu, setMenu } = props;
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
      if (toggle[0].on === true) {
        setOn(true);
      }
    } else {
      dispatch(addToggle({ uid: 1, on: false }));
    }
    if (toggle[1]) {
      setProjects(false);
      if (toggle[1].on === true) {
        setProjects(true);
      }
    } else {
      dispatch(addToggle({ uid: 2, on: false }));
    }
  }, [on, projects, toggle, setOn, dispatch]);

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

  return (
    <div>
      <div className="absolute h-[25px] w-[100%] flex justify-center bg-[#070419] text-white">
        Portfólio - Murilo Pacheco
      </div>
      <div
        onClick={() => {
          setMenu && setMenu(true);
        }}
        className="cursor-pointer text-white text-[40px] ml-[30px] z-10 mt-[45px] absolute mobile:hidden"
      >
        <AiOutlineMenu />
      </div>
      {menu && (
        <div className="absolute z-20">
          <Explorer on={on} setOn={setOn} />
        </div>
      )}
      <div className="flex">
        <div className="hidden mobile:flex-col mobile:flex mt-[25px] w-[47px] pb-[10px] justify-between h-[calc(100vh-25px)] bg-opacity-[90%] bg-[#070419]">
          <Links sidebar explorer={explorer} setExplorer={setExplorer} />
          <div className="mb-[50px]">
            <Tooltip title="Ligue a luz" placement="right">
              <div
                onClick={() => {
                  on ? lightOff() : lightOn();
                }}
                className="cursor-pointer flex justify-center text-[28px] py-[12px] text-gray-500 hover:text-gray-300"
              >
                {on ? <BsFillSunFill /> : <BsSun />}
              </div>
            </Tooltip>
            <Tooltip title="Decoração" placement="right">
              <div className="cursor-pointer flex justify-center text-[28px] py-[12px] text-gray-500 hover:text-gray-300">
                <IoSettingsOutline />
              </div>
            </Tooltip>
          </div>
        </div>
        {explorer && <Explorer on={on} setOn={setOn} />}
      </div>
    </div>
  );
};
