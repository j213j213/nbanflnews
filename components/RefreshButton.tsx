'use client';

export default function RefreshButton() {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-2 rounded-md border dark:border-white border-black"
    >
      🔄 Refresh
    </button>
  );
}
