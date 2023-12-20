import { useState, useEffect } from "react";
import type { GetServerSidePropsContext } from "next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { List, Inputs, Button, Text } from "../../components";
import { DatePicker, CreateChannel } from "../../feature/journal";

import {
  fetchEntries,
  postEntry,
} from "../../redux/reducers/journal/journal_entries";
import { fetchUserChannels } from "../../redux/reducers/journal/journal_channels";

import styles from "./styles/journal.module.css";
import { dynamicSort } from "../../lib/dynamicSort";

export default function SlidesEditor(props: any) {
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    initLoad: false,
    activeChannel: null,
    activeJournal: null,
  } as state);
  const [form, setForm] = useState({ _id: "", title: "", body: "" } as form);
  const store: any = useAppSelector((s) => s);

  const activeChannel = store.journalChannels.data.find(
    (a: { _id: string }) => a._id === state.activeChannel
  );
  let activeChannelData = store.journalEntries.data
    .filter((a: any) => a.channelId === state.activeChannel)
    .sort(dynamicSort("date"));
  let fetchMore = checkFetchMore(
    new Date(store.journalDates.active),
    activeChannelData
  );

  function checkFetchMore(date: Date, activeArray: [any]) {
    let less: any = new Date(date.getTime() - 14 * 24 * 60 * 60 * 1000);
    let more: any = new Date(date.getTime() + 14 * 24 * 60 * 60 * 1000);

    let smallest = activeArray[0] ? activeArray[0].date : new Date();
    let largest = activeArray[activeArray.length - 1]
      ? activeArray[activeArray.length - 1].date
      : new Date();

    let smallestDate = activeArray[0]
      ? new Date(
          `${`${smallest}`.substring(0, 4)}-${`${smallest}`.substring(
            4,
            6
          )}-${`${smallest}`.substring(6, 8)}`
        )
      : new Date();
    let largestDate = activeArray[activeArray.length - 1]
      ? new Date(
          `${`${largest}`.substring(0, 4)}-${`${largest}`.substring(
            4,
            6
          )}-${`${largest}`.substring(6, 8)}`
        )
      : new Date();

    if (less < smallestDate) {
      return true;
    }
    if (more > largestDate) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    if (fetchMore && activeChannel) {
      dispatch(
        fetchEntries({
          date: store.journalDates.integer,
          channelId: activeChannel._id,
        })
      );
    }
  }, [fetchMore, activeChannel]);

  useEffect(() => {
    if (store.journal_entries) {
      console.log(store);
    }
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
    <section className={styles.section} onClick={() => console.log(fetchMore)}>
      <div className={styles.header_channel_picker}>
        {store.journalChannels.data.length > 0 ? (
          <List
            label="cow"
            value={activeChannel ? activeChannel.name : ""}
            list={store.journalChannels.data.map((a: any) => ({
              display: a.name,
              onClickReturn: a._id,
            }))}
            itemClick={(cb: string) =>
              setState({ ...state, activeChannel: cb })
            }
          />
        ) : (
          <>no channels found</>
        )}

        <CreateChannel parState={state} parSet={setState} />
      </div>

      <div className={styles.datePicker}>
        <DatePicker {...props} />
      </div>

      <div className={styles.paper}>
        <Inputs
          type="input"
          style={{ width: "80%", maxWidth: "20rem", marginBottom: "2rem" }}
          value={form.title}
          onChange={(cb: string) => setForm({ ...form, title: cb })}
        />
        <Inputs
          type="rich"
          value={form.body}
          onChange={(val: string) => setForm({ ...form, body: val })}
        />
      </div>

      <div className={styles.tempFooter}>
        {activeChannel && (
          <>
            <Button
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
              onClick={() =>
                dispatch(
                  postEntry({
                    ...form,
                    date: store.journalDates.integer,
                    channelId: activeChannel._id,
                  })
                )
              }
            />
          </>
        )}
      </div>
    </section>
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
