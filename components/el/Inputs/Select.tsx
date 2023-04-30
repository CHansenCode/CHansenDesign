import { Text } from "../Text";
import { Button } from "../Button";

import { useState } from "react";

export const Select = ({ ...props }: Props) => {
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
      </div>

      <aside>{props.children}</aside>

      <style jsx>
        {`
          div {
            position: relative;
            width: 100%;

            border: thin solid transparent;
          }

          header {
            height: 1rem;

            display: grid;
            grid-template-columns: 1fr auto;

            border: thin dashed transparent;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  onChange: any;
  myRef?: any;
  value?: number;

  label?: string;
  info?: string;
  type?: string;

  increment: number;
  largeIncrement?: number;
  allowZero?: boolean;

  children?: any;

  active?: boolean;
  disabled?: boolean;
};
