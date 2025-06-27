'use client';

import { useEffect, useState } from 'react';
import FeedItem from './FeedItem';

export default function FeedList({ url }: { url: string }) {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await fetch(`/api/rss?url=${encodeURIComponent(url)}`);
        const data = await res.json();
        setItems(data.items || []);
      } catch (err) {
        console.error('Failed to fetch feed:', err);
      }
    };
    fetchFeed();
  }, [url]);

  return (
    <div className="grid gap-4">
      {items.map((item, idx) => (
        <FeedItem key={idx} item={item} />
      ))}
    </div>
  );
}
