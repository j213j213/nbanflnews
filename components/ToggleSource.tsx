type Props = {
  source: "nba" | "nfl";
  onToggle: () => void;
};

export default function ToggleSource({ source, onToggle }: Props) {
  return (
    <div className="flex gap-2 justify-center mt-4">
      <button
        onClick={onToggle}
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        Toggle to {source === "nba" ? "NFL" : "NBA"}
      </button>
    </div>
  );
}
