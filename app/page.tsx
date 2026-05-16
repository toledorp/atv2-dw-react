"use client";

import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import HeroCard from "../components/HeroCard";

export interface PowerStats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface Hero {
  id: string;
  name: string;
  powerstats: PowerStats;
  image: { url: string };
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const searchHero = async () => {
    if (!search) return;

    try {
      const response = await axios.get(`/api/search?name=${search}`);
      setHeroes(response.data.results || []);
    } catch (error) {
      console.error("Erro ao buscar herói:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>SuperHero Finder</h1>

      <SearchBar search={search} setSearch={setSearch} onSearch={searchHero} />

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}