import React from "react";

import { Button } from "../../components";

export const ToggleVisible = ({ ...props }: Props) => {
  return (
    <>
      <div onClick={() => props.onClick()}>
        <aside>
          <Button type="left" border="none" height="100%" width="100%" />
        </aside>

        <aside className="pc1b">
          <Button type="right" border="none" height="100%" width="100%" />
        </aside>
      </div>

      <style jsx>
        {`
          div {
            position: relative;
            height: 100%;
            width: 100%;
          }

          aside {
            height: 100%;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
          }
          div > aside:nth-of-type(1) {
            position: absolute;
            top: 0;
          }
          div > aside:nth-of-type(2) {
            position: absolute;
            width: 75%;
            top: 0;
            left: 3.9rem;
            opacity: ${props.active ? "0" : "1"};
          }
        `}
      </style>
    </>
  );
};

type Props = {
  active: boolean;
  children?: React.ReactNode;
  onClick: Function;
};
