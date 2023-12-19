import { ReactEventHandler, useState } from "react";

import { Button, Inputs } from "../../../components";

import * as journalActions from "../../../redux/reducers/journal/journal_channels";
import { useAppDispatch } from "../../../redux/hooks";

export function CreateChannel(props: any) {
  const dispatch = useAppDispatch();
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
      let res = await dispatch(journalActions.postChannel(form));

      console.log(res);
    } catch (error) {
      return;
      //dispatch(toast(error.response.message));
    }
  }

  return (
    <>
      <form onSubmit={(e) => submit(e, form)}>
        <Inputs
          type="input"
          placeholder="Channel name"
          value={form.name}
          onChange={(e: any) => setForm({ ...form, name: e.target.value })}
        />
      </form>

      <Button type="subtitle" text="+" style={iStyle} />
    </>
  );
}

let iStyle = {
  height: "3rem",
  width: "3rem",
  borderRadius: "50%",
  fontSize: "2rem",
};

async function postChannel(form: any) {
  try {
  } catch (error) {
    console.log(error);
  }
}
