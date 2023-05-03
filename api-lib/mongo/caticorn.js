import { ObjectId } from "mongodb";

const col = "slides";

export async function getAll({ db }) {
  try {
    const response = await db.collection(col).find().toArray();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function postOne({ db, formData }) {
  formData = {
    ...formData,
    createdAt: new Date(),
  };
  try {
    const response = await db.collection(col).insertOne(formData);
    return response;
  } catch (error) {
    console.log(error);
  }
}
