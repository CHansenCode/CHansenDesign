import React, { useState } from "react";
import { IconSwitch } from "./IconSwitch";
import { Text } from "../";

export const Button = ({ type, active, ...props }: Props) => {
  const [state, setState] = useState({ hover: false });
  const {} = props;

  return (
    <>
      <button
        className={`${active ? "sc sc5b" : "pc pc3b"}`}
        onClick={props.onClick ? props.onClick : null}
        style={props.style}
        onMouseEnter={() => setState({ ...state, hover: true })}
        onMouseLeave={() => setState({ ...state, hover: false })}
      >
        {type && <IconSwitch type={type} />}

        {props.text}

        {props.children}

        {props.onHover && state.hover && (
          <div className="hoverButton">
            <Text type="annotation" text={`${props.onHover}`} />
          </div>
        )}
      </button>

      <style jsx>
        {`
          button {
            position: relative;
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
            opacity: ${props.disabled ? 0.3 : 1};
            pointer-events: ${props.disabled ? "none" : "all"};
          }
          button:hover {
            cursor: pointer;
            box-shadow: inset 0 0 1rem -0.6rem;
          }
          button > .hoverButton {
            position: absolute;
            z-index: 10;
            top: 110%;

            background: white;

            transition: 0.4s ease;
            opacity: ${state.hover ? "1" : "0"};
          }
        `}
      </style>
    </>
  );
};

type Props = {
  onClick?: any;
  children?: React.ReactNode;
  style?: any;

  type?: string;
  text?: string;
  onHover?: string;
  active?: boolean;
  disabled?: boolean;

  height?: string;
  width?: string;
  margin?: string;
  padding?: string;
  border?: string;
  fontSize?: string;
  letterSpacing?: string;
};
