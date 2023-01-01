import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

export const NavLink = (props: any) => {
  const { pathname } = useRouter();

  const isActive = pathname.startsWith(props.href);

  return (
    <>
      <Link href={props.href}>
        <li className={`${isActive ? "sc" : ""}`}>{props.as}</li>
      </Link>

      <style jsx>
        {`
          .li {
            border-radius: 1rem;
            padding: 0.25rem 0.6rem;

            transition: 0.5s ease;

            border: thin solid rgba(0, 0, 0, 0.1);
            box-shadow: inset 0 0 0 0 transparent;

            //init
            outline: thin dashed transparent;
          }

          $topLeft: inset 0.1rem 0.1rem 0rem 0rem rgba(0, 0, 0, 0.2);
          $bottomRight: inset -0.2rem -0.2rem 0 0 rgba(0, 0, 0, 0.15);

          .li:hover {
            box-shadow: $topLeft;
            background: rgb(247, 247, 247);
            border: thin solid rgba(0, 0, 0, 0.1);
          }

          .active {
            box-shadow: $topLeft;
            border: thin solid rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </>
  );
};
