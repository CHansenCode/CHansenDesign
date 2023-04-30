import { useAppDispatch } from "../../redux/hooks";
import { toggleDash } from "../../redux/reducers/globalState";
import Link from "next/link";

import { Button } from "../../components";
import { ToggleVisible } from "./ToggleVisible";

import { NavLink } from "./NavLink";

import { signOut } from "next-auth/react";
import { store } from "../../redux/store";

export const Footer = ({ ...props }: any) => {
  const dispatch = useAppDispatch();

  async function toggleLight() {
    props.setColors({ ...props.colors, darkmode: !props.colors.darkmode });
  }

  return (
    <>
      <section>
        <header>
          <div>
            <Button
              type="yinyang"
              height="100%"
              width="100%"
              border="none"
              onClick={() => toggleLight()}
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </header>

        <main className="mid pc3b">
          <div className="pc3b">
            <Link href="/">
              <Button type="home" height="100%" width="100%" border="none" />
            </Link>
          </div>
          <div className="pc3b">
            <Link href="/dashboard/settings">
              <Button
                type="settings"
                height="100%"
                width="100%"
                border="none"
              />
            </Link>
          </div>
          <div className="pc3b">
            <Link href="/dashboard/calendar">
              <Button
                type="calendar"
                height="100%"
                width="100%"
                border="none"
              />
            </Link>
          </div>
          <div>
            <Link href="/dashboard/chat">
              <Button type="chat" height="100%" width="100%" border="none" />
            </Link>
          </div>
        </main>

        <footer className="pc3b">
          <div className="pc3b">
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              <Button
                text="LOG OUT"
                fontSize="11px"
                letterSpacing="1px"
                height="100%"
                width="100%"
                border="none"
              />
            </a>
          </div>

          <ToggleVisible
            active={props.visible}
            onClick={() => dispatch(toggleDash())}
          />
        </footer>
      </section>

      <style jsx>
        {`
          section {
            height: 6rem;
            width: 100%;
          }
          header,
          main,
          footer {
            height: 2rem;
            border-left: none;
            border-right: none;
            border-bottom: none;
          }
          header,
          main {
            height: 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            align-items: center;
          }
          header > *,
          main > * {
            height: 100%;
            width: 100%;
            border-left: none;
            border-top: none;
            border-bottom: none;
          }
          footer {
            display: grid;
            grid-template-columns: 6rem 1fr;
          }
          footer > div {
            border-top: none;
            border-bottom: none;
            border-left: none;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  visible: boolean;
};
