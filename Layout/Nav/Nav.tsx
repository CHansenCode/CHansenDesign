import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

import { Logo } from "../../components";
import { NavLink } from "./NavLink";

type Props = {
  children?: React.ReactNode;
};

export const Nav = ({ ...props }: Props) => {
  const {} = props;

  return (
    <>
      <nav className="pc05b">
        <Link href={"/"}>
          <Logo height="2.2rem" />
        </Link>

        <ul className="pc1b">
          {links.map((a, i) => (
            <Link key={`${a.as}${i}`} href={a.href}>
              <NavLink text={a.as} />
            </Link>
          ))}
        </ul>

        <a
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </a>
      </nav>

      <style jsx>
        {`
          nav {
            position: relative;
            height: 3rem;
            width: 100%;

            padding: 0 2rem;

            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 2rem;
            align-items: center;

            border-top: none;
            border-right: none;
            border-left: none;

            box-shadow: 0 0 2rem -1.4rem currentColor;
          }

          ul {
            height: 3rem;

            display: flex;
            align-items: center;

            gap: 1rem;
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
];
