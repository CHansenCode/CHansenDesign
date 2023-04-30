import { useRouter } from "next/router";
import { Button } from "../components";

export default function IndexPage() {
  const router = useRouter();
  return (
    <>
      <section>
        Landing page eh
        <Button text="caticorn" onClick={() => router.push("/caticorn")} />
      </section>

      <style jsx>{`
        section {
          width: 100%;
        }
      `}</style>
    </>
  );
}
