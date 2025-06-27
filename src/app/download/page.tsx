'use client';

import { useEffect, useState } from 'react';
import TypingTitle from '@/app/components/TypingTitle';
import MatrixBackground from '@/app/components/MatrixBackground';
import Filters from '@/app/components/Filters';
import FileList from '@/app/components/FileList';
import CategoryFilter from '@/app/components/CategoryFilter';

type FileEntry = {
  name: string;
  path: string;
  size: string;
  extension: string;
  category: string;
};

export default function HomePage() {
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [search, setSearch] = useState('');
  const [extFilter, setExtFilter] = useState('all');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then(setFiles);
  }, []);

  const categories = Array.from(new Set(files.map((f) => f.category))).filter(Boolean);

  const filteredFiles = files.filter((f) => {
    const matchName = f.name.toLowerCase().includes(search.toLowerCase());
    const matchExt = extFilter === 'all' || f.extension === extFilter;
    const matchCat = category === 'All' || f.category === category;
    return matchName && matchExt && matchCat;
  });

  return (
    <main className="relative min-h-screen bg-black text-green-400 font-mono overflow-x-hidden z-0">
      <MatrixBackground />
      <div className="w-full mx-auto px-4 py-10 flex flex-col items-center">

        <TypingTitle text="💾 DataLeak Repository" />

        <CategoryFilter
          categories={categories}
          selected={category}
          onSelect={setCategory}
        />

        <Filters
          search={search}
          onSearch={setSearch}
          selectedExtension={extFilter}
          onSelectExtension={setExtFilter}
          files={files}
        />

        <FileList files={filteredFiles} />

      </div>
    </main>
  );
}
