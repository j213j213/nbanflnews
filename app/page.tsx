'use client';

import React, { useState } from 'react';
import FeedList from '@/components/FeedList';
import RefreshButton from '@/components/RefreshButton';
// Chatbot import removed
// import Chatbot from '@/components/Chatbot'; 

const sources = {
  NBA: [
    'https://www.cbssports.com/rss/headlines/nba/',
    'https://www.espn.com/espn/rss/nba/news',
    'https://sports.yahoo.com/nba/rss/',
  ],
  NFL: [
    'https://www.cbssports.com/rss/headlines/nfl/',
    'https://www.espn.com/espn/rss/nfl/news',
    'https://sports.yahoo.com/nfl/rss/',
  ],
};

export default function HomePage() {
  const [feedUrls, setFeedUrls] = useState(sources.NBA);
  const [active, setActive] = useState<'NBA' | 'NFL'>('NBA');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleToggleFeed = (source: 'NBA' | 'NFL') => {
    if (active !== source) {
      setFeedUrls(sources[source]);
      setActive(source);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="w-full px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6 py-4 sm:py-6">
          
          {/* Enhanced Banner - Keep width and height for CLS fix */}
          <div className="w-full max-w-6xl relative overflow-hidden rounded-xl shadow-lg">
            <img 
              src="/banner.png" 
              alt="NBA NFL News Banner" 
              className="w-full h-32 sm:h-40 lg:h-48 object-cover"
              width={1200} // IMPORTANT: Replace with actual banner width
              height={300} // IMPORTANT: Replace with actual banner height
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
          
          {/* Enhanced Navigation */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
            <div className="flex rounded-lg bg-white shadow-md border border-gray-200 p-1">
              <button
                onClick={() => handleToggleFeed('NBA')}
                className={`px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 ${
                  active === 'NBA' 
                    ? 'bg-blue-500 text-white shadow-md transform scale-105' 
                    : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                }`}
              >
                🏀 NBA
              </button>
              <button
                onClick={() => handleToggleFeed('NFL')}
                className={`px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 ${
                  active === 'NFL' 
                    ? 'bg-blue-500 text-white shadow-md transform scale-105' 
                    : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                }`}
              >
                🏈 NFL
              </button>
            </div>
            
            <RefreshButton onRefresh={handleRefresh} isRefreshing={isRefreshing} />
          </div>
          
          {/* Status Indicator */}
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Latest {active} News
            </h1>
            <p className="text-sm text-gray-600">
              Stay updated with the latest {active} headlines
            </p>
          </div>
        </div>
        
        {/* Main Content Area: Now only News Feed */}
        {/* Reverted to single column layout for FeedList as chatbot is removed */}
        <div className="max-w-4xl mx-auto pb-8"> {/* Adjusted max-width back to 4xl */}
          <FeedList urls={feedUrls} key={feedUrls.join('-')} isRefreshing={isRefreshing} />
        </div>
      </div>
    </main>
  );
}

