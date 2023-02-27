import React, { SetStateAction, useEffect, useState } from "react";
import { VscSourceControl, VscFolderOpened } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCopy } from "react-icons/io";
import { Tooltip } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addToggle,
  turnOff,
  turnOn,
} from "../store/modules/toggle/ToggleSlice";

interface LinksProps {
  sidebar?: boolean;
  explorer?: boolean;
  setExplorer?: React.Dispatch<SetStateAction<boolean>>;
}

export const Links = (props: LinksProps) => {
  const { sidebar, explorer, setExplorer } = props;
  const dispatch = useAppDispatch();

  const toggle = Object.values(
    useAppSelector((store) => store.toggle.entities)
  );

  useEffect(() => {
    if (toggle[2]) {
      setExplorer && setExplorer(false);
      if (toggle[2].on == true) {
        setExplorer && setExplorer(true);
      }
    } else {
      dispatch(addToggle({ uid: 3, on: false }));
    }
  }, [explorer]);

  const explorerOn = () => {
    dispatch(
      turnOn({
        uid: 3,
        on: true,
      })
    );
    setExplorer && setExplorer(true);
  };

  const explorerOff = () => {
    dispatch(
      turnOff({
        uid: 3,
        on: false,
      })
    );
    setExplorer && setExplorer(false);
  };

  return (
    <div className="">
      {sidebar ? (
        <div>
          {explorer ? (
            <Tooltip title="Explorer">
              <div
                onClick={() => explorerOff()}
                className="cursor-pointer w-[47px] bg-gray-800 text-white border-l-[2px] border-pink-400 flex justify-center text-[28px] py-[12px]"
              >
                <IoMdCopy />
              </div>
            </Tooltip>
          ) : (
            <Tooltip title="Explorer">
              <div
                onClick={() => explorerOn()}
                className="cursor-pointer w-[47px] text-white flex justify-center text-[28px] py-[12px]"
              >
                <IoMdCopy />
              </div>
            </Tooltip>
          )}
          <div>
            <Tooltip title="Código do projeto">
              <a href="https://github.com/murilopacheco98" target="_blank">
                <div className="flex justify-center text-[28px] lg:text-[36px] py-[12px] text-gray-500 hover:text-gray-300">
                  <VscSourceControl />
                </div>
              </a>
            </Tooltip>
            <Tooltip title="Me encontre no Github">
              <a href="https://github.com/murilopacheco98" target="_blank">
                <div className="flex justify-center text-[28px] lg:text-[36px] py-[12px] text-gray-500 hover:text-gray-300">
                  <FiGithub />
                </div>
              </a>
            </Tooltip>
            <Tooltip title="Me encontre no Linkedin">
              <a
                href="https://www.linkedin.com/in/murilo-pacheco-037ba316b/"
                target="_blank"
              >
                <div className="cursor-pointer flex justify-center text-[28px] lg:text-[36px] py-[12px] text-gray-500 hover:text-gray-300">
                  <FaLinkedinIn />
                </div>
              </a>
            </Tooltip>
            <Tooltip title="Contacte me via e-mail">
              <a href="mailto:murilo.pacheco99@gmail.com" target="_blank">
                <div className="flex justify-center text-[28px] lg:text-[36px] py-[12px] text-gray-500 hover:text-gray-300">
                  <HiOutlineMail />
                </div>
              </a>
            </Tooltip>
          </div>
        </div>
      ) : (
        <div className="flex w-[180px] sm:w-[230px] justify-between text-[38px] sm:text-[44px] lg:text-[54px]">
          <Tooltip title="Me encontre no Github">
            <a href="https://github.com/murilopacheco98" target="_blank">
              <div className="flex justify-center py-[12px] text-gray-500 hover:text-gray-300">
                <FiGithub />
              </div>
            </a>
          </Tooltip>
          <Tooltip title="Me encontre no Linkedin">
            <a
              href="https://www.linkedin.com/in/murilo-pacheco-037ba316b/"
              target="_blank"
            >
              <div className="cursor-pointer flex justify-center py-[12px] text-gray-500 hover:text-gray-300">
                <FaLinkedinIn />
              </div>
            </a>
          </Tooltip>
          <Tooltip title="Contacte me via e-mail">
            <a href="mailto:murilo.pacheco99@gmail.com" target="_blank">
              <div className="flex justify-center py-[12px] text-gray-500 hover:text-gray-300">
                <HiOutlineMail />
              </div>
            </a>
          </Tooltip>
        </div>
      )}
    </div>
  );
};
