import { ObjectId } from "mongodb";
import client from "./client";

const col = "users";
let db = client.collection(col);

export async function getAll() {
  try {
    const response = await db.find().toArray();
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function findByIdAndDelete(id: string) {
  try {
    const { value } = await db.findOneAndDelete({ _id: new ObjectId(id) }); //res = {?}
    return value;
  } catch (error) {
    console.log(error);
  }
}
export async function findByIdAndUpdate(
  id: string,
  form: { title: string; tasks: string }
) {
  try {
    const { value } = await db.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          title: form.title,
          tasks: form.tasks,
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
