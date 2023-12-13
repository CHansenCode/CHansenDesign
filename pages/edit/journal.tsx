import { useState, useEffect } from "react";
import type { GetServerSidePropsContext } from "next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { Loading } from "../../components";
import { TextEditor, DatePicker } from "../../feature/journal";

// import { fetchJournals } from "../../redux/reducers/journal/journal_entries";
import { fetchUserChannels } from "../../redux/reducers/journal/journal_channels";

import styles from "./styles/journal.module.css";
import { fetchEntries } from "../../redux/reducers/journal/journal_entries";

export default function SlidesEditor(props: any) {
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    initLoad: false,
    activeChannel: null,
    activeJournal: null,
  } as state);
  const [form, setForm] = useState({ _id: "", title: "", body: "" } as form);
  const store: any = useAppSelector((s) => s);

  props = {
    ...props,
    form,
    setForm,
  };

  useEffect(() => {
    !state.initLoad && dispatch(fetchUserChannels());
    setState({ ...state, initLoad: true });
  }, []);

  let data = [];

  useEffect(() => {}, [state.activeChannel]);

  useEffect(() => {
    //Make logic here, if current date selected & range of date < 7 days, fetch more.
  }, [store.journalDate]);

  return (
    <>
      <section className={styles.section} onClick={() => {}}>
        <header>
          {!state.initLoad && <Loading />}

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
          ) : data.length ? (
            <DatePicker {...props} />
          ) : (
            <Loading />
          )}
        </header>

        <main onClick={() => {}}>
          <h5> {store.journalEntries.data.length} entries</h5>
          <h5> {store.journalChannels.data.length} channels</h5>
          <h5>{store.journalDates.integer} active date</h5>
          <h5>{state.activeChannel} active channel</h5>
          <button
            onClick={() =>
              dispatch(
                fetchEntries({
                  activeChannel: state.activeChannel,
                  date: store.journalDates.integer,
                })
              )
            }
          >
            Get entries
          </button>
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
