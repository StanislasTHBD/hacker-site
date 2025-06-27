'use client';

type Props = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

export default function CategoryFilter({ categories, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 my-6">
      {['All', ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 border rounded transition ${
            selected === cat ? 'bg-green-500 text-black' : 'border-green-500 text-green-400 hover:bg-green-800'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
