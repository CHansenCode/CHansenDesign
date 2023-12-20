import { ObjectId } from "mongodb";
import client from "../client";

const collection = "journal_channels";
let db = client.collection(collection);

export async function getUserChannels(userId: string) {
  try {
    return await db.find({ users: userId }).toArray();
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function postOne(form: JournalPost) {
  try {
    const res = await db.insertOne({
      name: form.name,
      editors: form.editors,
      users: form.users,
      createdOn: new Date(),
      updatedOn: new Date(),
      updatedBy: form.updatedBy,
    });

    return { ...form, _id: res.insertedId };
  } catch (error) {
    return error;
  }
}
export async function findByIdAndUpdate(form: JournalPost) {
  try {
    const { value } = await db.findOneAndUpdate(
      {
        _id: new ObjectId(form._id),
      },
      {
        $set: {
          name: form.name,
          editors: form.editors,
          users: form.users,
          updatedOn: new Date(),
          updatedBy: form.users,
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
export async function findByIdAndDelete(id: string) {
  try {
    const { value } = await db.findOneAndDelete({ _id: new ObjectId(id) });
    return value;
  } catch (error) {
    console.log(error);
  }
}

export default {
  getUserChannels,
  postOne,
  findByIdAndDelete,
  findByIdAndUpdate,
};

interface JournalPost {
  _id?: string;
  name: string;
  editors: [string];
  users: [string];
  user: string;
  updatedOn?: Date;
  updatedBy?: Date;
  createdOn?: Date;
}
