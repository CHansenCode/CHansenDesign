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

        <div>
          <ul className="pc1b">
            <h4>Editors</h4>
            {links.map(
              (a, i) =>
                a.cat === "edit" && (
                  <Link key={`${a.as}${i}`} href={a.href}>
                    <Button
                      text={a.as}
                      active={pathname.startsWith(a.href)}
                      height="2rem"
                      width="100%"
                      border="none"
                    />
                  </Link>
                )
            )}
          </ul>
          <ul className="pc1b">
            <h4>Viewers</h4>
            {links.map(
              (a, i) =>
                a.cat === "pres" && (
                  <Link key={`${a.as}${i}`} href={a.href}>
                    <Button
                      text={a.as}
                      active={pathname.startsWith(a.href)}
                      height="2rem"
                      width="100%"
                      border="none"
                    />
                  </Link>
                )
            )}
          </ul>
          <ul className="pc1b">
            <h4>Pages</h4>
            {links.map(
              (a, i) =>
                a.cat === "page" && (
                  <Link key={`${a.as}${i}`} href={a.href}>
                    <Button
                      text={a.as}
                      active={pathname.startsWith(a.href)}
                      height="2rem"
                      width="100%"
                      border="none"
                    />
                  </Link>
                )
            )}
          </ul>
        </div>

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
