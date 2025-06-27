interface FeedItemProps {
  item: {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet?: string;
  };
  index: number;
}

export default function FeedItem({ item, index }: FeedItemProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
      
      if (diffInHours < 1) return 'Just now';
      if (diffInHours < 24) return `${diffInHours}h ago`;
      if (diffInHours < 48) return 'Yesterday';
      return date.toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  const isRecent = () => {
    try {
      const date = new Date(item.pubDate);
      const now = new Date();
      const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
      return diffInHours < 6; // Consider articles from last 6 hours as "recent"
    } catch {
      return false;
    }
  };

  return (
    <article 
      className={`
        group relative bg-white rounded-lg border border-gray-200 p-6 
        shadow-sm hover:shadow-md transition-all duration-200 
        hover:border-blue-200 hover:-translate-y-0.5
        ${index < 3 ? 'ring-1 ring-blue-100' : ''}
      `}
    >
      {/* Priority Badge for Top 3 Stories */}
      {index < 3 && (
        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
          #{index + 1}
        </div>
      )}
      
      {/* Recent Badge */}
      {isRecent() && (
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          LIVE
        </div>
      )}

      <div className="space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="before:absolute before:inset-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
          >
            {item.title}
          </a>
        </h3>

        {/* Content Preview */}
        {item.contentSnippet && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {item.contentSnippet.length > 120 
              ? `${item.contentSnippet.substring(0, 120)}...` 
              : item.contentSnippet
            }
          </p>
        )}

        {/* Footer Info */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {formatDate(item.pubDate)}
          </div>
          
          <div className="flex items-center gap-1 text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Read more
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}