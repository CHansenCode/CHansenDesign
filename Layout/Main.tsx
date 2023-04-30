import { useSelector } from "react-redux";

export const Main = ({ children, loggedIn, ...props }: Props) => {
  const showDash: any = useSelector((s: any) => s.global.showDash);

  return (
    <>
      <main>{children}</main>

      <style jsx>
        {`
          main {
            position: relative;
            height: ${loggedIn ? "100vh" : "auto"};
            width: ${showDash ? "calc(100vw - 10rem)" : "100vw"};
            min-height: 100vh;

            margin-left: ${showDash ? "10rem" : "0rem"};
            overflow-x: hidden;
            overflow-y: auto;

            transition: 0.2s ease;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  loggedIn: boolean;
  children: React.ReactNode;
};
