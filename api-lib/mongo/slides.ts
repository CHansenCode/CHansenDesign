import { ObjectId } from "mongodb";

const col = "slides";

export async function getAll({ db }: Props) {
  try {
    const response = await db.collection(col).find().toArray();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function postOne({ db, formData }: Props) {
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

export async function findByIdAndUpdate({ db, id, data }: Patch) {
  try {
    const { value } = await db.collection(col).findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          whom: data.whom,
          company: data.company,
          urlParam: data.urlParam,
          deadline: data.deadline,
          publishedAt: data.publishedAt,
          nameOfHandler: data.nameOfHandler,
          published: data.published,
          richTextOne: data.richTextOne,
          richTextTwo: data.richTextTwo,
          richTextThree: data.richTextThree,
          richTextFour: data.richTextFour,
        },
      },
      { returnDocument: "after" }
    ); //res = {?}
    return value;
  } catch (error) {
    console.log(error);
  }
}

export async function findByIdAndDelete({ db, id }: Props) {
  try {
    const { value } = await db
      .collection(col)
      .findOneAndDelete({ _id: new ObjectId(id) });
    return value;
  } catch (error) {
    console.log(error);
  }
}

type Props = {
  db: any;
  formData: object;
  id?: string;
};

type Patch = {
  db: any;
  id: string;
  data: {
    whom: string;
    company: string;
    urlParam: string;
    deadline: string;
    publishedAt: string;
    nameOfHandler: string;
    published: boolean;
    richTextOne: any;
    richTextTwo: any;
    richTextThree: any;
    richTextFour: any;
  };
};
