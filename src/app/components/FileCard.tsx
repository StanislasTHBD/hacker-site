type FileEntry = {
  name: string;
  path: string;
  size: string;
  extension: string;
};

interface FileCardProps {
  file: FileEntry;
}

export default function FileCard({ file }: FileCardProps) {
  return (
    <div className="bg-green-900/20 border border-green-700 p-4 rounded shadow hover:bg-green-800/40 transition w-full flex flex-col sm:flex-row justify-between items-center gap-2">
      <a
        href={file.path}
        download
        className="text-green-300 font-semibold hover:underline text-center sm:text-left"
      >
        📄 {file.name}
      </a>
      <span className="text-sm text-green-400 text-right">
        [{file.extension.toUpperCase()} • {file.size}]
      </span>
    </div>
  );
}