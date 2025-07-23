interface FeedItemProps {
  item: {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet?: string;
    // content property removed as it's not used without summarization
    // content?: string; 
  };
  index: number;
}

import React from 'react'; // Removed useState and useEffect as they are no longer needed for summarization

export default function FeedItem({ item, index }: FeedItemProps) {
  // Removed state for summary, loadingSummary, summaryError
  // const [summary, setSummary] = useState<string | null>(null);
  // const [loadingSummary, setLoadingSummary] = useState<boolean>(false);
  // const [summaryError, setSummaryError] = useState<string | null>(null);

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

  // Removed useEffect for fetching summary
  // useEffect(() => { /* ... summarization logic ... */ }, [item.link, item.content, item.contentSnippet]);

  return (
    <article 
      className={`
        group relative bg-white rounded-xl border border-gray-200 shadow-sm
        hover:shadow-lg hover:border-blue-300 transition-all duration-300
        flex flex-col
        ${isRecent() ? 'ring-2 ring-blue-400/50' : ''}
      `}
    >
      {isRecent() && (
        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md z-10">
          New
        </span>
      )}
      <div className="p-4 sm:p-5 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight flex-grow">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
          >
            {item.title}
          </a>
        </h3>

        {/* Content Preview (reverted to original contentSnippet) */}
        {item.contentSnippet && (
          <p className="text-sm text-gray-600 line-clamp-2 mt-2">
            {item.contentSnippet.length > 120 
              ? `${item.contentSnippet.substring(0, 120)}...` 
              : item.contentSnippet
            }
          </p>
        )}


        {/* Footer Info & Read More Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {formatDate(item.pubDate)}
          </div>
          
          {/* Read More Button - NOW A CLICKABLE LINK */}
          <a 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
          >
            Read more
            <svg className="w-3 h-3 transform translate-x-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
