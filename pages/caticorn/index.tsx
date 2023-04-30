import { useState, useEffect } from "react";
import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";
import { authOptions } from "../api/auth/[...nextauth]";
import { useRouter } from "next/router";

import { Button, Inputs, Text, Form } from "../../components";

import axios from "axios";

const init = {
  state: {
    team: "",
    pId: "",
    input: "",
    loading: false,
  },
  form: {
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  },
};

const team = ["wolfies", "unicornies", "deeries", "caties"];

export default function CaticornPage(props: any) {
  const router = useRouter();
  const [state, setState] = useState({ ...init.state });
  const [form, setForm] = useState({ ...init.form });

  useEffect(() => {}, [state.loading]);

  async function fetchTeamData() {
    const { data } = await axios.get("/api/caticorn");

    setForm({ ...form, ...data });
  }
  async function patchData(team: string, form: object) {
    const { data } = await axios.patch(`/api/caticorn/${team}`);

    setForm({ ...form, ...data });
  }

  async function onSubmitPId(id: string) {
    router.push(`${router.pathname}/?pId=${id}`);
  }
  async function submitData(form: any, pId: string) {
    if (state.loading) {
      return;
    }

    console.log(form);
    console.log(pId);
  }
  async function uploadImage(blob: any) {
    if (state.loading) {
      return;
    }

    const { data }: any = axios.post("/api/caticorn/image", blob);

    console.log(data);
  }
  async function getTeamData(team: string) {
    if (state.loading) {
      return;
    }

    const { data }: any = axios.get(`/api/caticorn/${team}`);

    setForm({ ...form, ...data });
  }

  return props.pId && team.find((a) => a === props.pId) ? (
    <>
      <section>
        <header className="pc1b">We are on the {props.pId} page!</header>

        <main className="pc1b">
          <Form onSubmit={() => submitData(form, props.pId)}>
            <h4>form</h4>

            <Inputs
              label="answer one"
              value={form.one}
              onChange={(e: any) => setForm({ ...form, one: e.target.value })}
            />

            <Inputs type="image" />

            <Button text="submit your answers!" />
          </Form>
        </main>
      </section>

      <style jsx>{`
        section {
          height: 100%;
          width: 100%;
          min-height: 80vh;

          padding-top: 10vh;
        }

        main {
          width: 100%;
          max-width: 30rem;
          transition: 0.3s ease;
        }
        div {
          width: 100%;
          max-width: 20rem;

          display: grid;
          gap: 1rem;

          transition: 0.3s ease;
        }
      `}</style>
    </>
  ) : (
    <>
      <section>
        <Form onSubmit={() => onSubmitPId(state.input)}>
          <Inputs
            label="secret key"
            value={state.input}
            onChange={(e: any) =>
              setState({ ...state, input: `${e.target.value}`.toLowerCase() })
            }
          />
          <Button
            text="submit key"
            margin="2rem 0 0 0"
            onClick={() => onSubmitPId(state.input)}
          />

          {props.pId && (
            <Text
              text="Couldn't find this team, please try again"
              className="alert"
            />
          )}
        </Form>
      </section>

      <style jsx>{`
        section {
          height: 100%;
          width: 100%;
          min-height: 80vh;

          display: flex;
          align-items: center;
          justify-content: center;
        }
        div {
          width: 100%;
          max-width: 20rem;

          display: grid;
          gap: 1rem;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  let pId;
  if (context.query.pId) {
    pId = context.query.pId;
  }

  return {
    props: {
      pId: pId ? pId : "",
      cow: "cow",
      cookie: session,
    },
  };
}
