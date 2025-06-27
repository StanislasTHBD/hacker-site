import FileCard from './FileCard';

type FileEntry = {
  name: string;
  path: string;
  size: string;
  extension: string;
  category: string;
};

interface Props {
  files: FileEntry[];
}

export default function FileList({ files }: Props) {
  return (
    <div className="w-full max-w-3xl space-y-6 mt-8">
      {files.map((file, index) => (
        <FileCard key={index} file={file} />
      ))}
    </div>
  );
}