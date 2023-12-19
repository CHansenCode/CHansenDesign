import { useAppSelector } from "../redux/hooks";

export const Main = ({ children, loggedIn, ...props }: Props) => {
  const showDash: any = useAppSelector((s: any) => s.global.showDash);

  return (
    <>
      <main>
        <section>{children}</section>
      </main>

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

          section {
            padding-top: 10vh;
            padding-left: 10vh;
            padding-right: 10vh;
            padding-bottom: 20vh;

            display: flex;
            flex-alignment: column;
            justify-content: center;

            overflow: auto;
          }

          @media screen and (max-width: 800px) {
            section {
              padding-top: 5vh;
            }
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
