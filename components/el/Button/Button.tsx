import React from "react";
import { IconSwitch } from "./IconSwitch";

export const Button = ({ type, active, ...props }: Props) => {
  const {} = props;

  return (
    <>
      <button
        className={`${active ? "sc sc5b" : "pc pc3b"}`}
        onClick={(e) => (props.onClick ? props.onClick : null)}
      >
        {type && <IconSwitch type={type} />}

        {props.text}

        {props.children}
      </button>

      <style jsx>
        {`
          button {
            background: transparent;

            height: ${props.height};
            width: ${props.width};

            margin: 0;
            margin: ${props.margin};
            padding: 0.25rem 0.5rem;
            padding: ${props.padding};

            border: ${props.border};

            font-size: ${props.fontSize};
            letter-spacing: ${props.letterSpacing};

            display: flex;
            align-items: center;
            justify-content: center;

            transition: 0.2s ease;
          }
          button:hover {
            cursor: pointer;
            box-shadow: inset 0 0 1rem -0.6rem;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  onClick?: Function;
  children?: React.ReactNode;

  type?: string;
  text?: string;
  active?: boolean;

  height?: string;
  width?: string;
  margin?: string;
  padding?: string;
  border?: string;
  fontSize?: string;
  letterSpacing?: string;
};
