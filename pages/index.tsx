import { useSession } from "next-auth/react";

import { useRouter } from "next/router";
import { Button } from "../components";

export default function IndexPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const loggedIn = session?.user;

  return (
    <>
      <section onClick={() => console.log(loggedIn)}>
        Landing page, empty for now.
      </section>

      <style jsx>{`
        section {
          width: 100%;
        }
      `}</style>
    </>
  );
}
