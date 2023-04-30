import type { NextApiRequest, NextApiResponse } from "next";
import { getAll } from "../../../lib-api/mongo/caticorn";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = await getAll();
    res.status(200).json(db);
  } catch (error) {
    res.status(400).json(error);
  }
}
