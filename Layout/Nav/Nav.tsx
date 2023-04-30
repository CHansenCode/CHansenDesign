import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

import { Logo } from "../../components";
import { NavLink } from "./NavLink";
import { useRouter } from "next/router";

type Props = {
  children?: React.ReactNode;
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
    as: "Admin",
    href: "/admin",
  },
];

export const Nav = ({ ...props }: Props) => {
  const router = useRouter();
  const visibleNav: boolean = valNavigationVisibilty(router.pathname);

  return visibleNav ? (
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
  ) : (
    <></>
  );
};

function valNavigationVisibilty(pathname: string) {
  const pagesWithoutNav = ["caticorn"];

  let visibleNav = true;

  const pathnameSplit = pathname.split("/");

  pathnameSplit.length &&
    pathnameSplit.forEach(
      (a) => pagesWithoutNav.find((b) => b === a) && (visibleNav = false)
    );

  return visibleNav;
}
