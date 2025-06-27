// pages/api/news.ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q } = req.query;
  if (!q || Array.isArray(q)) return res.status(400).json({ error: 'Missing query' });

  try {
    const { data } = await axios.get(
      'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI',
      {
        params: { q, pageNumber: 1, pageSize: 20, autoCorrect: true, safeSearch: false },
        headers: {
          'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
        },
      }
    );
    res.status(200).json(data);
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
}
