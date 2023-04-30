import type { NextApiRequest, NextApiResponse } from "next";
import { getAll } from "../../../api-lib/mongo/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const users = await getAll();

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
}
