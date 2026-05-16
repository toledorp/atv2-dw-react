"use client";

import { Hero } from "../app/page";
import Image from "next/image"; // Import do Next.js
import styles from "../styles/HeroCard.module.css";

interface HeroCardProps {
  hero: Hero;
}

export default function HeroCard({ hero }: HeroCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={hero.image.url} // URL da imagem
        alt={hero.name}
        width={180}
        height={180}
        style={{ borderRadius: "8px" }}
      />
      <h3>{hero.name}</h3>
      <p>Intelligence: {hero.powerstats.intelligence}</p>
      <p>Strength: {hero.powerstats.strength}</p>
    </div>
  );
}