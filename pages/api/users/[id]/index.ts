import type { NextApiRequest, NextApiResponse } from "next";
import { findOneById } from "../../../../api-lib/mongo/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { id } = req.body;

  try {
    const users = await findOneById(id);

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
}
