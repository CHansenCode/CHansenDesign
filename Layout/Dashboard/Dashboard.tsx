import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { Button, Logo } from "../../components";
import { Footer } from "./Footer";

export const Dashboard = ({ ...props }: Props) => {
  const { pathname } = useRouter();

  const visible: boolean = useSelector(
    (s: { global: { showDash: boolean } }) => s.global.showDash
  );

  return (
    <>
      <nav className="pc1b">
        <header>
          <Link href={"/"}>
            <Logo height="70px" />
          </Link>
        </header>

        <div>
          <ul>
            <p className="sc">Editors</p>

            {links.map(
              (a, i) =>
                a.cat === "edit" && (
                  <Link key={`${a.as}${i}`} href={a.href}>
                    <Button
                      active={pathname.startsWith(a.href)}
                      height="1.15rem"
                      width="100%"
                      border="none"
                      padding="0"
                    >
                      <h6>{a.as}</h6>
                    </Button>
                  </Link>
                )
            )}
          </ul>
          <ul>
            <p className="sc">Viewers</p>

            {links.map(
              (a, i) =>
                a.cat === "pres" && (
                  <Link key={`${a.as}${i}`} href={a.href}>
                    <Button
                      active={pathname.startsWith(a.href)}
                      height="1.15rem"
                      width="100%"
                      border="none"
                      padding="0"
                    >
                      <h6>{a.as}</h6>
                    </Button>
                  </Link>
                )
            )}
          </ul>
          <ul>
            <p className="sc">Pages</p>

            {links.map(
              (a, i) =>
                a.cat === "page" && (
                  <Link key={`${a.as}${i}`} href={a.href}>
                    <Button
                      active={pathname.startsWith(a.href)}
                      height="1.15rem"
                      width="100%"
                      border="none"
                      padding="0"
                    >
                      <h6>{a.as}</h6>
                    </Button>
                  </Link>
                )
            )}
          </ul>
        </div>

        <Footer visible={visible} {...props} />
      </nav>

      <style jsx>
        {`
          nav {
            position: fixed;
            top: 0;
            left: ${visible ? "0rem" : "-10rem"};
            height: 100vh;
            width: 10rem;

            margin: 0;
            padding: 0;

            box-shadow: 0 0 2rem -1.7rem currentColor;

            display: grid;
            grid-template-rows: auto 1fr auto;
            gap: 1rem;

            transition: 0.3s ease;
          }

          header {
            width: 100%;
            padding-top: 2rem;

            display: flex;
            align-items: center;
            justify-content: center;

            overflow: hidden;
          }
          nav > div {
            padding: 0 1rem;
          }
          ul {
            margin-bottom: 1rem;
          }
          ul > p {
            padding-left: 1rem;
            font-size: 10px;
            font-weight: 700;
            margin-bottom: 0.25rem;
            letter-spacing: 0.5px;
          }
          h6 {
            text-align: left;
            width: 5rem;
            margin: 0;
            font-size: 11px;
            text-transform: uppercase;
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
    href: "/admin/editor/users",
  },
  {
    cat: "edit",
    as: "slides",
    href: "/admin/editor/slides",
  },
  {
    cat: "edit",
    as: "cv",
    href: "/admin/editor/cv",
  },

  {
    cat: "pres",
    as: "CV",
    href: "/presentation/cv",
  },
  {
    cat: "pres",
    as: "slides",
    href: "/presentation/slides",
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
];
