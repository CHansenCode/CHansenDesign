import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button, Logo } from "../../components";
import { Footer } from "./Footer";

export const Dashboard = ({ ...props }: Props) => {
  const [state, setState] = useState({ showDash: true });
  const { pathname } = useRouter();

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
              <Button
                text={a.as}
                active={pathname.startsWith(a.href)}
                height="2rem"
                width="100%"
                border="none"
              />
            </Link>
          ))}
        </ul>

        <Footer {...props} />
      </nav>

      <style jsx>
        {`
          nav {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 10rem;

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

type Props = {
  colors: object;
  setColors: Function;
};

const links = [
  {
    cat: "edit",
    as: "users",
    href: "/users",
  },
  {
    cat: "edit",
    as: "slides",
    href: "/slides",
  },
  {
    cat: "edit",
    as: "cv",
    href: "/cv",
  },

  {
    cat: "page",
    as: "Architecture",
    href: "/architecture",
  },
  {
    cat: "page",
    as: "Webdesign",
    href: "/webdesign",
  },
  {
    cat: "page",
    as: "About",
    href: "/about",
  },

  {
    cat: "pres",
    as: "cs",
    href: "/presentation/cv",
  },
  {
    cat: "pres",
    as: "slides",
    href: "/presentation/slides",
  },
];
