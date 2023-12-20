import { useState } from "react";

import { Button, Inputs } from "../../../components";

import * as journalActions from "../../../redux/reducers/journal/journal_channels";
import { useAppDispatch } from "../../../redux/hooks";

import styles from "./CreateChannel.module.css";

export function CreateChannel(props: any) {
  const dispatch = useAppDispatch();
  const [state, setState] = useState({ open: false });
  const [form, setForm] = useState({
    name: "",
  });

  async function submit(e: any, form: any) {
    e.preventDefault();

    if (form.name.length < 2) {
      alert("Channel names need to be longer then 2 characters");
      return;
    }
    if (form.name.length > 20) {
      alert("Channel names character count limited to 20 characters for now");
      return;
    }

    try {
      let { payload }: any = await dispatch(journalActions.postChannel(form));
      setState({ ...state, open: false });
      props.parSet({ ...props.parState, activeChannel: payload._id });
    } catch (error) {
      return;
      //dispatch(toast(error.response.message));
    }
  }

  return (
    <>
      <div
        className={`bg ${styles.wrapper} ${state.open ? styles.active : ""}`}
      >
        <div>
          <header>
            <Button
              type="close"
              style={{ height: "2rem", width: "2rem" }}
              onClick={() => setState({ ...state, open: false })}
            />
          </header>
        </div>
        <form className={styles.form} onSubmit={(e) => submit(e, form)}>
          <Inputs
            type="input"
            placeholder="Channel name"
            value={form.name}
            onChange={(cb: string) => setForm({ ...form, name: cb })}
          />

          <div className={styles.pseudoBorder} />
        </form>
      </div>

      <Button
        type="subtitle"
        text="+"
        style={iStyle}
        onClick={() => setState({ ...state, open: true })}
      />
    </>
  );
}

let iStyle = {
  height: "3rem",
  width: "3rem",
  borderRadius: "50%",
  fontSize: "2rem",
};
