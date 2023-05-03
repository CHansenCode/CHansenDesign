import { Text } from "../Text";
import { Button } from "../Button";

import { useState } from "react";

export const File = ({ ...props }: Props) => {
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

        <input type="file"></input>
      </div>

      <style jsx>
        {`
          div {
            position: relative;
            height: 3rem;
            width: 100%;

            border: thin solid transparent;
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
