import React from "react";

import {
  AiOutlineRollback,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineEdit,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineCheck,
  AiOutlineUser,
  AiOutlineSave,
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineExport,
  AiOutlineArrowDown,
  AiOutlineCustomerService,
  AiOutlineUnorderedList,
} from "react-icons/ai";

import {
  BsWrench,
  BsEyeglasses,
  BsArrowRepeat,
  BsMap,
  BsTruck,
} from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { GiPistolGun } from "react-icons/gi";

export const IconSwitch = ({ type }: Props) => {
  switch (type) {
    case "back":
      return <AiOutlineRollback />;
    case "check":
      return <AiOutlineCheck />;
    case "minus":
      return <AiOutlineMinus />;
    case "plus":
      return <AiOutlinePlus />;
    case "edit":
      return <AiOutlineEdit />;
    case "save":
      return <AiOutlineSave />;
    case "up":
      return <AiOutlineUp />;
    case "down":
      return <AiOutlineDown />;
    case "close":
      return <AiOutlineClose />;
    case "del":
      return <AiOutlineDelete />;
    case "left":
      return <AiOutlineLeft />;
    case "right":
      return <AiOutlineRight />;
    case "down":
      return <AiOutlineArrowDown />;
    case "users":
      return <AiOutlineUser />;
    case "home":
      return <AiOutlineHome />;
    case "settings":
      return <AiOutlineSetting />;
    case "export":
      return <AiOutlineExport />;
    case "repair":
      return <BsWrench />;
    case "cs":
      return <AiOutlineCustomerService />;
    case "inOut":
      return <BiTransferAlt />;
    case "test":
      return <BsEyeglasses />;
    case "assistant":
      return <BsArrowRepeat />;
    case "tasks":
      return <AiOutlineUnorderedList />;
    case "map":
      return <BsMap />;
    case "logistics":
      return <BsTruck />;
    case "trouble":
      return <GiPistolGun />;

    default:
      return <></>;
  }
};

type Props = {
  type: string;
};
