import React, { useState, useEffect } from "react";

import { signIn, signOut, useSession } from "next-auth/react";

import { Nav } from "./Nav/Nav";
import { GlobalStyles } from "./GlobalStyles";

import { useColors } from "../lib";

type Props = {
  data?: object;
  children?: React.ReactNode;
};

const Layout = ({ ...props }: Props) => {
  const {} = props;

  console.log(useSession());

  const { colors, setColors } = useColors();

  return (
    <>
      <GlobalStyles colors={colors} />

      <Nav />

      <main>
        <h4>My Layout</h4>
        {props.children}
      </main>

      <style jsx>
        {`
          main {
            width: 100vw;
            max-width: 800px;

            margin: 0 auto;
            border: thin dashed;

            overflow-x: hidden;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
