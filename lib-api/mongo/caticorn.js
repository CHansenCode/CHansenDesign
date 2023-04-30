import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

const col = "caticorn";

export async function getAll() {
  try {
    const response = await clientPromise.collection(col).find().toArray();
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function patchOne(db, id, data) {
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
    return value;
  } catch (error) {
    console.log("error in mongo func, updating workstation");
  }
}
