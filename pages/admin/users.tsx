import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { fetchUsers } from "../../redux/reducers/users";

export default function UsersEditor() {
  const dispatch = useAppDispatch();

  const store = useAppSelector((s) => s);
  const usersStatus = useAppSelector((s) => s.users.status);

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]); //eslint-disable-line

  console.log(store);

  return (
    <>
      <section onClick={() => console.log(store)}>
        <div>
          <h4>Users</h4>
        </div>
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
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
      `}</style>
    </>
  );
}
