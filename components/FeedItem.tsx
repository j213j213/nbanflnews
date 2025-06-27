export default function FeedItem({ item }: { item: any }) {
  return (
    <li className="border p-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold">
        {item.title}
      </a>
      <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{item.pubDate}</p>
    </li>
  );
}
