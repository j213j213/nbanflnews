'use client';

import React, { useState } from 'react';
import FeedList from '@/components/FeedList';
import RefreshButton from '@/components/RefreshButton';

const sources = {
  NBA: 'https://www.cbssports.com/rss/headlines/nba/',
  NFL: 'https://www.cbssports.com/rss/headlines/nfl/',
};

export default function HomePage() {
  const [feedUrl, setFeedUrl] = useState(sources.NBA);
  const [active, setActive] = useState<'NBA' | 'NFL'>('NBA');

  const handleToggleFeed = (source: 'NBA' | 'NFL') => {
    setFeedUrl(sources[source]);
    setActive(source);
  };

  return (
    <main className="min-h-screen bg-white text-black transition-colors">
      <div className="w-full px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-4 py-4">
          <img src="/banner.png" alt="Banner" className="w-full h-40 object-cover rounded-md" />


          <div className="space-x-2">
            <button
              onClick={() => handleToggleFeed('NBA')}
              className={`px-4 py-2 rounded-md font-semibold ${
                active === 'NBA' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              NBA
            </button>
            <button
              onClick={() => handleToggleFeed('NFL')}
              className={`px-4 py-2 rounded-md font-semibold ${
                active === 'NFL' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              NFL
            </button>
          </div>

          <RefreshButton />
        </div>

        <FeedList url={feedUrl} />
      </div>
    </main>
  );
}
