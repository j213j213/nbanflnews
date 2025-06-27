export default async function fetchFeed(url: string) {
  const res = await fetch(`/api/rss?url=${encodeURIComponent(url)}`);
  const data = await res.json();
  return data.items;
}
