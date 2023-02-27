import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { FaReact } from "react-icons/fa";
import { removePage } from "../store/modules/abaPage/AbaPageSlice";

interface AbaProps {
  light: boolean | undefined;
}

export const Abas = (props: AbaProps) => {
  const { light } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const url = useLocation();
  let path = "";
  if (url.pathname.split("/")[2]) {
    path = url.pathname.split("/")[2];
  } else {
    path = url.pathname.split("/")[1];
  }
  const color = light ? "bg-slate-200" : "bg-[#070419]";
  const textColor = light ? "text-slate-200" : "text-[#070419]";
  const textHover = light ? "hover:text-[#070419]" : "hover:text-slate-200";

  const abasPage = Object.values(
    useAppSelector((store) => store.abaPage.entities)
  );

  const removeAbaPage = (id: number) => {
    dispatch(removePage(id));
  };

  return (
    <div className="w-[100%] h-[50px] overflow-hidden  hover:overflow-x-scroll flex">
      {abasPage[0] !== undefined &&
        abasPage.map((aba, index) => (
          <div
            key={aba?.id}
            onClick={() => {
              navigate(aba ? aba?.link : "");
            }}
            className={
              path === aba?.urlName
                ? "h-[35px] flex items-center px-[10px] border-t-[1.5px] border-pink-400 py-[3px]"
                : `h-[35px] flex items-center cursor-pointer px-[14px] ${textColor} ${textHover} bg-[#070419 ${color} py-[3px]`
            }
          >
            <div className="text-blue-500 mr-[5px]">
              <FaReact />
            </div>
            <div
              className={
                light ? "mr-[5px] text-green-600" : "mr-[5px] text-green-400"
              }
            >
              {aba?.name}
            </div>
            <div
              onClick={(e) => {
                if (path === aba?.urlName) {
                  if (abasPage.length === 1) {
                    navigate("/");
                  } else if (abasPage[index]?.id !== abasPage[abasPage.length]?.id) {
                    const link = abasPage[index + 1]?.link;
                    navigate(link ? link : "/");
                  } else {
                    const link = abasPage[index - 1]?.link;
                    navigate(link ? link : "/");
                  }
                }
                removeAbaPage(aba ? aba?.id : 0);
                e.stopPropagation();
              }}
              className="flex justify-end cursor-pointer text-[18px] py-[0px]"
            >
              <p
                className={
                  path === aba?.urlName
                    ? `hover:bg-white opacity-100 mb-[3px] hover:bg-opacity-10 py-[0px] px-[5px]`
                    : `hover:bg-white mb-[3px] hover:bg-opacity-10 py-[0px] px-[5px]`
                }
              >
                x
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
