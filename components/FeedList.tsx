'use client';

import { useEffect, useState } from 'react';
import FeedItem from './FeedItem';

interface FeedListProps {
  urls: string[]; // Changed from 'url' to 'urls' to accept an array
  isRefreshing?: boolean;
}

const ITEMS_PER_LOAD = 10; // Number of items to load at a time

export default function FeedList({ urls, isRefreshing }: FeedListProps) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<number>(ITEMS_PER_LOAD); // State to manage visible items

  useEffect(() => {
    const fetchAllFeeds = async () => {
      setLoading(true);
      setError(null);
      let allFetchedItems: any[] = [];

      for (const url of urls) {
        try {
          const res = await fetch(`/api/rss?url=${encodeURIComponent(url)}`);
          
          if (!res.ok) {
            console.error(`HTTP error fetching ${url}: status ${res.status}`);
            // Continue fetching other feeds even if one fails
            continue; 
          }
          
          const data = await res.json();
          if (data.items && Array.isArray(data.items)) {
            allFetchedItems = allFetchedItems.concat(data.items);
          }
        } catch (err) {
          console.error(`Failed to fetch feed from ${url}:`, err);
          // Only set a general error if no feeds could be fetched at all
          if (allFetchedItems.length === 0) {
            setError(err instanceof Error ? err.message : 'Failed to load some news feeds');
          }
        }
      }

      // Sort all items by publication date (newest first)
      allFetchedItems.sort((a, b) => {
        const dateA = new Date(a.pubDate || 0).getTime();
        const dateB = new Date(b.pubDate || 0).getTime();
        return dateB - dateA;
      });

      setItems(allFetchedItems);
      setLoading(false);
      setVisibleItems(ITEMS_PER_LOAD); // Reset visible items on new fetch
    };

    fetchAllFeeds();
  }, [urls, isRefreshing]); // Re-fetch when URLs or refresh state changes

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + ITEMS_PER_LOAD);
  };

  // Loading State
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(ITEMS_PER_LOAD)].map((_, i) => ( // Show loading skeletons for initial load amount
          <div key={i} className="bg-gray-100 rounded-xl p-4 sm:p-5 h-40 animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
            <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  // Error State
  if (error && items.length === 0) { // Only show full error if no items at all
    return (
      <div className="text-center py-12 bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="text-red-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-red-700 mb-2">Error Loading News</h3>
        <p className="text-red-600 text-sm mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()} // Simple refresh for error recovery
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Empty State
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-600 mb-2">No News Available</h3>
        <p className="text-gray-500 text-sm">
          It looks like there are no news articles from the selected sources. Please try refreshing or check back later!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Reverted to a simple vertical stack instead of a grid */}
      {items.slice(0, visibleItems).map((item, i) => (
        <FeedItem key={item.link || i} item={item} index={i} />
      ))}

      {/* Load More Button */}
      {visibleItems < items.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Load More News ({items.length - visibleItems} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
