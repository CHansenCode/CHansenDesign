import { useAppSelector } from "../../../redux/hooks";
import {
  showDash,
  hideDash,
  toggleDash,
} from "../../../redux/reducers/globalState";

import { useSelector } from "react-redux";

export default function UsersEditor() {
  const store = useSelector((s) => s);

  console.log(store);

  return (
    <>
      <section>
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
