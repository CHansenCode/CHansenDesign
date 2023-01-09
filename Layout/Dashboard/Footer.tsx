import Link from "next/link";

import { Button } from "../../components";
import { signOut } from "next-auth/react";

export const Footer = ({ ...props }: any) => {
  return (
    <>
      <footer>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="mid">
          <div>
            <Link href="/">
              <Button type="home" height="100%" width="100%" border="none" />
            </Link>
          </div>
          <div>
            <Link href="/">
              <Button type="home" height="100%" width="100%" border="none" />
            </Link>
          </div>
          <div>
            <Link href="/">
              <Button type="home" height="100%" width="100%" border="none" />
            </Link>
          </div>
          <div>
            <Link href="/">
              <Button type="home" height="100%" width="100%" border="none" />
            </Link>
          </div>
        </div>

        <div>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            <button>log out</button>
          </a>

          <button></button>
        </div>
      </footer>

      <style jsx>
        {`
          footer {
            height: 6rem;
          }
          footer > div {
            border-top: thin solid;
          }
          div {
            height: 2rem;
            width: 100%;
          }
          .mid {
            height: 2rem;

            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            align-items: center;
          }
          .mid > * {
            height: 100%;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

type Props = {};
