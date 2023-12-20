import { ObjectId } from "mongodb";
import client from "../client";

const collection = "journal_entries";
let db = client.collection(collection);

function dateFromInteger(date: string, offset: number) {
  let yyyy = parseInt(date.substring(0, 4));
  let mm = parseInt(date.substring(4, 6)) - 1;
  let dd = parseInt(date.substring(6, 8));

  let newDate = new Date(yyyy, mm, dd + offset);

  let newYYYY = newDate.getFullYear();
  let newMM =
    newDate.getMonth() + 1 > 9
      ? newDate.getMonth() + 1
      : `0${newDate.getMonth() + 1}`;
  let newDD =
    newDate.getDate() > 9 ? newDate.getDate() : `0${newDate.getDate()}`;

  return parseInt(`${newYYYY}${newMM}${newDD}`);
}

export async function getEntries(date: string, channelId: string) {
  let from = dateFromInteger(date, -14);
  let until = dateFromInteger(date, 14);

  try {
    return await db
      .find({
        channelId: channelId,
        date: { $gt: from, $lt: until },
      })
      .toArray();
  } catch (error) {
    console.log(error);
    throw "Error mongoDb fetch, check log";
  }
}
export async function postOne(form: journalEntry) {
  let duplicate = await db
    .find({
      date: form.date,
      channelId: form.channelId,
    })
    .toArray();
  if (duplicate.length > 0) {
    throw "This Channel & Date already got a post for this date";
  }

  let post = {
    date: form.date,
    channelId: form.channelId,

    title: form.title,
    body: form.body,

    createdOn: new Date(),
    updatedOn: new Date(),
    updatedBy: form.updatedBy,
  };

  try {
    const res = await db.insertOne({ ...post });
    return { ...form, _id: res.insertedId };
  } catch (error) {
    return "MongoDB functional error";
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
          updatedBy: form.updatedBy,
          updatedAt: new Date(),
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
