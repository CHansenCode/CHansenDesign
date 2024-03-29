import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { Text, Button } from "../../components";

import {
  decrementDate,
  incrementDate,
} from "../../redux/reducers/journal/journal_date";

import { dates } from "../../lib";

import styles from "./DatePicker.module.css";

export function DatePicker(props: any) {
  const dispatch = useAppDispatch();

  const storeDate = useAppSelector((s) => s.journalDates);

  return (
    <section className={styles.container}>
      <div>
        <Button
          type="left"
          style={{ height: "2rem", width: "2rem", borderRadius: "50%" }}
          onClick={() => dispatch(decrementDate())}
        />
      </div>

      <DateItem
        date={dates(storeDate.active, -24 * 3).isoString}
        activeChannel={props.activeChannel ? props.activeChannel._id : ""}
      />
      <DateItem
        date={dates(storeDate.active, -24 * 2).isoString}
        activeChannel={props.activeChannel ? props.activeChannel._id : ""}
      />
      <DateItem
        date={dates(storeDate.active, -24 * 1).isoString}
        activeChannel={props.activeChannel ? props.activeChannel._id : ""}
      />

      <CurrentDate
        date={dates(storeDate.active).isoString}
        activeChannel={props.activeChannel ? props.activeChannel._id : ""}
      />

      <DateItem
        date={dates(storeDate.active, 24 * 1).isoString}
        activeChannel={props.activeChannel ? props.activeChannel._id : ""}
      />
      <DateItem
        date={dates(storeDate.active, 24 * 2).isoString}
        activeChannel={props.activeChannel ? props.activeChannel._id : ""}
      />
      <DateItem
        date={dates(storeDate.active, 24 * 3).isoString}
        activeChannel={props.activeChannel ? props.activeChannel._id : ""}
      />

      <div>
        <Button
          type="right"
          style={{ height: "2rem", width: "2rem", borderRadius: "50%" }}
          onClick={() => dispatch(incrementDate())}
        />
      </div>
    </section>
  );
}

const DateItem = (props: dateItemTypes) => {
  let dd = props.date.substring(8, 10);
  let dayOfWeek = dates(props.date).dow;

  const exists = useAppSelector((s) => s.journalEntries.data);
  let isThere = exists.find((a: any) => a.date === dates(props.date).integer)
    ? true
    : false;

  let iStyle = {
    color:
      dayOfWeek === "Sunday" || dayOfWeek === "Saturday" ? "salmon" : "inherit",
  };

  return (
    <div
      className={styles.dateItem}
      style={iStyle}
      onClick={() => dateClick("value")}
    >
      <Text type="h5" text={dd} style={{ fontWeight: 700 }} />
      <Text
        type="h6"
        style={{ fontSize: "0.5rem" }}
        text={`${dayOfWeek}`.substring(0, 3).toUpperCase()}
      />

      {isThere && <div className={styles.valIndicator} />}
    </div>
  );
};
const CurrentDate = (props: dateItemTypes) => {
  let dd = `${props.date}`.substring(8, 10);
  let dayOfWeek = dates(props.date).dow;

  const exists = useAppSelector((s) => s.journalEntries.data);
  let isThere = exists.find((a: any) => a.date === dates(props.date).integer)
    ? true
    : false;

  let iStyle = {
    display: "grid",
    color:
      dayOfWeek === "Sunday" || dayOfWeek === "Saturday" ? "salmon" : "inherit",
  };

  return (
    <div
      style={iStyle}
      className={styles.dateCurrent}
      onClick={() => dateClick("value")}
    >
      <Text
        type="h4"
        text={dd}
        style={{ fontWeight: 700, textAlign: "center" }}
      />
      <Text type="h5" text={`${dayOfWeek}`.substring(0, 3).toUpperCase()} />

      {isThere && <div className={styles.valIndicator} />}
    </div>
  );
};

async function dateClick(value: string) {
  console.log(value);
}

interface dateItemTypes {
  date: string;
  value?: number;
  hasValue?: boolean;
  activeChannel: string;
}
