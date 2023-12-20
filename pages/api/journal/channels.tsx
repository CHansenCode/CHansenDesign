// This is an example of to protect an API route
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

import {
  getUserChannels,
  postOne,
  findByIdAndUpdate,
  findByIdAndDelete,
} from "../../../lib-api/mongo/journal/channels";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { user }: any = await getServerSession(req, res, authOptions);
  if (!user) {
    return res.status(400).json("No user found");
  }

  console.log(user);

  if (req.method === "GET") {
    let data = await getUserChannels(user._id);
    return res.status(200).json(data);
  }
  if (req.method === "POST") {
    let data = await postOne({
      ...req.body,
      editors: [user._id],
      users: [user._id],
      updatedBy: user.email,
    });

    return res.status(200).json(data);
  }
  if (req.method === "PUT") {
    let data = await findByIdAndUpdate({
      ...req.body,
      user: user.email,
      updatedBy: user.email,
    });
    return res.status(200).json(data);
  }
  if (req.method === "DELETE") {
    let data = await findByIdAndDelete(req.body as string);
    return res.status(200).json(data);
  }

  return res.status(400).json("unrecognisable request");
}
