import Link from "next/link";
import { useSelector } from "react-redux";

import { Logo, Text } from "../../components";
import { NavLink, Footer } from "./";

export const Dashboard = ({ ...props }: Props) => {
  const store: any = useSelector((s) => s);
  const visible: boolean = store.global.showDash;

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
            <Text text="Admin" type="label" margin="0 0 0.5rem 0" />
            <NavLink text="users" href="/admin/users" />
          </ul>
          <ul>
            <Text text="Edit" type="label" margin="0 0 0.5rem 0" />
            <NavLink text="slides" href="/dashboard/slides" />
            <NavLink text="cv" href="/dashboard/cv" />
          </ul>
          <ul>
            <Text text="View" type="label" margin="0 0 0.5rem 0" />
            <NavLink text="slides" href="/view/slides" />
            <NavLink text="cv" href="/view/cv" />
          </ul>
          <ul>
            <Text text="Page" type="label" margin="0 0 0.5rem 0" />
            <NavLink text="Frontpage" href="/" />
            <NavLink text="Architecture" href="/architecture" />
            <NavLink text="Webdesign" href="/webdesign" />
            <NavLink text="About" href="/about" />
          </ul>
        </div>

        <Footer visible={visible} {...props} />
      </nav>

      <style jsx>
        {`
          nav {
            position: fixed;
            z-index: 2;
            top: 0;
            left: ${visible ? "0rem" : "-10rem"};
            height: 100vh;
            width: 10rem;

            margin: 0;
            padding: 0;

            box-shadow: 0 0 2rem -1.7rem currentColor;

            display: grid;
            grid-template-rows: auto 1fr auto;
            gap: 2rem;

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
        `}
      </style>
    </>
  );
};

type Props = {
  colors: object;
  setColors: Function;
};
