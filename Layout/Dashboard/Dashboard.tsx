import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";

import { Button, Logo } from "../../components";

import { Footer } from "./Footer";

import { NavLink } from "../Nav/NavLink";

export const Dashboard = (props: any) => {
  return (
    <>
      <nav className="pc1b">
        <header>
          <Link href={"/"}>
            <Logo height="80px" />
          </Link>
        </header>

        <ul className="pc1b">
          {links.map((a, i) => (
            <Link key={`${a.as}${i}`} href={a.href}>
              <Button text={a.as} height="2rem" width="100%" border="none" />
            </Link>
          ))}
        </ul>

        <Footer />
      </nav>

      <style jsx>
        {`
          nav {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 12rem;

            margin: 0;
            padding: 0;

            box-shadow: 0 0 2rem -1.7rem currentColor;

            display: grid;
            grid-template-rows: auto 1fr auto;
            gap: 1rem;
          }

          header {
            padding-top: 2rem;

            display: flex;
            align-items: center;
            justify-content: center;
          }

          ul {
            padding: 2rem 0;

            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }

          main {
            height: 100%;

            overflow-x: hidden;
            overflow-y: auto;
          }
        `}
      </style>
    </>
  );
};

const links = [
  {
    as: "Architecture",
    href: "/architecture",
  },
  {
    as: "Webdesign",
    href: "/webdesign",
  },
  {
    as: "About",
    href: "/about",
  },
  {
    as: "cs",
    href: "/presentation/cv",
  },
  {
    as: "slides",
    href: "/presentation/slides",
  },
];
