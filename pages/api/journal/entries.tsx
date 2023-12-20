// This is an example of to protect an API route
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

import {
  getEntries,
  postOne,
  findByIdAndUpdate,
  findByIdAndDelete,
} from "../../../lib-api/mongo/journal/entries";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user }: any = await getServerSession(req, res, authOptions);
  if (!user) {
    return res.status(400).json("No user found");
  }

  if (req.method === "GET") {
    if (!req.query.date) {
      return res.status(400).json("missing date param for request.");
    }
    if (!req.query.channelId) {
      return res.status(400).json("missing channelId param for request");
    }

    let date = `${req.query.date}`;
    let channelId = `${req.query.channelId}`;

    try {
      let data = await getEntries(date, channelId);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  if (req.method === "POST") {
    try {
      let data = await postOne({
        ...req.body,
        updatedBy: user.email,
      } as journalEntry);
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
  if (req.method === "PATCH") {
    console.log("i did this!", req.body);

    let data = await findByIdAndUpdate({
      ...req.body,
      updatedBy: user.email,
    } as journalEntry);
    return res.status(200).json(data);
  }
  if (req.method === "DELETE") {
    let data = await findByIdAndDelete(req.body as string);
    return res.status(200).json(data);
  }

  return res.status(400).json("unrecognisable request");
}
