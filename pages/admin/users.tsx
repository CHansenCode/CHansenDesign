import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../../redux/reducers/users";

export default function UsersEditor() {
  const dispatch = useDispatch();

  const store = useSelector((s) => s);
  const usersStatus = useSelector((s) => s.users.status);

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]); //eslint-disable-line

  // const users = dispatch(getAll());

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
