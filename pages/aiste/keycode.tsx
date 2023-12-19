import { useState, useEffect } from "react";
import type { GetServerSidePropsContext } from "next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { Loading, Button } from "../../components";

import a from "../../public/a.png";

import styles from "./aiste.module.css";

export default function KeyCode(props: any) {
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    date: new Date(props.cow).getTime(),
    createDay: false,
  } as any);
  const store: any = useAppSelector((s) => s);

  props = {
    ...props,
  };

  useEffect(() => {}, []);

  return (
    <>
      <section
        className={styles.section}
        onClick={() => console.log("props", props)}
      >
        <header>something?</header>

        <main onClick={() => console.log("state", state)}>i r main</main>
      </section>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const res =
  //   process.env.NODE_ENV === "development"
  //     ? await fetch("http://localhost:3000/api/journal/channels")
  //     : await fetch("http://localhost:3000/api/journal/channels");

  let date = new Date().toISOString();

  return {
    props: { cow: date },
  };
}
