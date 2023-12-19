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

  return res.status(200).json(JSON.stringify(req.query));

  if (req.method === "GET") {
    if (!req.query.date) {
      return res.status(400).json("missing date param for request.");
    }
    if (!req.query.channelId) {
      return res.status(400).json("missing channelID param for request");
    }

    let data = await getEntries(req.body.date, req.body.channelId);
    return res.status(200).json("cow");
  }
  if (req.method === "POST") {
    let data = await postOne({
      ...req.body,
      user: user.email,
    } as journalEntry);
    return res.status(200).json(data);
  }
  if (req.method === "PUT") {
    let data = await findByIdAndUpdate({
      ...req.body,
      user: user.email,
    } as journalEntry);
    return res.status(200).json(data);
  }
  if (req.method === "DELETE") {
    let data = await findByIdAndDelete(req.body as string);
    return res.status(200).json(data);
  }

  return res.status(400).json("unrecognisable request");
}
