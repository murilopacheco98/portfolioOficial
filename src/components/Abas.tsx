import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { FaReact } from "react-icons/fa";
import { removePage } from "../store/modules/abaPage/AbaPageSlice";

export const Abas = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const [selected, setSelected] = useState<boolean>();
  const url = useLocation();
  let path = "";
  if (url.pathname.split("/")[2]) {
    path = url.pathname.split("/")[2];
  } else {
    path = url.pathname.split("/")[1];
  }

  const abasPage = Object.values(
    useAppSelector((store) => store.abaPage.entities)
  );

  const removeAbaPage = (id: number) => {
    dispatch(removePage(id));
  };

  return (
    <div className="w-[100%] h-[50px] overflow-scroll flex">
      {abasPage[0] !== undefined &&
        abasPage.map((aba, index) => (
          <div
            key={aba?.id}
            onClick={() => {
              navigate(aba ? aba?.link : "");
            }}
            className={
              path == aba?.urlName
                ? "h-[35px] flex items-center px-[10px] border-t-[1.5px] border-pink-400 py-[3px]"
                : "h-[35px] flex items-center cursor-pointer px-[14px] text-[#070419] hover:text-white bg-[#070419] py-[3px] text-blue"
            }
          >
            <div className="text-blue-500 mr-[5px]">
              <FaReact />
            </div>
            <div className="mr-[5px] text-green-400 ">{aba?.name}</div>
            <div
              onClick={(e) => {
                if (path == aba?.urlName) {
                  if (abasPage.length === 1) {
                    navigate("/");
                  } else if (abasPage[index]?.id !== aba.id) {
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
              <p className="hover:bg-white mb-[3px] hover:bg-opacity-10 py-[0px] px-[5px]">
                x
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
