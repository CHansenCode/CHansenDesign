import Link from "next/link";

import { Logo } from "../../components";
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
              <NavLink text={a.as} />
            </Link>
          ))}
        </ul>

        <footer>
          <button>askdjkas</button>
        </footer>
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
            align-items: center;
            gap: 0.5rem;
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
];
