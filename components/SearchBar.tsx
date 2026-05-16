"use client";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ search, setSearch, onSearch }: SearchBarProps) {
  return (
    <div style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite o nome do herói"
        style={{ padding: "8px", width: "200px" }}
      />
      <button onClick={onSearch} style={{ marginLeft: "8px", padding: "8px" }}>
        Buscar
      </button>
    </div>
  );
}