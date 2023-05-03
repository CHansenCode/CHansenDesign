import client from "../../lib/mongodb";

const col = "caticorn";

export async function getAll() {
  try {
    const response = await client.collection(col).find().toArray();
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function postOne() {
  const initPost = {
    _id: "caticorn",

    doggies: {
      findCat: 0,
      squid: 0,
      flamingo: 0,
      train: 0,
      bowling: 0,
      minus: 0,
    },
    unicornies: {
      findCat: 0,
      squid: 0,
      flamingo: 0,
      train: 0,
      bowling: 0,
      minus: 0,
    },
    giraffies: {
      findCat: 0,
      squid: 0,
      flamingo: 0,
      train: 0,
      bowling: 0,
      minus: 0,
    },
    bunnies: {
      findCat: 0,
      squid: 0,
      flamingo: 0,
      train: 0,
      bowling: 0,
      minus: 0,
    },
  };

  try {
    const response = await client.collection(col).insertOne(initPost);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function patchOne(data) {
  try {
    const { value } = await client.collection(col).findOneAndUpdate(
      {
        _id: "caticorn",
      },
      {
        $set: {
          doggies: {
            findCat: data.doggies.findCat,
            squid: data.doggies.squid,
            flamingo: data.doggies.flamingo,
            train: data.doggies.train,
            bowling: data.doggies.bowling,
            minus: data.doggies.minus,
          },
          unicornies: {
            findCat: data.unicornies.findCat,
            squid: data.unicornies.squid,
            flamingo: data.unicornies.flamingo,
            train: data.unicornies.train,
            bowling: data.unicornies.bowling,
            minus: data.unicornies.minus,
          },
          giraffies: {
            findCat: data.giraffies.findCat,
            squid: data.giraffies.squid,
            flamingo: data.giraffies.flamingo,
            train: data.giraffies.train,
            bowling: data.giraffies.bowling,
            minus: data.giraffies.minus,
          },
          bunnies: {
            findCat: data.bunnies.findCat,
            squid: data.bunnies.squid,
            flamingo: data.bunnies.flamingo,
            train: data.bunnies.train,
            bowling: data.bunnies.bowling,
            minus: data.bunnies.minus,
          },
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
