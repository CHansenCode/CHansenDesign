import { Text } from "../Text";
import { Button } from "../Button";

import { useState } from "react";

export const Input = ({ ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hoverInfo, setHoverInfo] = useState(false);

  return (
    <>
      <div>
        <header>
          {props.label ? (
            <Text text={props.label} type="label" className="sc" />
          ) : (
            <div />
          )}

          {props.info && (
            <div
              onMouseEnter={() => setHoverInfo(true)}
              onMouseLeave={() => setHoverInfo(false)}
            >
              <Text
                text={props.info}
                type="h5"
                style={{ pointerEvents: "none" }}
              />
              <Button type="info" onClick={() => null} />
            </div>
          )}
        </header>

        <input
          ref={props.myRef}
          value={props.value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={props.disabled ? props.disabled : false}
          onChange={props.onChange}
        />

        <span className={`pseudoborder${isFocused ? " sc" : ""}`} />
      </div>

      <style jsx>
        {`
          div {
            position: relative;
            height: 3rem;
            width: 100%;

            border: thin solid transparent;
          }

          header {
            height: 1rem;

            display: grid;
            grid-template-columns: 1fr auto;

            border: thin dashed transparent;
          }

          input {
            position: relative;
            height: 2rem;
            width: 100%;

            background: transparent;
            border: thin solid transparent;

            outline: none;

            font-size: 16px;
            pointer-events: ${props.disabled && "none"};
            opacity: ${props.disabled ? 0.5 : 1};
          }

          .pseudoborder {
            position: absolute;
            top: 100%;
            left: ${isFocused ? "-2%" : "0"};
            width: ${isFocused ? "104%" : "100%"};

            border-bottom: ${props.active ? "2px" : "1px"} solid;

            transition: 0.4s ease;
            opacity: ${isFocused ? "1" : "0.3"};
          }
        `}
      </style>
    </>
  );
};

type Props = {
  onChange: any;
  value: string | number | undefined;
  myRef?: any;

  label?: string;
  info?: string;

  active?: boolean;
  disabled?: boolean;
};
