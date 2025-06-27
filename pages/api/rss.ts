import type { NextApiRequest, NextApiResponse } from "next";
import Parser from "rss-parser";

const parser = new Parser();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const feed = await parser.parseURL(url);
    res.status(200).json({ items: feed.items });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch RSS feed" });
  }
}
