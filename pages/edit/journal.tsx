import { useState, useEffect } from "react";
import type { GetServerSidePropsContext } from "next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { Loading, Inputs, Button } from "../../components";
import { DatePicker, CreateChannel } from "../../feature/journal";

import {
  fetchEntries,
  postEntry,
} from "../../redux/reducers/journal/journal_entries";
import { fetchUserChannels } from "../../redux/reducers/journal/journal_channels";

import styles from "./styles/journal.module.css";

export default function SlidesEditor(props: any) {
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    initLoad: false,
    activeChannel: null,
    activeJournal: null,
  } as state);
  const [form, setForm] = useState({ _id: "", title: "", body: "" } as form);
  const store: any = useAppSelector((s) => s);

  let data = [];

  useEffect(() => {
    if (store.journal_entries) {
      console.log(store);
    }
    //Make logic here, if current date selected & range of date < 7 days, fetch more.
  }, [store.journalDate]);

  useEffect(() => {
    !state.initLoad && dispatch(fetchUserChannels());
    setState({ ...state, initLoad: true });
  }, []);

  props = {
    ...props,
    form,
    setForm,
  };

  return (
    <>
      <section className={styles.section} onClick={() => {}}>
        <header>
          {!state.initLoad && <Loading />}

          {/* <CreateChannel /> */}

          <DatePicker {...props} />

          {state.activeChannel && <></>}

          {!state.activeChannel ? (
            <div>
              {store.journalChannels.data.map((a: journalChannel) => (
                <div
                  key={a._id}
                  onClick={() => setState({ ...state, activeChannel: a._id })}
                >
                  {a.name}
                </div>
              ))}
            </div>
          ) : data.length === 0 ? (
            <DatePicker {...props} />
          ) : (
            <Loading />
          )}
        </header>

        <main className="" onClick={() => console.log(form)}>
          <Inputs
            type="input"
            style={{ width: "80%", maxWidth: "20rem" }}
            value={form.title}
            onChange={(cb: string) => setForm({ ...form, title: cb })}
          />

          <span
            style={{
              width: "80%",
              maxWidth: "20rem",
              borderTop: "thin solid",
              marginBottom: "2rem",
              opacity: "0.2",
            }}
          />

          <Inputs
            type="rich"
            value={form.body}
            onChange={(val: string) => setForm({ ...form, body: val })}
          />

          <div>
            {/* <Button
              text="get entries"
              onClick={() =>
                dispatch(
                  fetchEntries({
                    date: store.journalDates.integer,
                    channelId: state.activeChannel ? state.activeChannel : "",
                  })
                )
              }
            />
            <Button
              text="post/patch Entry"
              onClick={() => dispatch(postEntry(form))}
            /> */}
          </div>

          {/* {data.length ? <TextEditor /> : <Loading />} */}
        </main>
      </section>
    </>
  );
}

interface state {
  initLoad: boolean;
  activeChannel: string | null;
  activeJournal: string | null;
}
interface form {
  _id: string;
  title: string;
  body: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const res =
  //   process.env.NODE_ENV === "development"
  //     ? await fetch("http://localhost:3000/api/journal/channels")
  //     : await fetch("http://localhost:3000/api/journal/channels");

  return {
    props: { cow: "" },
  };
}
