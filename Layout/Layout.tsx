import { useSession } from "next-auth/react";

import { Nav } from "./Nav";
import { Main } from "./Main";
import { Dashboard } from "./Dashboard";
import { GlobalStyles } from "./GlobalStyles";

import { useColors } from "../hooks/useColors";

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

      <Main loggedIn={loggedIn ? true : false}>{children}</Main>
    </>
  );
};

type Props = {
  children: React.ReactNode;
};

export default Layout;
