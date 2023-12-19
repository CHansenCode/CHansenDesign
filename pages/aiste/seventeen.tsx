import { useState, useEffect } from "react";
import type { GetServerSidePropsContext } from "next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { Loading, Button } from "../../components";

import a from "../../public/a.png";

import styles from "./aiste.module.css";

export default function Seventeen(props: any) {
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

  let date = new Date(2023, 11, 17).getTime();
  if (new Date(props.cow).getTime() < new Date(2023, 11, 17).getTime()) {
    return (
      <>
        You must be confused over the days, the day you are trying to access is
        yet to exist. Do you want to create it?
        <Button
          text="Create new day"
          onClick={() => setState({ ...state, createDay: true })}
        />
        {state.createDay && (
          <>
            Insufficient time traveling points detected, aborting creation of
            new day. Please travel time the normal way and come back on a more
            appropriate space-time coordinate. We sent you a book that you can
            read in the meanwhile, if the book and you aren't at the same
            space-time coordinates in the current timeline. Just travel back to
            this space-time coordinate with the body of the book from a future
            point.
          </>
        )}
      </>
    );
  }

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
