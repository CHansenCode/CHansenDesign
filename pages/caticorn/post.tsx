import type { NextApiRequest, NextApiResponse } from "next";

import { postOne } from "../../api-lib/mongo/caticorn";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = await postOne();
    res.status(200).json(db);
  } catch (error) {
    res.status(400).json(error);
  }
}
