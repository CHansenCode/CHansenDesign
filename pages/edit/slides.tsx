import { unstable_getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";
import { authOptions } from "../api/auth/[...nextauth]";

import { useState } from "react";

import { Slides, Text } from "../../components";

export default function SlidesEditor({ ...props }) {
  const [state, setState] = useState({ activeId: "" });
  // const { data: session } = useSession();

  console.log(props);

  const stringCheck = `/admin/whatever`;
  console.log(stringCheck.includes("whatever"));

  // console.log(session);

  return (
    <>
      <section>
        <header>
          <div>I are a header here</div>

          <aside>Options btn</aside>
        </header>

        <main>
          <Slides.Item />
        </main>
      </section>

      <style jsx>{`
        section {
          height: 100%;
          width: 100%;

          display: grid;
          grid-template-rows: 4rem 1fr;
        }
        header {
          height: 4rem;
          width: 100%;

          padding: 1rem;

          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;

          box-shadow: 0 0 1rem -0.5rem currentColor;
        }
        header > div {
          display: flex;
          gap: 1rem;
        }
        main {
          height: 100%;
          width: 100%;

          padding: 2rem;

          display: flex;
          flex-direction: column;
          gap: 1rem;

          overflow-x: hidden;
          overflow-y: auto;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  return {
    props: {
      user: session || "cow",
    },
  };
}
