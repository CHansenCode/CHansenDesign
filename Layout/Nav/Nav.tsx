import React, { useState, useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};

export const Nav = ({ ...props }: Props) => {
  const {} = props;

  return (
    <>
      <nav>I r the nav</nav>

      <style jsx>
        {`
          nav {
            position: relative;
            height: 3rem;
            width: 100%;

            border: thin solid;
          }
        `}
      </style>
    </>
  );
};
