type FileEntry = {
  name: string;
  path: string;
  size: string;
  extension: string;
  category: string;
};

interface Props {
  search: string;
  onSearch: (v: string) => void;
  selectedExtension: string;
  onSelectExtension: (v: string) => void;
  files: FileEntry[];
}

export default function Filters({
  search,
  onSearch,
  selectedExtension,
  onSelectExtension,
  files
}: Props) {
  const extensions = Array.from(new Set(files.map(f => f.extension)));

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
      <input
        type="text"
        placeholder="🔍 Rechercher un fichier..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="bg-black border border-green-500 px-4 py-2 rounded w-full sm:w-96"
      />
      <select
        value={selectedExtension}
        onChange={(e) => onSelectExtension(e.target.value)}
        className="bg-black border border-green-500 px-4 py-2 rounded text-green-300 w-full sm:w-56"
      >
        <option value="all">Toutes extensions</option>
        {extensions.map((ext) => (
          <option key={ext} value={ext}>
            .{ext}
          </option>
        ))}
      </select>
    </div>
  );
}