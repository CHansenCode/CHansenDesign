import React, { useState, useEffect } from "react";

import { signIn, signOut, useSession } from "next-auth/react";

import { Nav } from "./Nav/Nav";
import { Dashboard } from "./Dashboard";

import { GlobalStyles } from "./GlobalStyles";

import { useColors } from "../lib";

const Layout = ({ ...props }: Props) => {
  const {} = props;

  const { data: session } = useSession();
  const { colors, setColors } = useColors();

  const lgin = session?.user;

  return (
    <>
      <GlobalStyles colors={colors} />

      {lgin ? <Dashboard /> : <Nav />}

      <main>
        <h4 className="pc7b">My Layout</h4>
        {props.children}
      </main>

      <style jsx>
        {`
          main {
            position: relative;

            width: 100vw;
            max-width: 800px;

            padding-left: 12rem;

            margin: 0 auto;
            border: thin dashed;

            overflow-x: hidden;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  children: React.ReactNode;
};

export default Layout;
