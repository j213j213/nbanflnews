'use client';

interface RefreshButtonProps {
  onRefresh: () => void;
  isRefreshing: boolean;
}

export default function RefreshButton({ onRefresh, isRefreshing }: RefreshButtonProps) {
  return (
    <button
      onClick={onRefresh}
      disabled={isRefreshing}
      className={`
        flex items-center gap-2 px-4 py-3 rounded-lg border font-medium text-sm
        transition-all duration-200 min-w-[120px] justify-center
        ${isRefreshing 
          ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm active:transform active:scale-95'
        }
      `}
    >
      <svg 
        className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
        />
      </svg>
      {isRefreshing ? 'Refreshing...' : 'Refresh'}
    </button>
  );
}