import { useSession } from "next-auth/react";

import { Nav } from "./Nav";
import { Dashboard } from "./Dashboard";
import { Main } from "./Main";

import { GlobalStyles } from "./GlobalStyles";

import { useColors } from "../lib";

const Layout = ({ children, ...props }: Props) => {
  const { data: session } = useSession();
  const { colors, setColors } = useColors();

  const loggedIn = session?.user;

  props = {
    ...props,
  };

  return (
    <>
      <GlobalStyles colors={colors} />

      {loggedIn ? <Dashboard colors={colors} setColors={setColors} /> : <Nav />}

      <Main loggedIn={loggedIn}>{children}</Main>
    </>
  );
};

type Props = {
  children: React.ReactNode;
};

export default Layout;
