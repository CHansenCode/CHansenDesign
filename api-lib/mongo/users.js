import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

const col = "users";

export async function getAll() {
  try {
    const response = await clientPromise.collection("cow").find().toArray();
    return response;
  } catch (error) {
    return error;
  }
}
export async function findByIdAndDelete(db, id) {
  try {
    const { value } = await db
      .collection(col)
      .findOneAndDelete({ _id: new ObjectId(id) }); //res = {?}

    console.log("delete one users");

    return value;
  } catch (error) {
    console.log(error);
  }
}
export async function findByIdAndUpdate(db, id, data) {
  try {
    const { value } = await db.collection(col).findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          title: data.title,
          tasks: data.tasks,
        },
      },
      {
        returnDocument: "after",
      }
    );

    console.log("patch one users, mongo func");

    return value;
  } catch (error) {
    console.log("error in mongo func, updating workstation");
  }
}
