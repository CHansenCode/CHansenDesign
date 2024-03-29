import { ObjectId } from "mongodb";
import client from "../../lib-api/mongo/client";

const collection = "users";
let db = client.collection(collection);

export async function getAll() {
  try {
    const response = await db.find().toArray();
    return response;
  } catch (error) {
    return error;
  }
}
export async function findByIdAndDelete(db, id) {
  try {
    const { value } = await db.findOneAndDelete({ _id: new ObjectId(id) }); //res = {?}

    console.log("delete one users");

    return value;
  } catch (error) {
    console.log(error);
  }
}
export async function findByIdAndUpdate(db, id, data) {
  try {
    const { value } = await db.findOneAndUpdate(
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
export async function findOneById(id) {
  try {
    let response = await db.findOneById(new ObjectId(id));

    return response;
  } catch (error) {
    return false;
  }
}
