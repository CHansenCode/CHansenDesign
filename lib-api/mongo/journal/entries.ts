import { ObjectId } from "mongodb";
import client from "../client";

const collection = "journal";
let db = client.collection(collection);

function dateInteger(date: Date) {
  date = new Date(date);

  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  return parseInt(`${yyyy}${mm}${dd}`);
}

export async function getEntries(incDate: Date, channelId: string) {
  let date = new Date(incDate);
  let from: number = dateInteger(new Date(date.getTime() - 14 * 24 * 60 * 60));
  let until: number = dateInteger(new Date(date.getTime() + 14 * 24 * 60 * 60));

  try {
    return await db
      .find({
        channel_id: channelId,
        $gt: { date: from },
        $lt: { date: until },
      })
      .toArray();
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function postOne(form: journalEntry) {
  try {
    const res = await db.insertOne({ ...form, createdOn: new Date() });
    return { ...form, _id: res.insertedId };
  } catch (error) {
    return error;
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
export async function findByIdAndUpdate(form: journalEntry) {
  try {
    const { value } = await db.findOneAndUpdate(
      {
        _id: new ObjectId(form._id),
      },
      {
        $set: {
          title: form.title,
          body: form.body,
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
