import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";
import client from "../../lib/client";

const col = "journal";

export async function getAll() {
  let database = (await clientPromise).db("test");
  let collection = database.collection("cow");

  console.log("database", database);
  console.log("collection", collection);

  try {
    collection.insertOne({ title: "title", body: "body" });
    //const response = await clientPromise.collection(col).find().toArray();

    console.log(response);
    //return response;
  } catch (error) {
    return error;
  }
}

export async function postOne(formData) {
  try {
    const response = await clientPromise.collection(col).insertOne(formData);

    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
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
